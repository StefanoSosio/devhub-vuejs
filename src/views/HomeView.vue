<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import MsgComponent from '../components/MsgComponent.vue'

const router = useRouter()

const text = ref('Messaggio di test salvato in un ref')

const state = reactive({
  msg: 'Messaggio di test salvato in un reactive'
})

function showAlert(index) {
  alert('Ricevuto alert da MsgComponent numero ' + index)
}
</script>

<template>
  <button @click="router.push('/test')" style="margin-bottom: 50px">
    Vai alla pagina di test
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
</template>
