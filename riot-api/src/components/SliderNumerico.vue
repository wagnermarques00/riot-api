<template>
  <div class="relative mb-6">
    <label :for="`slider-numerico-${props.label}`" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ props.label }}: {{ valorSelecionado }}</label>
    <input
      :id="`slider-numerico-${props.label}`"
      v-model="valorSelecionado"
      class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
      type="range"
      :max="props.valores[props.valores.length -1]"
      :min="props.valores[0]"
      :step="valorPorPasso"
    >
    <div class="flex justify-between">
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ props.valores[0] }}</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ props.valores[props.valores.length -1] }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  valores: {
    type: Array,
    required: true
  },
  valorPorPasso: {
    type: Number,
    required: true
  }
})

const valorSelecionado = defineModel('valorSelecionado', { type: [String, Object], default: '' })
</script>
