<template>
  <GridCampeoes @abrir-detalhes-campeao="idCampeaoSelecionado = $event" />
  <ModalCampeao
    :id-campeao-selecionado="idCampeaoSelecionado"
    @fechar-modal-campeao="idCampeaoSelecionado = ''"
  />
</template>

<script setup>
import { ref } from 'vue'
import GridCampeoes from './components/GridCampeoes.vue'
import ModalCampeao from './components/ModalCampeao.vue'

const idCampeaoSelecionado = ref('')
</script>
