<template>
  <GridFeiticos @abrir-detalhes-feitico="idFeiticoSelecionado = $event"/>
  <ModalFeitico
    :id-feitico-selecionado="idFeiticoSelecionado"
    @fechar-modal-feitico="idFeiticoSelecionado = ''"
  />
</template>

<script setup>
import { ref } from 'vue'
import GridFeiticos from './components/GridFeiticos.vue'
import ModalFeitico from './components/ModalFeitico.vue'

const idFeiticoSelecionado = ref('')
</script>
