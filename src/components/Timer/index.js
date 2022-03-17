import React from 'react'
import { TimerContainer, TimerBg, TimerContent,
  TimerRow, TimerColumn, Img } from './TimerElements'
import img from '../../image/xxx.jpg'
const Timer = () => {
  return (
    <TimerContainer>
        <TimerBg>

        </TimerBg>

        <TimerContent>
          <TimerRow>
            <TimerColumn>
              <Img src={img}/>
            </TimerColumn>
          </TimerRow>
        </TimerContent>
    </TimerContainer>
  )
}

export default Timer