import React, {useEffect, useState, useRef} from 'react'
import { TimerContainer, TimerBg, TimerContent,
  TimerRow, TimerColumn, ImgL, ImgBg,ImgBgMob, ImgPandL, ImgBambR, ImgR } from './TimerElements'
import img from '../../image/timer/coolimage11.JPG'
import imgMob from '../../image/timer/mobBg.JPG'
import imgPandL from '../../image/timer/mobPand.PNG'
import imgBamb from '../../image/timer/mobBamb.PNG'
import imgR from '../../image/timer/rightPanda.png'
import imgL from '../../image/timer/leftPanda .png'

const Timer = () => {
  

  return (
    <TimerContainer>
        <TimerBg className='anim'>
          <ImgBg src={img}/>
          <ImgBgMob src={imgMob}/>
          <ImgPandL src={imgPandL}/>
          <ImgBambR src={imgBamb}/>
        </TimerBg>

        <TimerContent>
          <TimerRow>
            <TimerColumn> 
              <ImgL src={imgL}/>                                   
            </TimerColumn>            
            <TimerColumn> 
              <ImgR src={imgR}/>                                  
            </TimerColumn>
          </TimerRow>
        </TimerContent>
    </TimerContainer>
  )
}

export default Timer