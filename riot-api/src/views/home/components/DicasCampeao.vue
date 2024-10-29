<template>
  <div>
    <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Dicas para os aliados:
    </p>
    <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      <li v-for="dica in props.dicasAliados" :key="dica">
        {{ dica }}
      </li>
    </ul>
  </div>
  <div class="pt-4">
    <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Dicas para os inimigos:
    </p>
    <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      <li v-for="dica in props.dicasInimigos" :key="dica">
        {{ dica }}
      </li>
    </ul>
  </div>

</template>

<script setup>
const props = defineProps({
  dicasAliados: {
    type: Array,
    required: true
  },
  dicasInimigos: {
    type: Array,
    required: true
  }
})
</script>