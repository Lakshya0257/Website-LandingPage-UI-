<template>
  <div class="img" :class="{ 'animate-opacity': isAnimating }">
    <img src="https://pngimg.com/uploads/armchair/armchair_PNG7062.png" alt="">
  </div>
  <div class="content" :class="{ 'animate-left': isAnimating }">
    <h1>CREATE AI <br> GENERATED <br> IMAGES</h1>
    <p class="description">Wanted an instant product image for social media? <br> Covert words to images in seconds. <br> Input the text prompt and transfer your imagination into art. <br> Welcome Aboard!</p>
    <div class="booking" >
      <p>Book your appointment, <br> for a live demo from our executive</p>
      <button @click="route()">Book</button>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      isAnimating: false
    }
  },
  methods:{
    route(){
      const router=this.$router;
      this.isAnimating=true;
      setTimeout(function() {
        router.push({
        name:'book'
      })
}, 500);
      
    }
  }
}
</script>

<style scoped>
.img{
  z-index: 3;
  position: fixed;
  right: 35vw;
  bottom: 5vh;
  height: 70vh;
  width: 30vw;
  transition: all 0.5s ease-in-out;
}

.animate-left{
  opacity: 0;
  transform: translateX(-100%);
}
.animate-opacity{
  opacity: 0;
  transform: translateY(-100%);
}

.img img{
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.content{
  position: fixed;
  top: 15vh;
  left: 10vw;
  width: 50vw;
  bottom: 0;
  z-index: 3;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
h1{
  font-size: 5rem;
}

.description{
  margin-top: 5vh;
  font-size: 1.1rem;
  font-weight: 400;
  color: gray;
}

.booking{
  position: fixed;
  right: 10vw;
  bottom: 20vh;
  font-size: 2rem;
}

.booking button{
  margin-top: 2vh;
  padding: 1.5vh 2vw;
  border-radius: 5px;
  background-color: rgb(132, 0, 255);
}
</style>