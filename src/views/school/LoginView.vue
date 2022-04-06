<template>
  <div>
    <Login @form-submit="FormSubmit" />
  </div>
</template>

<script setup>
import Login from "../../components/forms/Login.vue";
import { ref } from "@vue/reactivity";
import fetchLogin from "../../components/plugins/fetch";
import { useUserStore } from "../../stores/token"

const user = ref({
  username: "",
  password: "",
});
const tokenStore = useUserStore();

const FormSubmit = () => {
  fetchLogin(user.value).then((response) => tokenStore.token = response.token);
  fetchLogin(user.value).then((response) => tokenStore.refresh_token = response.refresh_token);
};
</script>


<style scoped>
</style>