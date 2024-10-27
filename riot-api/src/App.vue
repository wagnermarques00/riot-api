<template>
  <header>
    <NavBar :versao="versao"/>
  </header>

  <RouterView />
</template>

<script setup>
import { onMounted, provide, ref } from 'vue'
import { RouterView } from 'vue-router'

import ApiVersoes from './api/apiVersoes';
import NavBar from './components/NavBar.vue';

const versao = ref('')

async function listarUltimaVersaoLoL() {
  const apiVersoes = new ApiVersoes()
  const versoes = await apiVersoes.listarVersoes()
  versao.value = versoes[0]
}

onMounted(async () => {
  listarUltimaVersaoLoL()
})

provide('versao', versao.value)
</script>