<template>
  <div class="flex flex-wrap justify-center gap-8">
    <CardPadrao
      v-for="campeao in listaVisivel"
      :key="campeao.id"
      :nome="campeao.name"
      :imagem="apiCampeoes.obterLinkImagem.splash(campeao.id)"
      @click="abrirDetalhesCampeao(campeao.id)"
    />
  </div>
  <RolagemVertical @rolou-para-baixo="carregarMaisCampeoes" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ApiCampeoes from '@/api/apiCampeoes.js'
import CardPadrao from '@/components/CardPadrao.vue'
import RolagemVertical from '@/components/RolagemVertical.vue'

const apiCampeoes = new ApiCampeoes()

const CAMPEOES_POR_ROLAGEM = 30

const emit = defineEmits(['abrir-detalhes-campeao'])

const listaCampeoes = ref([])
const listaVisivel = ref([])

onMounted(async () => {
  await carregarTodosCampeoes()
  carregarPrimeirosCampeoes()
})

function abrirDetalhesCampeao(campeao) {
  emit('abrir-detalhes-campeao', campeao)
}

async function carregarTodosCampeoes() {
  const resposta = await apiCampeoes.listarCampeoes()
  const entradasOrdenadas = Object.entries(resposta).sort((a, b) => a[0] - b[0])
  listaCampeoes.value = Object.fromEntries(entradasOrdenadas)
}

function carregarPrimeirosCampeoes() {
  listaVisivel.value = Object.values(listaCampeoes.value).slice(0, CAMPEOES_POR_ROLAGEM)
}

function carregarMaisCampeoes() {
  const proximaPosicao = listaVisivel.value.length
  if (proximaPosicao <= Object.values(listaCampeoes.value).length) {
    const novosIcones = Object.values(listaCampeoes.value).slice(proximaPosicao, proximaPosicao + CAMPEOES_POR_ROLAGEM)
    listaVisivel.value.push(...novosIcones)
  }
}
</script>