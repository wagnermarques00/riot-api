<template>
  <ContainerTexto>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      <DescricaoTexto :descricao="props.descricao" />
    </p>
  </ContainerTexto>
</template>

<script setup>
import ContainerTexto from '@/components/ContainerTexto.vue'
import DescricaoTexto from '@/components/DescricaoTexto.vue'

const props = defineProps({
  descricao: {
    type: String,
    required: true
  }
})
</script>