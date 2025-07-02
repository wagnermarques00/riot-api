<template>
  <section class="flex flex-col gap-3">
    <div class="flex gap-4">
      <ImagemComSkeleton
        :altura="64"
        :caminho="linkImagem"
        :largura="64"
        :texto-alternativo="props.habilidade.name"
      />
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-bold dark:text-white">{{ props.habilidade.name }}</h3>
        <DescricaoTexto :descricao="props.habilidade.description" />
      </div>
    </div>
    <div>
      <p v-if="props.habilidade.costBurn">Custo: {{ props.habilidade.costBurn }}</p>
      <p v-if="props.habilidade.cooldownBurn">Tempo de recarga: {{ props.habilidade.cooldownBurn }} segundos</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ApiCampeoes from '@/api/apiCampeoes.js'
import DescricaoTexto from './DescricaoTexto.vue'
import ImagemComSkeleton from './ImagemComSkeleton.vue'

const apiCampeoes = new ApiCampeoes()

const props = defineProps({
  habilidade: {
    type: Object,
    required: true
  },
  passiva: {
    type: Boolean,
    default: false
  }
})

const linkImagem = computed(() => {
  if (props.passiva) {
    return apiCampeoes.obterLinkImagem.passiva(props.habilidade.image.full)
  } else {
    return apiCampeoes.obterLinkImagem.habilidade(props.habilidade.image.full)
  }
})
</script>
