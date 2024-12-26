<template>
  <ContainerTexto>
    <SliderNumerico v-model:valor-selecionado="nivelSelecionado" label="Nível" :valores="valoresNivel" :valor-por-passo="1" />
    <div class="text-"></div>
    <BarraValoresAtributos
      classe-cor-primaria="bg-green-500 text-gray-800"
      classe-cor-secundaria="bg-green-700 text-gray-100"
      :texto="`Vida: ${valorTotalAtributo(props.estatisticas.hp, props.estatisticas.hpperlevel, nivelSelecionado)}`"
      :pixel-por-valor="0.30"
      :valor-primario="props.estatisticas.hp"
      :valor-secundario="atributoPorNivel(props.estatisticas.hpperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-green-500 text-gray-800"
      classe-cor-secundaria="bg-green-700 text-gray-100"
      :texto="`Regeneração de vida (a cada 5 segundos): ${valorTotalAtributo(props.estatisticas.hpregen, props.estatisticas.hpregenperlevel, nivelSelecionado)}`"
      :pixel-por-valor="10"
      :valor-primario="props.estatisticas.hpregen"
      :valor-secundario="atributoPorNivel(props.estatisticas.hpregenperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-blue-500 text-gray-100"
      classe-cor-secundaria="bg-blue-700 text-gray-200"
      :texto="`Energia/mana: ${valorTotalAtributo(props.estatisticas.mp, props.estatisticas.mpperlevel, nivelSelecionado)}`"
      :pixel-por-valor="0.40"
      :valor-primario="props.estatisticas.mp"
      :valor-secundario="atributoPorNivel(props.estatisticas.mpperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-blue-500 text-gray-100"
      classe-cor-secundaria="bg-blue-700 text-gray-200"
      :texto="`Regeneração de energia/mana (a cada 5 segundos): ${valorTotalAtributo(props.estatisticas.mpregen, props.estatisticas.mpregenperlevel, nivelSelecionado)}`"
      :pixel-por-valor="10"
      :valor-primario="props.estatisticas.mpregen"
      :valor-secundario="atributoPorNivel(props.estatisticas.mpregenperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-yellow-500 text-gray-100"
      classe-cor-secundaria="bg-yellow-700 text-gray-200"
      :texto="`Armadura: ${valorTotalAtributo(props.estatisticas.armor, props.estatisticas.armorperlevel, nivelSelecionado)}`"
      :pixel-por-valor="4"
      :valor-primario="props.estatisticas.armor"
      :valor-secundario="atributoPorNivel(props.estatisticas.armorperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-purple-500 text-gray-100"
      classe-cor-secundaria="bg-purple-700 text-gray-200"
      :texto="`Resistência mágica: ${valorTotalAtributo(props.estatisticas.spellblock, props.estatisticas.spellblockperlevel, nivelSelecionado)}`"
      :pixel-por-valor="4"
      :valor-primario="props.estatisticas.spellblock"
      :valor-secundario="atributoPorNivel(props.estatisticas.spellblockperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-red-500 text-gray-100"
      classe-cor-secundaria="bg-red-700 text-gray-200"
      :texto="`Dano de ataque: ${valorTotalAtributo(props.estatisticas.attackdamage, props.estatisticas.attackdamageperlevel, nivelSelecionado)}`"
      :pixel-por-valor="4"
      :valor-primario="props.estatisticas.attackdamage"
      :valor-secundario="atributoPorNivel(props.estatisticas.attackdamageperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-red-500 text-gray-100"
      classe-cor-secundaria="bg-red-700 text-gray-200"
      :texto="`Velocidade de ataque: ${valorTotalAtributoComPercentual(props.estatisticas.attackspeed, props.estatisticas.attackspeedperlevel, nivelSelecionado)}`"
      :pixel-por-valor="200"
      :valor-primario="props.estatisticas.attackspeed"
      :valor-secundario="atributoPercentualPorNivel(props.estatisticas.attackspeed, props.estatisticas.attackspeedperlevel, nivelSelecionado, false)"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-red-500 text-gray-100"
      classe-cor-secundaria="bg-red-700 text-gray-200"
      :texto="`Alcance de ataque: ${props.estatisticas.attackrange}`"
      :pixel-por-valor="0.3"
      :valor-primario="props.estatisticas.attackrange"
    />
    <BarraValoresAtributos
      classe-cor-primaria="bg-orange-500 text-gray-100"
      classe-cor-secundaria="bg-orange-700 text-gray-200"
      :texto="`Velocidade de movimento: ${props.estatisticas.movespeed}`"
      :pixel-por-valor="0.3"
      :valor-primario="props.estatisticas.movespeed"
    />
  </ContainerTexto>
</template>

<script setup>
import { ref } from 'vue'
import BarraValoresAtributos from '@/components/BarraValoresAtributos.vue'
import ContainerTexto from '@/components/ContainerTexto.vue'
import SliderNumerico from '@/components/SliderNumerico.vue'

const valoresNivel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const props = defineProps({
  estatisticas: {
    type: Object,
    required: true
  }
})

const nivelSelecionado = ref(Number(1))

function valorDoBrasil(valor) {
  return valor.toLocaleString('pt-br', {minimumFractionDigits: 2})
}

function atributoPorNivel(atributo, nivel, formatado = true) {
  const resultado = atributo * (nivel - 1)
  const numeroResultado = Number(resultado.toFixed(2))
  if (formatado) {
    return valorDoBrasil(numeroResultado)
  }

  return numeroResultado
}

function atributoPercentualPorNivel(atributo, valor, nivel, formatado = true) {
  const resultado = atributo * (valor * (nivel - 1)) / 100
  const numeroResultado = Number(resultado.toFixed(2))
  if (formatado) {
    return valorDoBrasil(numeroResultado)
  }

  return numeroResultado
}

function valorTotalAtributo(atributo, valor, nivel) {
  const resultado = atributo + (valor * (nivel - 1))
  return valorDoBrasil(resultado)
}

function valorTotalAtributoComPercentual(atributo, valor, nivel) {
  const resultado = atributo + ((atributo * valor) * (nivel - 1) / 100)
  return valorDoBrasil(resultado)
}
</script>
