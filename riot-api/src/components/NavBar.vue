<template>
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" :aria-expanded="isMobileMenuOpen ? 'true' : 'false'" @click="alternarMenuMobile">
        <span class="sr-only">Abrir menu principal</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <div id="navbar-sticky" class="items-center justify-between w-full md:flex md:w-auto" :class="{'hidden': !isMobileMenuOpen}">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0"
              :class="gerarClasseLink('/')"
              aria-current="page"
              @click="fecharMenuMobile"
            >
              Campeões
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/icones"
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="gerarClasseLink('/icones')"
              @click="fecharMenuMobile"
            >
              Ícones
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/feiticos"
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="gerarClasseLink('/feiticos')"
              @click="fecharMenuMobile"
            >
              Feitiços
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/itens"
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="gerarClasseLink('/itens')"
              @click="fecharMenuMobile"
            >
              Itens
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="hidden md:flex space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div class="p-2 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
          <span class="font-medium">
            Versão do LoL: {{ props.versao }}
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const props = defineProps({
  versao: {
    type: String,
    required: true
  }
})

const rotaAtual = computed(() => route.path)

const isMobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('resize', lidarComMudancaLargura)
})

onUnmounted(() => {
  window.removeEventListener('resize', lidarComMudancaLargura)
})

function alternarMenuMobile() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function fecharMenuMobile() {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

function lidarComMudancaLargura() {
  if (window.innerWidth >= 768 && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

function gerarClasseLink(link) {
  return {
    'text-white md:text-blue-700 md:dark:text-blue-500': rotaAtual.value === link,
    'text-gray-900 dark:text-white': rotaAtual.value !== link
  }
}
</script>
