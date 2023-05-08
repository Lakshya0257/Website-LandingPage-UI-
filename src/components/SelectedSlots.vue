<template>
    <div class="img">
      <img src="https://pngimg.com/uploads/converse/converse_PNG34.png" alt="">
    </div>
    <div class="content">
      <h1>YOUR <br> SELECTED <br> SLOTS</h1>
      <p class="description">Here are your registered slots! <br> Be ready and get hype for live demonstration <br> See you there! <br> Welcome Aboard!</p>
      <div class="booking">
        <p>Your booked slots</p>
        <Slot v-for="slot in slots" :time="slot"></Slot>
      </div>
    </div>
  </template>
  
  <script>
  import Slot from './Slot.vue';
  export default{
    data(){
        return{
            slots:[]
        }
    },
    components:{
        Slot
    },created(){
         let ish=localStorage.getItem('Ish');
         let shiv=localStorage.getItem('Shiv');
         let shrav=localStorage.getItem('Shrav');
         let shanthi=localStorage.getItem('Shanthi');
         let poo=localStorage.getItem('Poo');

         if(ish!=='null' && ish!==null){
            this.slots.push(ish);
         }
         if(shiv!=='null' && shiv!==null){
            this.slots.push(shiv);
         }
         if(shrav!=='null' && shrav!==null){
            this.slots.push(shrav);
         }
         if(shanthi!=='null' && shanthi!==null){
            this.slots.push(shanthi);
         }
         if(poo!=='null' && poo!==null){
            this.slots.push(poo);
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
    right: 7vw;
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