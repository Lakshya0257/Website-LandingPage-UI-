<template>
  <div class="background">
    <div class="circle"></div>
    <div class="circle1"></div>
    <div class="circle2"></div>
  </div>
  <div class="glass"></div>
  <div class="nav-bar">
    <div class="logo">
      <h1>Fotomaker</h1>
    </div>
    <div class="tabs">
      <RouterLink to="/"><button>
        <p>Home</p>
      </button></RouterLink>
      <RouterLink to="/book"><button>
        <p>Book</p>
      </button></RouterLink>
      <RouterLink to="/slots"><button>
        <p>Scheduled</p>
      </button></RouterLink>
    </div>
    <button class="login">Login</button>
  </div>
  <RouterView></RouterView>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods:{
  }
};
</script>

<style scoped>
.circle {
  position: fixed;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background-color: rgb(166, 0, 255);
}
.circle2 {
  position: fixed;
  width: 25vw;
  height: 25vw;
  bottom: 10vh;
  left: 25vw;
  border-radius: 50%;
  background-color: rgb(255, 0, 251);
}
.circle1 {
  position: fixed;
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  /* top: 15vh; */
  /* left: 30vw; */
  right: 0;
  bottom: 0;
  background-color: rgb(76, 0, 255);
}

.glass {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.825);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
}

.nav-bar {
  justify-content: space-between;
  position: fixed;
  left: 10vw;
  right: 10vw;
  top: 5vh;
  z-index: 2;
  display: flex;
  align-items: center;
}

.tabs p{
  font-size: 1.2rem;
  font-weight: 100;
  color: rgb(184, 184, 184);
}

.tabs button{
  margin-right: 3vw;
}

.login{
  background-color: rgb(95, 0, 136);
  padding: 1.5vh 2vw;
  border-radius: 10px;
}




</style>
