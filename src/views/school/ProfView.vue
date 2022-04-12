<template>
  <router-link :to="{ name: 'addNote' }">
    <button class="btn btn-primary">Ajouter une note</button>
  </router-link>
  <router-link :to="{ name: 'showMyClass' }">
    <button class="btn btn-primary">Voir ma classe</button>
  </router-link>
</template>

<script setup lang="ts">
</script>

<style scoped>
label {
  color: greenyellow;
}
</style>