<template>
  <div
    v-if="exibirModal"
    tabindex="-1"
    class="flex fixed inset-0 z-50 justify-center items-center w-screen h-screen bg-gray-900/75 overflow-hidden"
  >
    <div class="relative p-4 w-full max-w-screen-lg max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <div class="flex justify-center">
            <slot name="title" />
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ props.titulo }}
              </h3>
              <h4 class="text-sm font-normal text-gray-900 dark:text-white">
                {{ props.subtitulo }}
              </h4>
            </div>
          </div>
          <button
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            title="fechar modal"
            @click="fecharModal"
          >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
        <div class="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[calc(100vh-160px)]">
          <slot name="body" />
        </div>
        <div
          v-if="$slots.footer"
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const exibirModal = ref(false)

const emit = defineEmits(['fechar-modal'])
const props = defineProps({
  subtitulo: {
    type: String,
    default: ''
  },
  titulo: {
    type: String,
    default: ''
  }
})

function abrirModal() {
  exibirModal.value = true
  document.body.style.overflow = 'hidden'
}

function fecharModal() {
  exibirModal.value = false
  document.body.style.overflow = ''
  emit('fechar-modal')
}

defineExpose({
  abrirModal,
  fecharModal
})
</script>
