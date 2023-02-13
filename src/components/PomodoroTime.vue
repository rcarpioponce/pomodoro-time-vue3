<template>
  <h1>{{ timeFormat }}</h1>
  <button @click="initCountDown">Iniciar</button>
</template>

<script>
import usePomodoro from '@/composables/usePomodoro';

export default {
    name: 'PomodoroTime',
    setup(){
        const { timeMinutes, startCountDown, timeFormat, initCountDown } = usePomodoro()
        

        return { 
            timeMinutes, 
            startCountDown, 
            timeFormat,
            initCountDown
        }
    }
}
</script>

<style scoped>
h1{
    font-size: 100px;
    color: green;
}
button{
    color: white;
    background-color:black;
    font-size: 30px;
    padding:10px 20px;
    cursor:pointer;
}
</style>