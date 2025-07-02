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

onMounted(() => {
  descricaoTratada.value = props.descricao
  tratarClassesDescricao(descricaoTratada.value)
})

function adicionarClasseTexto (tagsParaModificar, texto, classe) {
  let stringTexto = texto
  for (const tag of tagsParaModificar) {
    stringTexto = stringTexto.replaceAll(`<${tag}>`, `<${tag} class="${classe}">`)
  }
  return stringTexto
}

function adicionarClasseTextoAmarelo (texto) {
  const tagsParaModificar = [
    'gold',
    'scaleArmor',
    'shield',
  ]
  return adicionarClasseTexto(tagsParaModificar, texto, 'text-yellow-500')
}

function adicionarClasseTextoAzul (texto) {
  const tagsParaModificar = [
    'magicDamage',
    'OnHit',
    'scaleAP',
    'scaleMana',
  ]
  return adicionarClasseTexto(tagsParaModificar, texto, 'text-blue-500')
}

function adicionarClasseTextoBranco (texto) {
  const tagsParaModificar = [
    'active',
    'attention',
    'i',
    'keyword',
    'keywordMajor',
    'keywordName',
    'keywordStealth',
    'passive',
    'rarityGeneric',
    'rarityLegendary',
    'rules',
    'trueDamage',
  ]
  return adicionarClasseTexto(tagsParaModificar, texto, 'dark:text-white')
}

function adicionarClasseTextoLaranja (texto) {
  const tagsParaModificar = [
    'attackSpeed',
    'recast',
    'scaleLevel',
    'speed',
    'spellName',
  ]
  return adicionarClasseTexto(tagsParaModificar, texto, 'text-orange-500')
}

function adicionarClasseTextoRoxo (texto) {
  const tagsParaModificar = [
    'lifeSteal',
    'omnivamp',
    'scaleMR',
    'status',
  ]
  return adicionarClasseTexto(tagsParaModificar, texto, 'text-purple-500')
}

function adicionarClasseTextoVerde (texto) {
  const tagsParaModificar = [
    'healing',
    'scaleHealth',
  ]
  return adicionarClasseTexto(tagsParaModificar, texto, 'text-green-500')
}

function adicionarClasseTextoVermelho (texto) {
  const tagsParaModificar = [
    'physicalDamage',
    'scaleAD',
    'scaleLethality'
  ]
  return adicionarClasseTexto(tagsParaModificar, texto, 'text-red-500')
}

function removerQuebraDupla(texto) {
  texto =  texto.replaceAll('<br /><br />', '<br>')
  return texto.replaceAll('<br><br>', '<br>')
}

function tratarClassesDescricao(descricao) {
  if (!descricao) {
    return ''
  }
  let descricaoComClasses = descricao
  descricaoComClasses = adicionarClasseTextoAmarelo(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoAzul(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoBranco(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoLaranja(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoRoxo(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoVermelho(descricaoComClasses)
  descricaoComClasses = adicionarClasseTextoVerde(descricaoComClasses)
  descricaoComClasses = removerQuebraDupla(descricaoComClasses)

  descricaoTratada.value = descricaoComClasses
}
</script>
