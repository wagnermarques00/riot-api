<template>
  <div class="flex flex-wrap justify-center gap-8">
    <CardCampeao
      v-for="campeao in props.listaCampeoes"
      :key="campeao.id"
      :nome="campeao.name"
      :imagem="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeao.id}_0.jpg`"
      @click="abrirDetalhesCampeao(campeao.id)"
    />
  </div>
</template>

<script setup>
import CardCampeao from '../../../components/CardCampeao.vue';

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