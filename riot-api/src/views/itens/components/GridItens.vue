<template>
  <div class="flex flex-wrap justify-center gap-8">
    <CardPadrao
      v-for="item in listaVisivel"
      :key="item.id"
      :altura="160"
      :largura="160"
      :nome="item.name"
      :imagem="apiItens.obterLinkImagem(item.id)"
      @click="abrirDetalhesItem(item)"
    />
    <RolagemVertical @rolou-para-baixo="carregarMaisItens" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ApiItens from '@/api/apiItens.js'
import CardPadrao from '@/components/CardPadrao.vue'
import RolagemVertical from '@/components/RolagemVertical.vue'

const apiItens = new ApiItens()

const ITENS_POR_ROLAGEM = 60

const emit = defineEmits(['abrir-detalhes-item'])

const listaItens = ref([])
const listaVisivel = ref([])

onMounted(async () => {
  await carregarTodosItens()
  carregarPrimeirosItens()
})

function abrirDetalhesItem(item) {
  emit('abrir-detalhes-item', item)
}

async function carregarTodosItens() {
  const resposta = await apiItens.listarItens()
  const itensComId = Object.entries(resposta).map(([id, item]) => ({ id, ...item }))
  const itensFiltrados = itensComId.filter(item => {
    const maps = item.maps
    const pertenceASummonersRift = maps["11"] === true
    const naoTemCampeaoRequerido = !item.requiredChampion
    const naoTemAtributoInStore = !('inStore' in item)
    return maps && pertenceASummonersRift && naoTemCampeaoRequerido && naoTemAtributoInStore
  })
  const itensSemDuplicatas = ((itensParaDesduplicar) => {
    const itensUnicosMap = new Map()
    for (const item of itensParaDesduplicar) {
      if (!itensUnicosMap.has(item.name)) itensUnicosMap.set(item.name, item)
    }
    return Array.from(itensUnicosMap.values())
  })(itensFiltrados)
  const entradasOrdenadas = itensSemDuplicatas.sort((a, b) => a.name.localeCompare(b.name))
  listaItens.value = entradasOrdenadas
}

function carregarPrimeirosItens() {
  listaVisivel.value = Object.values(listaItens.value).slice(0, ITENS_POR_ROLAGEM)
}

function carregarMaisItens() {
  const proximaPosicao = listaVisivel.value.length
  if (proximaPosicao <= Object.values(listaItens.value).length) {
    const novosIcones = Object.values(listaItens.value).slice(proximaPosicao, proximaPosicao + ITENS_POR_ROLAGEM)
    listaVisivel.value.push(...novosIcones)
  }
}
</script>