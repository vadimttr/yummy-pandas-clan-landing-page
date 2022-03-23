import React, {useEffect, useState, useRef} from 'react'
import { TimerContainer, TimerBg, TimerContent,
  TimerRow, TimerColumn, Img, ImgBg } from './TimerElements'
import img from '../../image/coolimage.png'
const Timer = () => {
  const[day, setDay] = useState(0);
  const[hour, setHour] = useState(0);
  const[minute, setMinute] = useState(0);
  const[second, setSecond] = useState(0);

  const countdown = () => {

      const countDate = new Date('March 24, 2022 00:00:00').getTime();
      
      const now = new Date().getTime();
      const gap = countDate - now;

      //how time work
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      //calculate time
      const textDay =  Math.floor(gap/day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      setDay(textDay);
      setHour(textHour);
      setMinute(textMinute);
      setSecond(textSecond);

    }

  setInterval(countdown, 1000);

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
                    <p>{day}:</p>
                    <p><small>Days</small></p>
                  </section>
          

                  <section>
                    <p>{hour}:</p>
                    <p><small>Hours</small></p>
                  </section>
          

                  <section>
                    <p>{minute}:</p>
                    <p><small>Minutes</small></p>
                  </section>
            

                  <section>
                    <p>{second}</p>
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