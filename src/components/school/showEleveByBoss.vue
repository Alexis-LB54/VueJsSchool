<template>
  <div>
    <form @submit.prevent="FormSubmit">
      <label for="élève">Elvève</label>
      <select v-model="eleve.id" id="élève">
        <option
          v-for="eleve in eleveStore.getEleve"
          :key="eleve.id"
          v-on:value="eleve['@id']"
        >
          {{ eleve["@id"] }}
        </option>
      </select>
      <input type="submit" value="voir élève" />
    </form>
  </div>

  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>username</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Classe</th>
          <th>sexe</th>
          <th>email des parents</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="eleve in tableauFiltre" :key="eleve.id">
          <th>{{ eleve.id }}</th>
          <th>{{ eleve.username }}</th>
          <th>{{ eleve.firstname }}</th>
          <th>{{ eleve.lastname }}</th>
          <th>{{ eleve.SchoolClass }}</th>
          <th>{{ eleve.sexe }}</th>
          <th>{{ eleve.parents_email }}</th>
        </tr>
      </tbody>
    </table>
  </div>
  <router-link :to="{ name: 'director' }">
    <button class="btn btn-primary">Retour au Menu Principal</button>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useTokenStore } from "../../stores/token";
import EleveList from "../plugins/getEleve";
import { useEleveStore } from "../../stores/EleveStore";

const tokenStore = useTokenStore();
const eleveStore = useEleveStore();

const eleve = ref({
  id: "",
});

onMounted(() => {
  EleveList();
});

const tableauFiltre = computed(() => {
  return eleveStore.getEleve.filter((o) => o["@id"] === eleve.value.id);
});

async function FormSubmit() {
  eleve.value.id;
}
</script>

<style>
</style>