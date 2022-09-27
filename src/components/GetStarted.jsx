import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} >
      <div className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-full flex-col`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrow" />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>started</span>
        </p>
      
      </div>
    </div>
  )

export default GetStarted