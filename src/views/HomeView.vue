<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import MsgComponent from '../components/MsgComponent.vue'

import { useProvaStore } from '@/stores/prova'
const provaStore = useProvaStore()

const router = useRouter()

const text = ref('Messaggio di test salvato in un ref')

const state = reactive({
  msg: 'Messaggio di test salvato in un reactive',
  nome: '',
  cognome: ''
})

const testComputed = computed(() => {
  return (state.nome && state.cognome) ? `Benvenuto ${state.nome} ${state.cognome}!` : ''
})

watch(
  () => state.cognome,
  (newValue, oldValue) => {
    console.log(`Il cognome è cambiato da "${oldValue}" a "${newValue}"`)
    if (newValue === 'Elmec') {
      alert('Hai inserito Elmec come cognome!')
    }
  }
)

function showAlert(index) {
  alert('Ricevuto alert da MsgComponent numero ' + index)
}
</script>

<template>
  <button @click="router.push('/test')" style="margin-bottom: 50px">
    Test
  </button>
  <button @click="router.push('/direttive')" style="margin: 0 0 50px 20px">
    Direttive
  </button>
  <button @click="router.push('/lifecycle')" style="margin: 0 0 50px 20px">
    Lyfecycle
  </button>
  <button @click="router.push('/http')" style="margin: 0 0 50px 20px">
    Chiamate HTTP
  </button>
  <button @click="router.push('/pinia')" style="margin: 0 0 50px 20px">
    Pinia
  </button>

  <MsgComponent
    index="1"
    @showAlert="showAlert"
  />
  <MsgComponent
    index="2"
    msg="Messaggio di test"
    @showAlert="showAlert"
  />
  <MsgComponent
    index="3"
    :msg="text"
    @showAlert="showAlert"
  />
  <MsgComponent
    index="4"
    :msg="state.msg"
    @showAlert="showAlert"
  />

  <h1 style="margin-top: 80px">COMPUTED PROPERTIES</h1>
  <input v-model="state.nome" placeholder="Inserisci nome" />
  <input v-model="state.cognome" placeholder="Inserisci cognome" style="margin-left: 10px" />
  <p>Valore computed: {{ testComputed }}</p>

  <h1 style="margin-top: 80px">PINIA</h1>
  <p>Valore text nello store "prova": {{ provaStore.text }}</p>
</template>
