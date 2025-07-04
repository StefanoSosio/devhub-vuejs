<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="test">
    <button @click="router.push('/')" style="margin-bottom: 50px">
      HomePage
    </button>
    <h1>This is a test page</h1>
  </div>
</template>

<style>

</style>
