<template>
  <GridFeiticos @abrir-detalhes-feitico="feitico = $event"/>
  <ModalFeitico
    :feitico="feitico"
    @fechar-modal-feitico="feitico = ''"
  />
</template>

<script setup>
import { ref } from 'vue'
import GridFeiticos from './components/GridFeiticos.vue'
import ModalFeitico from './components/ModalFeitico.vue'

const feitico = ref('')
</script>
