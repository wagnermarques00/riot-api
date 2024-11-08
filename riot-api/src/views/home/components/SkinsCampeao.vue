<template>
  <div class="flex justify-around">
    <AbasVerticais v-model:aba-selecionada="abaSelecionada" :abas="listaSkins" class="overflow-y-auto scroll-smooth h-96 pr-2" />
    <div>
      <img
        class="h-96 w-auto rounded-lg"
        :alt="props.nome"
        :src="linkImagem"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import AbasVerticais from '@/components/AbasVerticais.vue'

const props = defineProps({
  nomeCampeao: {
    type: String,
    required: true
  },
  skins: {
    type: Array,
    required: true
  }
})

const abaSelecionada = ref(props.skins[0])
const listaSkins = ref(props.skins.map((skin) => skin.name === 'default' ? props.nomeCampeao : skin.name))

const indexSkin = computed(() => {
  if (abaSelecionada.value.num === 0) {
    return 0
  } else if (abaSelecionada.value) {
    const indexLocalizado = listaSkins.value.findIndex(skin => skin === abaSelecionada.value)
    const skinSelecionada = props.skins[indexLocalizado]

    return skinSelecionada.num
  } else {
    return 0;
  }
})

const linkImagem = computed(() => {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.nomeCampeao}_${indexSkin.value}.jpg`
})
</script>
