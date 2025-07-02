<template>
  <GridItens @abrir-detalhes-item="itemSelecionado = $event" />
  <ModalItem
    :item="itemSelecionado"
    @fechar-modal-item="itemSelecionado = ''"
  />
</template>

<script setup>
import { ref } from 'vue'
import GridItens from './components/GridItens.vue'
import ModalItem from './components/ModalItem.vue'

const itemSelecionado = ref('')
</script>
