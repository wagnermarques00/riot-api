<template>
  <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
    @click="manusearEstadoDropdown"
  >
    {{ props.titulo }}
    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
  </button>

  <div
    v-if="dropDownExpandido"
    class=" absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li
        v-for="opcao in props.opcoes"
        :key="opcao"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
        @click="emit('opcao-clicada', opcao)"
      >
        {{ opcao }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dropDownExpandido = ref(false)

const emit = defineEmits(['opcao-clicada'])
const props = defineProps({
  opcoes: {
    type: Array,
    required: true
  },
  titulo: {
    type: String,
    required: true
  }
})

function manusearEstadoDropdown() {
  dropDownExpandido.value = !dropDownExpandido.value
}
</script>
