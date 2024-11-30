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
        <DescricaoHabilidadeTexto :descricao="props.habilidade.description" />
      </div>
    </div>
    <div>
      <p v-if="props.habilidade.costBurn">Custo: {{ props.habilidade.costBurn }}</p>
      <p v-if="props.habilidade.cooldownBurn">Tempo de recarga: {{ props.habilidade.cooldownBurn }} segundos</p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ApiImagens from '@/api/apiImagens'
import DescricaoHabilidadeTexto from './DescricaoHabilidadeTexto.vue'
import ImagemComSkeleton from './ImagemComSkeleton.vue'

const apiImagens = new ApiImagens()

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
    return apiImagens.gerarLinkPassivaCampeao(props.habilidade.image.full)
  } else {
    return apiImagens.gerarLinkHabilidadeCampeao(props.habilidade.image.full)
  }
})

const carregandoImagem = ref(true)
</script>
