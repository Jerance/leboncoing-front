<template>
  <h1>List Product</h1>
  <!-- <h1>{{ data }}</h1> -->
  <div v-for="data in data" :key="data">
    <img :src="data.image" alt="resource" />
    <p>Nom : {{ data.name }}</p>
    <p>Prix : {{ data.price }}</p>
    <p>Stock : {{ data.stock }}</p>
    <button v-on:click="DeleteProduct(data.id)">Delete</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
    };
  },
  state: () => ({
    // //prodUrl: "http://leboncoing-prod.com/",
    // devUrl: "http://localhost:8000",
    //http://127.0.0.1:8000/products/2
  }),
  mounted() {
    axios
      .get("http://localhost:8000/products?skip=0&limit=100", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      })
      .then((response) => (this.data = response.data));
  },
  methods: {
    DeleteProduct(id) {
      axios
        .delete("http://localhost:8000/products/" + id, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        })
        .then((response) => (this.data = response));
    },
  },
};
</script>
