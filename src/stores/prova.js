import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProvaStore = defineStore('prova', () => {
  const text = ref('Testo di DEFAULT nello store "prova"')

  function setText(textValue) {
    text.value = textValue
  }

  return { text, setText }
})
