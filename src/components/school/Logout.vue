<template>
  <button @click="unSetStore">Se déconnecter</button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useTokenStore } from "../../stores/token"

const tokenStore = useTokenStore();
const router = useRouter();

function unSetStore() {
    tokenStore.$reset();
    router.push("/login")
}

</script>

<style>

</style>