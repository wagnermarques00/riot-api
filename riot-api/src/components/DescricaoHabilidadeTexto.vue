<template>
  <p v-html="descricaoTratada"/>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  descricao: {
    type: String,
    required: true
  }
})

const descricaoTratada = ref('')

function adicionarClasseTextoAzul(stringHabilidade) {
  stringHabilidade = stringHabilidade.replaceAll('<OnHit>', '<OnHit class="text-blue-500">')
  return stringHabilidade.replaceAll('<magicDamage>', '<magicDamage class="text-blue-500">')
}

function adicionarClasseTextoBranco(stringHabilidade) {
  stringHabilidade = stringHabilidade.replaceAll('<passive>', '<passive class="dark:text-white">')
  stringHabilidade = stringHabilidade.replaceAll('<i>', '<i class="dark:text-white">')
  stringHabilidade = stringHabilidade.replaceAll('<keywordMajor>', '<keywordMajor class="dark:text-white">')
  stringHabilidade = stringHabilidade.replaceAll('<keywordName>', '<keywordName class="dark:text-white">')
  return stringHabilidade.replaceAll('<trueDamage>', '<trueDamage class="dark:text-white">')
}

function adicionarClasseTextoLaranja(stringHabilidade) {
  stringHabilidade = stringHabilidade.replaceAll('<spellName>', '<spellName class="text-orange-500">')
  stringHabilidade = stringHabilidade.replaceAll('<recast>', '<recast class="text-orange-500">')
  return stringHabilidade.replaceAll('<speed>', '<speed class="text-orange-500">')
}

function adicionarClasseTextoRoxo(stringHabilidade) {
  return stringHabilidade.replaceAll('<status>', '<status class="text-purple-500">')
}

function adicionarClasseTextoVerde(stringHabilidade) {
  return stringHabilidade.replaceAll('<healing>', '<healing class="text-green-500">')
}

function adicionarClasseTextoVermelho(stringHabilidade) {
  return stringHabilidade.replaceAll('<physicalDamage>', `<physicalDamage class="text-red-500">`)
}

function removerQuebraDupla(stringHabilidade) {
  stringHabilidade =  stringHabilidade.replaceAll('<br /><br />', '<br>')
  return stringHabilidade.replaceAll('<br><br>', '<br>')
}

function tratarClassesDescricao(descricao) {
  if (!descricao) {
    return '';
  }
  let descricaoComClasses = descricao
  descricaoComClasses = adicionarClasseTextoAzul(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoBranco(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoLaranja(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoRoxo(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoVermelho(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoVerde(descricaoComClasses)
  descricaoComClasses = removerQuebraDupla(descricaoComClasses)

  descricaoTratada.value = descricaoComClasses
}

onMounted(() => {
  descricaoTratada.value = props.descricao;
  tratarClassesDescricao(descricaoTratada.value)
})
</script>
