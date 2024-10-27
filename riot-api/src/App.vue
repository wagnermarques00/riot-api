<template>
  <header>
    <NavBar :versao="versao"/>
  </header>
  <section v-if="carregado" class="pt-24 px-8 pb-7 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 min-h-screen antialiased">
    <RouterView />
  </section>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { RouterView } from 'vue-router'

import ApiVersoes from './api/apiVersoes';
import NavBar from './components/NavBar.vue';

const versao = ref('')
const carregado = ref(false)

async function listarUltimaVersaoLoL() {
  const apiVersoes = new ApiVersoes()
  const versoes = await apiVersoes.listarVersoes()
  versao.value = versoes[0]
  apiVersoes.atualizarVersao(versao.value)
}

onBeforeMount(async () => {
  await listarUltimaVersaoLoL()
  carregado.value = true
})
</script>