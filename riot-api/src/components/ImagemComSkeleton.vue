<template>
  <div :style="estilosContainer" >
    <img
      :alt="props.textoAlternativo"
      :class="{
        'rounded-lg': props.naoArredondarEmbaixo === false,
        'rounded-t-lg' : props.naoArredondarEmbaixo === true,
      }"
      :src="props.caminho"
      :style="estilosImagem"
      @load="carregandoImagem = false"
    />
    <div v-if="carregandoImagem" class="animate-pulse">
      <div class="flex items-center justify-center bg-gray-300 rounded dark:bg-gray-700" :style="estilosContainer">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  altura: {
    type: Number,
    default: 0
  },
  naoArredondarEmbaixo: {
    type: Boolean,
    default: false
  },
  caminho: {
    type: String,
    default: ''
  },
  largura: {
    type: Number,
    default: 0
  },
  textoAlternativo: {
    type: String,
    default: ''
  }
})

const carregandoImagem = ref(true)

const estilosImagem = computed(() => ({
  width: carregandoImagem.value ? '0px' : `${props.largura}px`,
  height: carregandoImagem.value ? '0px' : `${props.altura}px`
}))

const estilosContainer = computed(() => ({
  minWidth: `${props.largura}px`,
  minHeight: `${props.altura}px`
}))
</script>