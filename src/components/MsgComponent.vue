<script setup>
defineProps({
  msg: {
    type: String,
    default: 'Messaggio di DEFAULT'
  },
  index: {
    type: String,
    default: '<non specificato>'
  }
})

const emit = defineEmits(['showAlert'])
</script>

<template>
  <div class="msg-component">
    <p class="text">
      {{ msg }}
    </p>
    <button @click="emit('showAlert', index)">
      {{ 'Mostra alert: ' + index }}
    </button>
  </div>
</template>

<style scoped>
.msg-component {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}
.msg-component .text {
  margin: 5px 0;
}
</style>
