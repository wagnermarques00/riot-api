<template>
  <div class="flex justify-left">
    <DropDown
      titulo="Papéis"
      :opcoes="papeisTraduzidos"
      @opcao-clicada="filtrarPapeis"
    />
  </div>
  <GridCampeoes @abrir-detalhes-campeao="idCampeaoSelecionado = $event" />
  <ModalCampeao
    :id-campeao-selecionado="idCampeaoSelecionado"
    @fechar-modal-campeao="idCampeaoSelecionado = ''"
  />
</template>

<script setup>
import { ref } from 'vue'
import DropDown from '@/components/DropDown.vue'
import GridCampeoes from './components/GridCampeoes.vue'
import ModalCampeao from './components/ModalCampeao.vue'

const papeis = [
  { original: 'Assassin', traduzido: 'Assassino' },
  { original: 'Marksman', traduzido: 'Atirador' },
  { original: 'Fighter', traduzido: 'Lutador' },
  { original: 'Mage', traduzido: 'Mago' },
  { original: 'Support', traduzido: 'Suporte'},
  { original: 'Tank', traduzido: 'Tanque' }
]
const papeisTraduzidos = papeis.map(papel => papel.traduzido)

const idCampeaoSelecionado = ref('')

function filtrarPapeis(value) {
  alert(value)
}
</script>
