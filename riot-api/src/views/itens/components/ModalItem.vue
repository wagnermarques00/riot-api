<template>
  <ModalPadrao
    ref="modalRef"
    :titulo="props.item?.name"
    @fechar-modal="emit('fechar-modal-item')"
  >
    <template #title>
      <ImagemComSkeleton
        :altura="64"
        :caminho="apiItens.obterLinkImagem(props.item.id)"
        :largura="64"
        :texto-alternativo="item?.name"
        class="pr-3"
      />
    </template>
    <template #body>
      <DescricaoItem :descricao="props.item.description" />
    </template>
  </ModalPadrao>
</template>

<script setup>
import { ref, watch } from 'vue'
import ApiItens from '@/api/apiItens.js'
import DescricaoItem from './DescricaoItem.vue'
import ImagemComSkeleton from '@/components/ImagemComSkeleton.vue'
import ModalPadrao from '@/components/ModalPadrao.vue'

const apiItens = new ApiItens()

const emit = defineEmits('fechar-modal-item')
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const modalRef = ref(null)

watch(
  () => props.item,
  async () => {
    if (props.item) {
      modalRef.value.abrirModal()
    } else {
      modalRef.value.fecharModal()
    }
  }
)
</script>
