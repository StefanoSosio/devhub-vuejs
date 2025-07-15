<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ['stringa1', 'stringa2', 'stringa3', 'stringa4', 'stringa5']

const htmlContent = '<p>Questo è un paragrafo con testo in <strong>grassetto</strong> e un <a href="https://vuejs.org" target="_blank">link a Vue.js</a>.</p>'

const flag = ref(true)
const inputValue = ref('')
const inputValue2 = ref('')
const text = ref('Messaggio di test salvato in un ref')

const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'

function changeFlag() {
  flag.value = !flag.value
}

function handleEnter() {
  alert(`Hai premuto Invio con il valore: ${inputValue2.value}`)
  inputValue2.value = ''
}

function handleClick() {
  alert('Hai cliccato il bottone "Click me!')
}
</script>

<template>
  <div class="direttive">
    <button @click="router.push('/')" style="margin-bottom: 50px">
      HomePage
    </button>

    <h1>V-FOR</h1>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        {{ `Indice elemento: ${index}; Valore elemento: ${item}` }}
      </li>
    </ol>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>

    <h1 style="margin-top: 80px">V-IF / V-ELSE / V-SHOW</h1>
    <button @click="changeFlag">
      Change flag with function
    </button>
    <button @click="flag = !flag" style="margin-left: 20px">
      Change flag
    </button>
    <p v-if="flag">Flag impostato a TRUE</p>
    <p v-else>Flag impostato a FALSE</p>
    <p v-show="flag">V-SHOW: Testo visibile</p>

    <h1 style="margin-top: 80px">V-MODEL</h1>
    <input v-model="inputValue" />
    <p>Valore dell'input: {{ inputValue }}</p>

    <h1 style="margin-top: 80px">V-BIND</h1>
    <img v-bind:src="imgUrl" style="width: 100px; height: 100px" />

    <h1 style="margin-top: 80px">V-ON</h1>
    <input
      v-model="inputValue2"
      v-on:keyup.enter="handleEnter"
      placeholder="Premi Invio dopo aver digitato"
      style="width: 200px"
    />
    <button @click="handleClick" style="margin-left: 20px">
      Click me!
    </button>

    <h1 style="margin-top: 80px">V-HTML</h1>
    <div v-html="htmlContent"></div>

    <h1 style="margin-top: 80px">V-TEXT</h1>
    <p v-text="text"></p>
    <p>{{ text }}</p> <!-- Consente interpolazione -->

    <h1 style="margin-top: 80px">V-ONCE</h1>
    <p v-once>{{ 'V-ONCE Valore di text:  ' + text }}</p>
    <p>{{ 'Valore di text: ' + text }}</p>
    <button @click="text = 'Nuova stringa'">
      Change text
    </button>

    <h1 style="margin-top: 80px">V-PRE</h1>
    <pre v-pre>
      &lt;div&gt;
        &lt;p&gt;Questo è un esempio di interpolazione: {{ message }}&lt;/p&gt;
        &lt;p&gt;Questo è un altro esempio: {{ counter + 1 }}&lt;/p&gt;
      &lt;/div&gt;
    </pre>

    <h1 style="margin-top: 80px">DIRETTIVE CUSTOMIZZATE</h1>
    <!-- <input v-focus /> -->
  </div>
</template>

<style>

</style>
