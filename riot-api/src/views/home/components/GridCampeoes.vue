<template>
  <div class="flex flex-wrap justify-center gap-8">
    <CardCampeao
      v-for="campeao in props.listaCampeoes"
      :key="campeao.id"
      :nome="campeao.name"
      :imagem="apiCampeoes.obterLinkImagem.splash(campeao.id)"
      @click="abrirDetalhesCampeao(campeao.id)"
    />
  </div>
</template>

<script setup>
import ApiCampeoes from '@/api/apiCampeoes'
import CardCampeao from '@/components/CardCampeao.vue'

const apiCampeoes = new ApiCampeoes()

const emit = defineEmits(['abrir-detalhes-campeao'])
const props = defineProps({
  listaCampeoes: {
    type: Object,
    required: true
  }
})

function abrirDetalhesCampeao(campeao) {
  emit('abrir-detalhes-campeao', campeao)
}
</script>