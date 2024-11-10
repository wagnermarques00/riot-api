<template>
  <ul class="flex-column space-y space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 min-w-fit ">
    <li v-for="aba in props.abas" :key="aba">
      <button
        :class="[aba === abaSelecionada ? classeAbaSelecionada : classeAbaNormal]"
        @click.stop="trocarAba(aba)"
      >
        {{ aba }}
      </button>
    </li>
  </ul>
</template>

<script setup>
const classeAbaSelecionada = 'inline-flex items-center px-4 py-2 text-white bg-blue-700 rounded-lg active dark:bg-blue-600 w-full'
const classeAbaNormal = 'inline-flex items-center px-4 py-2 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-900 dark:hover:text-white'

const props = defineProps({
  abas: {
    type: Array,
    required: true
  }
})

const abaSelecionada = defineModel('abaSelecionada', { type: [String, Object], default: '' })


function trocarAba(abaDestino) {
  abaSelecionada.value = abaDestino
}
</script>
