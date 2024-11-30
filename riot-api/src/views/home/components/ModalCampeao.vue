<template>
  <ModalPadrao
    ref="modalRef"
    :titulo="dadosCampeao.name"
    :subtitulo="dadosCampeao.title"
    @fechar-modal="emit('fechar-modal-campeao')"
  >
  <template #title>
    <ImagemComSkeleton
      :altura="64"
      :caminho="`https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/${dadosCampeao.id}.png`"
      :largura="64"
      :texto-alternativo="dadosCampeao.name"
      class="pr-3"
    />
  </template>
  <template #body>
    <AbasHorizontais v-model:aba-selecionada="abaSelecionada" :abas="['Dicas', 'Habilidades', 'História', 'Skins']" />
    <DicasCampeao v-if="abaSelecionada === 'Dicas'" :dicas-aliados="dadosCampeao.allytips" :dicas-inimigos="dadosCampeao.enemytips" />
    <HabilidadesCampeao v-if="abaSelecionada === 'Habilidades'" :passiva="dadosCampeao.passive" :habilidades="dadosCampeao.spells" />
    <HistoriaCampeao v-if="abaSelecionada === 'História'" :historia="dadosCampeao.lore" />
    <SkinsCampeao v-if="abaSelecionada === 'Skins'" :nome-campeao="dadosCampeao.id" :skins="dadosCampeao.skins" />
  </template>
  </ModalPadrao>
</template>

<script setup>
import { ref, watch } from 'vue'
import ApiCampeoes from '@/api/apiCampeoes'

import AbasHorizontais from '@/components/AbasHorizontais.vue'
import DicasCampeao from './DicasCampeao.vue'
import HabilidadesCampeao from './HabilidadesCampeao.vue'
import HistoriaCampeao from './HistoriaCampeao.vue'
import ImagemComSkeleton from '@/components/ImagemComSkeleton.vue'
import ModalPadrao from '@/components/ModalPadrao.vue'
import SkinsCampeao from './SkinsCampeao.vue'

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