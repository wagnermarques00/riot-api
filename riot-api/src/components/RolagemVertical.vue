<template>
  <button
    v-if="mostrarBotao"
    class="fixed bottom-4 right-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
    title="Voltar para o topo"
    @click="voltarParaTopo"
  >
    <svg aria-hidden="true" class="w-4 h-4" fill="none" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9V1m0 0L1 5m4-4L9 5"/>
    </svg>
    <span class="sr-only">Voltar para o topo</span>
  </button>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const PIXELS_ROLAGEM = 240

const mostrarBotao = ref(false)
const posicaoAnterior = ref(0)
const ultimaEmissao = ref(0)

const emit = defineEmits(['rolouParaBaixo'])

onMounted(() => {
  window.addEventListener('scroll', lidarComRolagem)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', lidarComRolagem)
})

function lidarComRolagem() {
  const posicaoAtual = window.scrollY
  if (posicaoAtual > posicaoAnterior.value) {
    if (posicaoAtual - ultimaEmissao.value >= PIXELS_ROLAGEM) {
      emit('rolouParaBaixo')
      ultimaEmissao.value = posicaoAtual
    }
  }
  mostrarBotao.value = posicaoAtual > PIXELS_ROLAGEM
  posicaoAnterior.value = posicaoAtual
}

function voltarParaTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
