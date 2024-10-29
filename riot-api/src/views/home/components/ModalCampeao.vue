<template>
  <ModalPadrao
    ref="modalRef"
    :titulo="dadosCampeao.name"
    :subtitulo="dadosCampeao.title"
    @fechar-modal="emit('fechar-modal-campeao')"
  >
  <template #title>
    <img
      class="h-auto w-20 pr-4"
      :src="`https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/${dadosCampeao.id}.png`"
      :alt="dadosCampeao.name"
    >
  </template>
  <template #body>
    <AbasHorizontais v-model:aba-selecionada="abaSelecionada" :abas="['História', 'Skins']"/>
    <HistoriaCampeao v-if="abaSelecionada === 'História'" :historia="dadosCampeao.lore" />
  </template>
  </ModalPadrao>
</template>

<script setup>
import { ref, watch } from 'vue';
import ApiCampeoes from '@/api/apiCampeoes';

import AbasHorizontais from '@/components/AbasHorizontais.vue';
import HistoriaCampeao from './HistoriaCampeao.vue';
import ModalPadrao from '@/components/ModalPadrao.vue'

const emit = defineEmits('fechar-modal-campeao')
const props = defineProps({
  idCampeaoSelecionado: {
    type: String,
    default: ''
  }
})

const abaSelecionada = ref('Skins')
const apiCampeoes = new ApiCampeoes()
const dadosCampeao = ref({})
const modalRef = ref(null)

watch(
  () => props.idCampeaoSelecionado,
  async () => {
    if (props.idCampeaoSelecionado) {
      const campeao = await apiCampeoes.listarCampeao(props.idCampeaoSelecionado)
      dadosCampeao.value = campeao[props.idCampeaoSelecionado]
      modalRef.value.abrirModal()
    } else {
      dadosCampeao.value = {}
      modalRef.value.fecharModal()
    }
  }
)
</script>