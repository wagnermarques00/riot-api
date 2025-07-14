<template>
  <div class="flex flex-wrap gap-8 justify-center">
    <ImagemComSkeleton
      v-for="icone in listaVisivel"
      :key="icone.id"
      :altura="128"
      :largura="128"
      :caminho="apiIconesInvocadores.obterLinkImagem.icone(icone.image.full)"
      :texto-alternativo="String(icone.id)"
    />
  </div>
  <RolagemVertical @rolou-para-baixo="carregarMaisIcones" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ApiIconesInvocadores from '@/api/apiIconesInvocadores.js'
import ImagemComSkeleton from '@/components/ImagemComSkeleton.vue'
import RolagemVertical from '@/components/RolagemVertical.vue'

const apiIconesInvocadores = new ApiIconesInvocadores()

const ICONES_POR_ROLAGEM = 160

const listaIcones = ref({})
const listaVisivel = ref({})

onMounted(async () => {
  await carregarTodosIcones()
  carregarPrimeirosIcones()
})

async function carregarTodosIcones() {
  const resposta = await apiIconesInvocadores.listarIcones()
  const entradasOrdenadas = Object.entries(resposta).sort((a, b) => a[0] - b[0])
  listaIcones.value = Object.fromEntries(entradasOrdenadas)
}

function carregarPrimeirosIcones() {
  listaVisivel.value = Object.values(listaIcones.value).slice(0, ICONES_POR_ROLAGEM)
}

function carregarMaisIcones() {
  const proximaPosicao = listaVisivel.value.length
  if (proximaPosicao <= Object.values(listaIcones.value).length) {
    const novosIcones = Object.values(listaIcones.value).slice(proximaPosicao, proximaPosicao + ICONES_POR_ROLAGEM)
    listaVisivel.value.push(...novosIcones)
  }
}
</script>
