<template>
  <div>
    <form @submit.prevent="FormSubmit">
      <label for="username">username</label>
      <input type="text" v-model="user.username" id="username" />

      <label for="password">password</label>
      <input type="password" v-model="user.password" id="password" />

      <input type="submit" value="Se connecter" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import fetchLogin from "../../components/plugins/fetch";
import { useTokenStore } from "../../stores/token";

const user = ref({
  username: "",
  password: "",
});

const tokenStore = useTokenStore();

const FormSubmit = () => {
  fetchLogin(user.value).then(
    (response) => (tokenStore.token = response.token)
  );
  fetchLogin(user.value).then(
    (response) => (tokenStore.refresh_token = response.refresh_token)
  );
};
</script>


<style scoped>
</style>