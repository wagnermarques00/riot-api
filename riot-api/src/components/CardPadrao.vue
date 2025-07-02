<template>
  <div
    class="flex flex-col max-w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    :style="`max-width: ${props.largura}px`"
    :title="`Clique para ver os detalhes de ${props.nome}`"
  >
    <ImagemComSkeleton
      :nao-arredondar-embaixo="true"
      :altura="props.altura"
      :largura="props.largura"
      :caminho="props.imagem"
      :texto-alternativo="props.nome"
    />
    <div class="p-2">
      <h5 class="mb-1 text-base text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {{ props.nome }}
      </h5>
    </div>
  </div>
</template>

<script setup>
import ImagemComSkeleton from './ImagemComSkeleton.vue'

const props = defineProps({
  altura: {
    type: Number,
    default: 128
  },
  imagem: {
    type: String,
    required: true
  },
  largura: {
    type: Number,
    default: 128
  },
  nome: {
    type: String,
    required: true
  }
})
</script>
