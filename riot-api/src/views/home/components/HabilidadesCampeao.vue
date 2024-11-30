<template>
  <div class="flex justify-between">
    <AbasVerticais v-model:aba-selecionada="abaSelecionada" :abas="['Passiva', 'Q', 'W', 'E', 'R']" class="overflow-y-auto scroll-smooth h-96 pr-2" />
    <ContainerTexto>
      <DescricaoHabilidade v-if="abaSelecionada == 'Passiva'" :habilidade="props.passiva" :passiva="true" />
      <DescricaoHabilidade v-if="abaSelecionada == 'Q'" :habilidade="props.habilidades[0]" :passiva="false" />
      <DescricaoHabilidade v-if="abaSelecionada == 'W'" :habilidade="props.habilidades[1]" :passiva="false" />
      <DescricaoHabilidade v-if="abaSelecionada == 'E'" :habilidade="props.habilidades[2]" :passiva="false" />
      <DescricaoHabilidade v-if="abaSelecionada == 'R'" :habilidade="props.habilidades[3]" :passiva="false" />
    </ContainerTexto>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AbasVerticais from '@/components/AbasVerticais.vue'
import ContainerTexto from '@/components/ContainerTexto.vue'
import DescricaoHabilidade from '@/components/DescricaoHabilidade.vue'

const props = defineProps({
  habilidades: {
    type: Object,
    required: true
  },
  passiva: {
    type: Object,
    required: true
  }
})

const abaSelecionada = ref('Passiva')

</script>
