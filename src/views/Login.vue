<template>
  <div class="login-container">
    <div class="login">
      <base-section title="Login as Admin">
        <form method="get" @submit.prevent="login">
          <label for="email">Email: </label>
          <input type="text" name="email" id="email" />
          <label for="password">Password: </label>
          <input type="password" name="password" id="password" />
          <input type="submit" value="Login" />
          <p v-if="isError">Something went wrong!</p>
        </form>
      </base-section>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            isError: false
        }
    },
    methods: {
        login(){
            this.$router.push('/admin');
            //this.isError = true;
        }
    }
}
</script>

<style scoped>
.login-container {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  border: 1px solid #000;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

form input[type="text"],
form input[type="password"] {
  display: block;
  margin: 0.5em 0;
  padding: 0.5em;
  background-color: #e8ac4d;
  border: 1px solid #000;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
}

form input[type="submit"] {
  background-color: #195098;
  padding: 0.5em;
  color: #fff;
  border-radius: 5px;
  margin: 0.1em;
  outline: none;
}

p{
    color: #f00;
}

@media screen and (max-width: 1024px) {
    .login{
        width: 50%;
    }
}

@media screen and (max-width: 767px) {
    .login{
        width: 90%;
    }
}
</style>