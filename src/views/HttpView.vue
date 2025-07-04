<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const router = useRouter()

const username = ref('')
const password = ref('')
const lista = ref([])

async function login() {
  const url = 'http://localhost:3000/login'
  const body = {
    username: username.value,
    password: password.value
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    console.log('Response: ', response)

    const respBody = await response.json()
    console.log('Response body: ', respBody)

    if (!response.ok) {
      throw new Error(respBody.msg)
    } else {
      console.log('Login successful')
      userStore.setUsername(username.value)
      userStore.setToken(respBody.token)
      console.log('Dati salvati sullo store. \nUsername: ', userStore.username, '\nToken: ', userStore.token)
    }
  } catch (e) {
    console.log('Catch login: ', e)
  }
}

async function getMovies() {
  const url = 'http://localhost:3000/listMovies'

  // Imposto i query params
  const params = new URLSearchParams()
  // params.append('title', '')
  // params.append('year', '')
  // params.append('country', '')

  try {
    const response = await fetch(`${url}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userStore.token}`
      }
    })

    // Parserizzo la risposta - attenzione, il metodo json() è asincrono
    const respBody = await response.json()
    console.log('Response body: ', respBody)

    // Controllo se la risposta è in stato 200 (OK) o meno (KO)
    if (!response.ok && respBody.rc !== 0) {
      throw new Error(respBody.msg)
    } else {
      lista.value = respBody.data
    }
  } catch (e) {
    console.log('Catch listMovies: ', e)
  }
}
</script>

<template>
  <div class="test">
    <button @click="router.push('/')" style="margin-bottom: 50px">
      HomePage
    </button>
    <h1>Chiamate HTTP</h1>

    <h2>Login</h2>
    <input type="text" placeholder="Username" v-model="username" class="my-input"/>
    <input type="password" placeholder="Password" v-model="password" class="my-input" />
    <button @click="login">
      Login
    </button>

    <h2 style="margin-top: 50px">Lista film</h2>
    <button @click="getMovies">
      Get Movies
    </button>
    <ul>
      <li v-for="(movie, index) in lista" :key="index">
        {{ movie.title }} ({{ movie.year }})
      </li>
    </ul>
  </div>
</template>

<style>
.my-input {
  margin-right: 10px;
}
</style>
