<template>
  <div class="flex flex-wrap justify-center gap-8">
    <CardCampeao
      v-for="campeao in props.listaCampeoes"
      :key="campeao.id"
      :nome="campeao.name"
      :imagem="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeao.id}_0.jpg`"
      @click="abrirDetalhesCampeao(campeao.name)"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import CardCampeao from './CardCampeao.vue';
const router = useRouter();

const props = defineProps({
  listaCampeoes: {
    type: Array,
    required: true
  }
})

function abrirDetalhesCampeao(campeao) {
  router.push(
    {
      path: 'campeao',
      query: { nome: campeao }
    }
  )
}
</script>