<template>
  <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
      <li v-for="aba in props.abas" :key="aba" class="me-2">
          <button
            :class="[aba === abaSelecionada ? classeAbaSelecionada : classeAbaNormal]"
            @click.stop="trocarAba(aba)"
          >
            {{ aba }}
          </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const classeAbaSelecionada = 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
const classeAbaNormal = 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'

const props = defineProps({
  abas: {
    type: Array,
    required: true
  }
})

const abaSelecionada = defineModel('abaSelecionada', { type: String, default: '' })


function trocarAba(abaDestino) {
  abaSelecionada.value = abaDestino
}
</script>