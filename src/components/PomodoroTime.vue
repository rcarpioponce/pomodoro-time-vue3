<template>
  <h1>{{ timeFormat }}</h1>
  <button @click="initCountDown">Iniciar</button>
  <button @click="reloadCountDown">Reiniciar</button>
</template>

<script>
import usePomodoro from '@/composables/usePomodoro';

export default {
    name: 'PomodoroTime',
    setup(){
        const { timeMinutes, startCountDown, timeFormat, initCountDown, reloadCountDown } = usePomodoro()
        

        return { 
            timeMinutes, 
            startCountDown, 
            timeFormat,
            initCountDown,
            reloadCountDown
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
    margin-right:10px;
}
</style>