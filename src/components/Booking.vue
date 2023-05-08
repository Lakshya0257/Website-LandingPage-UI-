<template>
    <div class="img">
      <img src="https://diamu.com.bd/wp-content/uploads/2019/10/Xiaomi-Redmi-Note-8-2.png" alt="">
    </div>
    <div class="content">
      <h1>AVAILABLE <br> EXECUTIVES </h1>
      <p class="description">Ish, Shiv, Shrav, Shanthi, Poo and many more</p>
      <div class="booking">
        <div class="search">
            <input id="search" type="text" placeholder="Type name of executive">
            <button @click="search()">Search</button>
        </div>
        <h1>Slots</h1>
        <Slot v-for="slot in slots" :time="slot" @click="selectedSlot(slot)"></Slot>
        <button v-if="slotData" @click="book()">Book</button>
      </div>
    </div>
  </template>
  
  <script>
  import Slot from './Slot.vue';
  export default{
    data(){
      return {
        slectedSlot:'',
        slots:[],
        slotData:false,
        isAnimating: false
      }
    },
    methods:{
      selectedSlot(slot){
        this.slectedSlot=slot;
        var ele=document.querySelectorAll('.slot');
        for (var i = 0; i < ele.length; i++ ) {
    ele[i].style = "background-color: rgb(80, 80, 80);";
}
        document.getElementById(slot).style=`background-color: rgb(82, 0, 103);`
        
      },
      search(){
        const value=document.getElementById('search').value;
        if(value==='Ish'){
          this.slots=['10:00','13:00','18:00'];
          const data=localStorage.getItem(value);
          if(data!==null){
            this.slots = this.slots.filter(item => item !== data)
          }
          this.slotData=true;
        }else if(value==='Shiv'){
          this.slots=['14:00','16:00','18:00','20:00'];
          const data=localStorage.getItem(value);
          if(data!==null){
            this.slots = this.slots.filter(item => item !== data)
          }
          this.slotData=true;
        }else if(value==='Shrav'){
          this.slots=['09:00','18:00','22:00'];
          const data=localStorage.getItem(value);
          if(data!==null){
            this.slots = this.slots.filter(item => item !== data)
          }
          this.slotData=true;
        }else if(value==='Shanthi'){
          this.slots=['07:00','15:00','17:00'];
          const data=localStorage.getItem(value);
          if(data!==null){
            this.slots = this.slots.filter(item => item !== data)
          }
          this.slotData=true;
        }else if(value==='Poo'){
          this.slots=['07:00','15:00','17:00'];
          const data=localStorage.getItem(value);
          if(data!==null){
            this.slots = this.slots.filter(item => item !== data)
          }
          this.slotData=true;
        }else{
          this.slots=[];
          this.slotData=false;
        }
      },book(){
        const value=document.getElementById('search').value;
        if(this.slectedSlot!==''){
          const slotValue=this.slectedSlot;
          console.log(slotValue);
          localStorage.setItem(value,slotValue);
          this.$router.push({
        name:'slot'
      })
        }
      }
    },
    components:{
        Slot
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
    width: 50vw;
  }
  
  .img img{
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    width: 20vw;
    position: fixed;
    right: 10vw;
    bottom: 20vh;
    top: 20vh;
    font-size: 2rem;
  }

  .booking h1{
    font-size: 2rem;
  }
  
  .booking button{
    margin-top: 2vh;
    padding: 1.5vh 2vw;
    border-radius: 5px;
    background-color: rgb(132, 0, 255);
  }

  .search{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search input{
    border: none;
    margin-right: 2vw;
    height: 50px;
    background-color: transparent;
  }
  </style>