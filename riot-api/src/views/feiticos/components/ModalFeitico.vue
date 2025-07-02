<template>
  <ModalPadrao
    ref="modalRef"
    :titulo="feitico.name"
    @fechar-modal="emit('fechar-modal-feitico')"
  >
  <template #title>
    <ImagemComSkeleton
      :altura="64"
      :caminho="apiFeiticos.obterLinkImagem.feitico(feitico.id)"
      :largura="64"
      :texto-alternativo="feitico.name"
      class="pr-3"
    />
  </template>
  <template #body>
    <ContainerTexto>
      <div>{{ props.feitico.description }}</div>
      <div>Tempo de recarga: {{ props.feitico.cooldownBurn }} segundos</div>
    </ContainerTexto>
  </template>
  </ModalPadrao>
</template>

<script setup>
import { ref, watch } from 'vue'
import ApiFeiticos from '@/api/apiFeiticos.js'
import ContainerTexto from '@/components/ContainerTexto.vue'
import ImagemComSkeleton from '@/components/ImagemComSkeleton.vue'
import ModalPadrao from '@/components/ModalPadrao.vue'

const apiFeiticos = new ApiFeiticos()

const emit = defineEmits('fechar-modal-feitico')
const props = defineProps({
  feitico: {
    type: Object,
    default: () => {}
  }
})

const modalRef = ref(null)

watch(
  () => props.feitico,
  async () => {
    if (props.feitico) {
      modalRef.value.abrirModal()
    } else {
      modalRef.value.fecharModal()
    }
  }
)
</script>
