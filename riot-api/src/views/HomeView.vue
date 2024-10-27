<template>
  <GridCampeoes :lista-campeoes="campeoes" />
</template>

<script setup>
import { onMounted, ref } from 'vue'

import ApiCampeoes from '@/api/apiCampeoes'
import GridCampeoes from '@/components/GridCampeoes.vue';

const apiCampeoes = new ApiCampeoes()
const campeoes = ref([])

onMounted(async () => {
  campeoes.value = await apiCampeoes.listarCampeoes()
})
</script>
