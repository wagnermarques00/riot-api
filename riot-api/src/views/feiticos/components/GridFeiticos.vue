<template>
  <div class="flex flex-wrap justify-center gap-8">
    <CardPadrao
      v-for="feitico in listaFeiticos"
      :key="feitico.id"
      :nome="feitico.name"
      :imagem="apiFeiticos.obterLinkImagem.feitico(feitico.id)"
      @click="abrirDetalhesFeitico(feitico.id)"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ApiFeiticos from '@/api/apiFeiticos'
import CardPadrao from '@/components/CardPadrao.vue'

const apiFeiticos = new ApiFeiticos()

const listaFeiticos = ref({})

onMounted(async () => {
  await carregarTodosFeiticos()
})

async function carregarTodosFeiticos() {
  const resposta = await apiFeiticos.listarFeiticos()
  const entradasOrdenadas = Object.entries(resposta).sort((a, b) => a[0] - b[0])
  listaFeiticos.value = Object.fromEntries(entradasOrdenadas)
}

async function abrirDetalhesFeitico(value) {
  alert(value)
}

</script>
