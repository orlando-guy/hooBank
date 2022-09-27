import React from 'react'
import { apple, bill, google } from '../assets'
import style, {layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5] object-contain' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>Easily control your <br className='sm:blok hidden' /> billing & incoicing</h2>
        <p className={`${style.paragraph} mex-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi, pariatur iste unde fugit odio facere placeat animi eveniet possimus quibusdam quia porro expedita similique repellat a earum, iure omnis!
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing