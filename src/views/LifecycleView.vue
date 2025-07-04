<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const count = ref(0)

function incrementa() {
  count.value++
}

// Hooks
onBeforeMount(() => {
  console.log('🔵 beforeMount: il componente sta per essere montato')
})

onMounted(() => {
  console.log('🟢 mounted: il componente è stato montato')
})

onBeforeUpdate(() => {
  console.log('🟡 beforeUpdate: i dati sono cambiati, ma il DOM non è stato ancora aggiornato')
})

onUpdated(() => {
  console.log('🟣 updated: il DOM è stato aggiornato dopo un cambiamento')
})

onBeforeUnmount(() => {
  console.log('🟠 beforeUnmount: il componente sta per essere rimosso')
})

onUnmounted(() => {
  console.log('🔴 unmounted: il componente è stato rimosso')
})
</script>

<template>
  <div>
    <button @click="router.push('/')" style="margin-bottom: 50px">
      HomePage
    </button>

    <h2>Lifecycle Demo</h2>
    <p>Contatore: {{ count }}</p>
    <button @click="incrementa">Incrementa</button>
  </div>
</template>
