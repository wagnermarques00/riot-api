<template>
  <ModalPadrao
    ref="modalRef"
    :titulo="dadosCampeao.name"
    :subtitulo="dadosCampeao.title"
    @fechar-modal="emit('fechar-modal-campeao')"
  >
  <template #title>
    <img
      class="h-16 w-16 pr-4"
      :src="`https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/${dadosCampeao.id}.png`"
      :alt="dadosCampeao.name"
    >
  </template>
  </ModalPadrao>
</template>

<script setup>
import { ref, watch } from 'vue';
import ApiCampeoes from '@/api/apiCampeoes';

import ModalPadrao from '@/components/ModalPadrao.vue'

const emit = defineEmits('fechar-modal-campeao')
const props = defineProps({
  idCampeaoSelecionado: {
    type: String,
    default: ''
  }
})

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