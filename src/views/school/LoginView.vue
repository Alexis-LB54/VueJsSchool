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
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

const user = ref({
  username: "",
  password: "",
});

const tokenStore = useTokenStore();
const router = useRouter();

const FormSubmit = () => {
  fetchLogin(user.value).then(([response, decoded]) => {
    tokenStore.token = response.token;
    tokenStore.refresh_token = response.refresh_token;
    tokenStore.roles = decoded.roles;
    // console.log("a la recherche de roles", tokenStore.roles);
    // console.log(tokenStore.roles.indexOf("ROLE_TUTU"));

    let error = "non autorisé";
    // if (tokenStore.roles.indexOf("ROLE_DIRECTEUR") !== -1) {
    //   router.push("/director");
    // } else {
    //   alert(error);
    // }
switch (tokenStore.roles) {
    case tokenStore.roles.indexOf("ROLE_DIRECTEUR") !== -1:
        console.log(tokenStore.roles.indexOf("ROLE_DIRECTEUR") !== -1);
        router.push("/director");
        break;
    case tokenStore.roles.indexOf("ROLE_PROF") !== -1:
        console.log(tokenStore.roles.indexOf("ROLE_PROF") !== -1);
        router.push("/prof");
        break;
    case tokenStore.roles.indexOf("ROLE_ELEVE") !== -1:
        console.log(tokenStore.roles.indexOf("ROLE_ELEVE") !== -1);
        router.push("/eleve");
        break;
    default:
        alert(error);
}

  });
};
</script>


<style scoped>
</style>