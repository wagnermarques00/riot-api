<template>
  <ContainerTexto>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ props.historia }}
    </p>
  </ContainerTexto>
</template>

<script setup>
import ContainerTexto from '@/components/ContainerTexto.vue';

const props = defineProps({
  historia: {
    type: String,
    required: true
  }
})
</script>
