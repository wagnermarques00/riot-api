<template>
  <div class="flex flex-wrap justify-center gap-8">
    <CardPadrao
      v-for="feitico in listaFeiticos"
      :key="feitico.id"
      altura="96"
      largura="96"
      :nome="feitico.name"
      :imagem="apiFeiticos.obterLinkImagem.feitico(feitico.id)"
      @click="abrirDetalhesFeitico(feitico)"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ApiFeiticos from '@/api/apiFeiticos'
import CardPadrao from '@/components/CardPadrao.vue'

const apiFeiticos = new ApiFeiticos()

const emit = defineEmits(['abrir-detalhes-feitico'])

const listaFeiticos = ref({})

onMounted(async () => {
  await carregarTodosFeiticos()
})

async function carregarTodosFeiticos() {
  const resposta = await apiFeiticos.listarFeiticos()
  const feiticosOrdenados = resposta.sort((a, b) => a.name.localeCompare(b.name))
  listaFeiticos.value = feiticosOrdenados
}

async function abrirDetalhesFeitico(feitico) {
  emit('abrir-detalhes-feitico', feitico)
}
</script>
