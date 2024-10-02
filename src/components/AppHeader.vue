<template>
  <div class="header">
    <h1>Tic Tac Toe</h1>
    <!--<p>hrbfhrbfh</p>-->
    <div class="button-login">
      <LogIn />
    </div>
  </div>
</template>

<script setup>
import LogIn from './LogIn.vue'
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(225, 225, 225);
  margin: 0;
}

h1 {
  margin-left: 2%;
}
.button-login {
  margin-right: 2%;
}
</style>
