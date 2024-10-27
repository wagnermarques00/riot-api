<template>
  {{ nomeCampeao }}
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'

const route = useRoute()

const nomeCampeao = ref('')

onMounted(() => {
  nomeCampeao.value = route.query.nome
})
</script>
