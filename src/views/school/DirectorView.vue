<template>
  <div>
    <router-link :to="{ name: 'addUser' }">
      <button class="btn btn-primary">Ajouter un professeur</button>
    </router-link>
    <router-link :to="{ name: 'deleteUser' }">
      <button class="btn btn-primary">Licencier un professeur</button>
    </router-link>
    <router-link :to="{ name: 'addEleve' }">
      <button class="btn btn-primary">Ajouter un élève</button>
    </router-link>
    <router-link :to="{ name: 'deleteEleve' }">
      <button class="btn btn-primary">Virer un élève</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>