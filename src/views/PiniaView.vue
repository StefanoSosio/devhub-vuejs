<script setup>
import { useRouter } from 'vue-router'

import { useProvaStore } from '@/stores/prova'
const provaStore = useProvaStore()

const router = useRouter()

function changeStore() {
  provaStore.setText('Testo di MODIFICATO nello store "prova" tramite il metodo setText')
}
</script>

<template>
  <div class="test">
    <button @click="router.push('/')" style="margin-bottom: 50px">
      HomePage
    </button>
    <h1>PINIA</h1>
    <p>Valore text nello store "prova": {{ provaStore.text }}</p>
    <button @click="changeStore">
      Change Store
    </button>
  </div>
</template>

<style>

</style>
