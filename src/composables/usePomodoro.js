import { computed, ref } from 'vue'

const usePomodoro = (minutes = 25) => {
    const timeMinutes = ref(minutes)
    const seconds = ref(0)
    const startCountdown = ref(false)



    return {
        timeMinutes,
        startCountdown,
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
        //methods
        initCountDown: () => {
            if(startCountdown.value){
                return
            }
            startCountdown.value = true
            const intervalSeconds = setInterval(() => {
                
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
    }
}

export default usePomodoro