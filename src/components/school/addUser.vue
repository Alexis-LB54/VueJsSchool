<template>
  <div>
    <form @submit.prevent="AddUser">
      <label for="username">username du professeur</label>
      <input type="text" v-model="prof.username" id="username" />

      <label for="password">password du professeur</label>
      <input type="password" v-model="prof.password" id="password" />

      <label for="roles">Roles</label>
      <input type="text" v-model="prof.roles" id="roles" />

      <label for="firstname">Prénom</label>
      <input type="text" v-model="prof.firstname" id="firstname" />

      <label for="lastname">Nom</label>
      <input type="text" v-model="prof.lastname" id="lastname" />

      <label for="ancienneté">Ancienneté</label>
      <input type="text" v-model="prof.ancienneté" id="ancienneté" />

      <label for="salaire">Salaire</label>
      <input type="number" v-model="prof.salaire" id="salaire" />

      <label for="classe">Classe</label>
      <input type="text" v-model="prof.classe" id="classe" />

      <input type="submit" value="Ajouter Professeur" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useProfStore } from "../../stores/ProfStore";

const ProfStore = useProfStore();

const prof = ref({
  username: "",
  password: "",
  roles: [],
  firstname: "",
  lastname: "",
  ancienneté: "",
  salaire: 0,
  classe: "",
});




</script>

<style>
</style>