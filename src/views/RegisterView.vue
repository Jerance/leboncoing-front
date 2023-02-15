<template>
  <body>
    <div class="form-container">
      <form class="dark-theme">
        <div class="form-group">
          <label for="name">Nom:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="cpassword">Confirmer le mot de passe:</label>
          <input type="password" id="cpassword" v-model="cpassword" required />
        </div>
        <br />
        <button type="submit">S'inscrire</button>
        <div class="form-group"></div>
      </form>
    </div>
  </body>
</template>
<script>
export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    };
  },
  methods: {
    submitForm() {
      console.log("submit");
    },
  },
};
</script>
<style scoped>
.dark-theme {
  background-color: #424242;
  color: #4caf50;
  width: 50%;
  margin: auto;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 15px;
  margin-top: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  background-color: #ffff;
  border: none;
  border-radius: 4px;
  color: #424242;
  font-size: 16px;
  padding: 10px;
  width: 50%;
}

button[type="submit"] {
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  width: 25%;
}
</style>
