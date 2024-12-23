<template>
  <p>{{ props.texto }}</p>
  <div class="flex h-4 text-xs font-bold" :style="`width: ${larguraValorTotal}px;`">
    <div v-if="props.valorPrimario > 0" :class="classePrimario" :style="`width: ${larguraValorPrimario}px;`">{{ valorPrimario }}</div>
    <div v-if="props.valorSecundario" :class="classeSecundario" :style="`width: ${larguraValorSecundario}px`">{{ valorSecundario }}</div>
    <div v-if="props.valorTerciario" :class="classeTerciario" :style="`width: ${larguraValorTerciario}px`">{{ valorTerciario }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  classeCorPrimaria: {
    type: String,
    default: ''
  },
  classeCorSecundaria: {
    type: String,
    default: ''
  },
  classeCorTerciaria: {
    type: String,
    default: ''
  },
  pixelPorValor: {
    type: Number,
    default: 1
  },
  valorPrimario: {
    type: Number,
    required: true
  },
  valorSecundario: {
    type: Number,
    default: 0
  },
  valorTerciario: {
    type: Number,
    default: 0
  },
  texto: {
    type: String,
    default: ''
  }
})

const classePrimario = computed(() => {
  let arredondamento = ''
  if (props.valorSecundario === 0 && props.valorTerciario === 0) {
    arredondamento = 'rounded-lg'
  } else {
    arredondamento = 'rounded-s-lg'
  }

  return `pl-2 ${props.classeCorPrimaria} ${arredondamento}`
})

const classeSecundario = computed(() => {
  let arredondamento = ''
  if (props.valorTerciario === 0) {
    arredondamento = 'rounded-e-lg'
  }

  return `pl-2 ${props.classeCorSecundaria} ${arredondamento}`
})

const classeTerciario = computed(() => {
  return `pl-2 ${props.classeCorTerciaria} rounded-e-lg`
})

const larguraValorPrimario = computed(() => {
  return props.pixelPorValor * props.valorPrimario
})

const larguraValorSecundario = computed(() => {
  return props.pixelPorValor * props.valorSecundario
})

const larguraValorTerciario = computed(() => {
  return props.pixelPorValor * props.valorTerciario
})

const larguraValorTotal = computed(() => {
  return larguraValorPrimario.value + larguraValorSecundario.value + larguraValorTerciario.value
})
</script>
