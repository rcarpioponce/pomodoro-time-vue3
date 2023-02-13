import { computed, ref } from 'vue'

const usePomodoro = (minutes = 2) => {
    const initialMinutes = minutes
    const timeMinutes = ref(minutes)
    const seconds = ref(0)
    const startCountDown = ref(false)

    let intervalSeconds

    const initCountDown = () => {
        if(startCountDown.value){
            return
        }
        startCountDown.value = true
        intervalSeconds = setInterval(() => {
            
            if(timeMinutes.value === 0 && seconds.value === 0){
                clearInterval(intervalSeconds)
                return
            }
            if (seconds.value === 0){
                seconds.value = 60
                if(timeMinutes.value >= 1){
                    timeMinutes.value = timeMinutes.value - 1; 
                }
                
            }

            seconds.value = seconds.value - 1
          
        }, 1000 );
    }

    return {
        timeMinutes,
        startCountDown,
        timeFormat: computed(() => {
            let minutesFormat = timeMinutes.value
            let secondsFormat = seconds.value
            if( seconds.value < 10 ){
                secondsFormat = `0${seconds.value}`
            }
            if( timeMinutes.value < 10 ){
                minutesFormat = `0${timeMinutes.value}`
            }
            return `${minutesFormat}:${secondsFormat}`
        }),
        timePercent: computed( () => {
            let secondsTotal = minutes * 60
            let secondRecorridos = (timeMinutes.value * 60) + seconds.value
            return (secondsTotal - secondRecorridos) * 100 / secondsTotal
        }),
        //methods
        initCountDown,
        reloadCountDown: () => {
            if(intervalSeconds){
                clearInterval(intervalSeconds)
            }
            startCountDown.value = false
            timeMinutes.value = initialMinutes
            seconds.value = 0
            initCountDown()
        }
    }
}

export default usePomodoro