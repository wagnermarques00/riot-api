<template>
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="items-center justify-between hidden w-full md:flex md:w-auto">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent  md:p-0"
              :class="gerarClasseLink('/')"
            >
              Campeões
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/icones"
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="gerarClasseLink('/icones')"
            >
              Ícones
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/feiticos"
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="gerarClasseLink('/feiticos')"
            >
              Feitiços
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/itens"
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="gerarClasseLink('/itens')"
            >
              Itens
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
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
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

function gerarClasseLink(link) {
  return {
    'text-white md:text-blue-700 md:dark:text-blue-500': rotaAtual.value === link,
    'text-gray-900 dark:text-white': rotaAtual.value !== link
  }
}

const props = defineProps({
  versao: {
    type: String,
    required: true
  }
})

const rotaAtual = ref(route.path)
</script>
