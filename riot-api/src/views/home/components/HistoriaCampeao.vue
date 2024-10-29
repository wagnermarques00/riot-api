<template>
  <p class="font-normal text-gray-700 dark:text-gray-400">
    {{ props.historia }}
  </p>
</template>

<script setup>
const props = defineProps({
  historia: {
    type: String,
    required: true
  }
})
</script>
