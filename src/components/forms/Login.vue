<template>
  <div>
    <form @submit.prevent="$emit('form-submit', user)">

      <label for="username">username</label>
      <input type="text" v-model="user.username" id="username"/>

      <label for="password">password</label>
      <input type="password" v-model="user.password" id="password"/>

      <input type="submit" value="Se connecter" />
    </form>
  </div>

</template>

<script>

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>

</style>