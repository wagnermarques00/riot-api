<template>
  <div
    class="flex flex-col max-w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
    :title="`Clique para ver os detalhes de ${props.nome}`"
  >
    <img
      class="rounded-t-lg"
      :alt="props.nome"
      :src="props.imagem"
    />
    <div class="p-2">
      <h5 class="mb-1 text-base text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {{ props.nome }}
      </h5>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  imagem: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  }
})
</script>
