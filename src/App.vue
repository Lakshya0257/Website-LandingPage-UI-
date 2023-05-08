<template>
  <HomeView></HomeView>
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {
  components: {
    HomeView,
  },
};
</script>

<style>
* {
  font-family: 'Playfair Display', serif;
  padding: 0;
  margin: 0;
  color: white;
}

h1 {
  font-weight: 500;
  font-size: 1.5rem;
}

button{
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
