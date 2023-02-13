<template>
  <div class="countdown">
      <div class="time">{{ timeFormat }}</div>
      <circle-progress :percent="timePercent" :border-bg-width="5" :size="300" />
  </div>
  <div class="botones">
      <button @click="initCountDown">Iniciar</button>
      <button @click="reloadCountDown">Reiniciar</button>
  </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import usePomodoro from '@/composables/usePomodoro';

export default {
    name: 'PomodoroTime',
    components: {
        CircleProgress
    },
    setup(){
        const { 
            timeMinutes,
            startCountDown, 
            timeFormat,
            timePercent,
            initCountDown,
            reloadCountDown 
        } = usePomodoro()
        

        return { 
            timeMinutes, 
            startCountDown, 
            timeFormat,
            timePercent,
            initCountDown,
            reloadCountDown
        }
    }
}
</script>

<style scoped>
.countdown{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.botones{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.time{
    left:0;
    right:0;
    top:0;
    bottom:0;
    position:absolute;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: bold;
    color: #288feb;    
}
button{
    color: white;
    background-color:black;
    font-size: 30px;
    padding:10px 20px;
    cursor:pointer;
    margin-top:40px;
    border-radius: 40px;
}
</style>