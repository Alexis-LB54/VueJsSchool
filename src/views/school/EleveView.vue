<template>
  <div>
    <form @submit.prevent="FormSubmit">
      <label for="note">Les Notes</label>
      <select v-model="note.id" id="élève">
        <option
          v-for="note in noteStore.getNote"
          :key="note.id"
          v-on:value="note['@id']"
        >
          {{ note["@id"] }}
        </option>
      </select>
      <input type="submit" value="voir note" />
    </form>
  </div>

  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Matière</th>
          <th>Date</th>
          <th>Notation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in tableauFiltre" :key="note.id">
          <td>{{ note.id }}</td>
          <td>{{ note.matiere }}</td>
          <td>{{ note.date }}</td>
          <td>{{ note.notation }} / 20</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "@vue/runtime-core";
import NoteList from "../../components/plugins/getNote"
import { ref } from "@vue/reactivity";
import { useTokenStore } from "../../stores/token";
import { useNoteStore } from "../../stores/NoteEleve";


const tokenStore = useTokenStore();
const noteStore = useNoteStore();

const note = ref({
  id: "",
});

onMounted(() => {
  NoteList();
});

const tableauFiltre = computed(() => {
  return noteStore.getNote.filter((o) => o["@id"] === note.value.id);
});

async function FormSubmit() {
  note.value.id;
}

</script>

<style scoped>
table {
  border: 3px solid #49b0ff;
  width: 300px;
  background-color: #e5f9ff;
}
td,
th {
  border: thin solid #6495ed;
  width: 300px;
}
</style>