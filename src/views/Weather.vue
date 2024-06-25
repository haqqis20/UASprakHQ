<!-- src/views/Weather.vue -->
<template>
    <div>
      <h1>Weather Widget</h1>
  
      <div
        class="q-gutter-y-md column center-content"
        style="max-width: 300px; margin: 0 auto"
      >
        <q-input color="teal" outlined v-model="city" label="Label">
          <template v-slot:append @keyup.enter="fetchWeather">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
            </q-avatar>
            <q-btn color="primary" @click="fetchWeather" label="cari" />
          </template>
        </q-input>
      </div>
  
      <div class="center-content" v-if="weather">
        <p>Location: {{ weather.name }}</p>
        <p>Temperature: {{ weather.main.temp }} °C</p>
        <p>Weather: {{ weather.weather[0].description }}</p>
      </div>
      <div v-else></div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Weather",
    data() {
      return {
        city: "", // Default city
        weather: null,
      };
    },
    methods: {
      async fetchWeather() {
        if (!this.city) return;
        try {
          const apiKey = "d5ab084885614f61214d0f84ea3ed977"; // Ganti dengan API key Anda
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`
          );
          this.weather = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style>
  .center-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  
  input {
    margin-right: 10px;
    padding: 5px;
  }
  
  button {
    padding: 5px 10px;
  }
  
  h1 {
    text-align: center;
  } 
  </style>
  