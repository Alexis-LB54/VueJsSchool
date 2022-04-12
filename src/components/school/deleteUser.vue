<template>
    <div>
    <form @submit.prevent="deleteUser">
      <label for="prof">professeur</label>
      <select v-model="prof.id" id="prof">
        <option
          v-for="prof in profStore.getProf"
          :key="prof.id"
          v-on:value="prof['@id']"
        >
          {{ prof["@id"] }}
        </option>
      </select>
      <input type="submit" value="Licencier Professeur" />
    </form>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useTokenStore } from "../../stores/token";
import profList from "../plugins/getProf";
import { useProfStore } from "../../stores/ProfStore";

const profStore = useProfStore();
const tokenStore = useTokenStore();

onMounted(() => {
  profList();
});

const prof = ref({
  id: 0,
});

async function deleteUser() {
    console.log("id prof viré", prof.value.id);
    let response = await fetch("http://127.0.0.1:8000" + prof.value.id,{
    method: "DELETE",
    headers: {
        Authorization: `Bearer ${tokenStore.token}`,
    }
    }).then((r) => r.json()).catch();
    console.log("prof licencié", response);

    return response;   
}

</script>

<style scoped>

</style>