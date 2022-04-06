<template>
  <div>
    <Login @form-submit="FormSubmit" />
  </div>
</template>

<script setup>
import Login from "../../components/forms/Login.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRoute();

async function FormSubmit(user) {
  let datas = {
    username: user.username,
    password: user.password,
  };

  console.log(datas);

  let response = await fetch("https://apibus.quidam.re/api/login_check", {
    method: "POST",
    body: JSON.stringify(datas),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .catch();

  if (response.token && response.refresh_token) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("refresh_token", response.refresh_token);

    console.log(response);
  }
}


</script>


<style scoped>
</style>