import React, {useEffect, useState, useRef} from 'react'
import { TimerContainer, TimerBg, TimerContent,
  TimerRow, TimerColumn, Img, ImgBg } from './TimerElements'
import img from '../../image/coolimage.png'
const Timer = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () =>{
    const countdownDate = new Date('May 23, 2022 00:00:00').getTime();

    interval = setInterval (() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000* 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance <0) {
        // stop the timer
        clearInterval(interval.current);
      }
      else{
        // update timer

        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);

      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () =>{
        clearInterval(interval.current);
    };
  });
  return (
    <TimerContainer>
        <TimerBg>
          <ImgBg src={img}/>
        </TimerBg>

        <TimerContent>
          <TimerRow>
            <TimerColumn>
              
              <section className="timer-container">
                <section className="timer">
                 

                  <section>
                    <p>{timerDays} :</p>
                    <p><small>Days</small></p>
                  </section>
          

                  <section>
                    <p>{timerHours} :</p>
                    <p><small>Hours</small></p>
                  </section>
          

                  <section>
                    <p>{timerMinutes} :</p>
                    <p><small>Minutes</small></p>
                  </section>
            

                  <section>
                    <p>{timerSeconds}</p>
                    <p><small>Seconds</small></p>
                  </section>
 
                </section>
              </section>
            </TimerColumn>
          </TimerRow>
        </TimerContent>
    </TimerContainer>
  )
}

export default Timer