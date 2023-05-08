<template>
    <div class="slot" :id=time>{{ time }}</div>
</template>


<script>
export default{
    props:['time'],
}
</script>


<style scoped>
.slot{
    width: min-content;
    padding: 1.5vh 2vw;
    border-radius: 20px;
    background-color: rgb(80, 80, 80);
    margin-top: 2vh;
    cursor: pointer;
}
</style>