import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section} id="cardDeal">
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2} >Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
          <p className={`${styles.paragraph} max-w-[450px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed voluptatum nihil laboriosam odit est, saepe eligendi aliquid repellat molestias facilis praesentium officia ratione perspiciatis quod. Voluptas eum eos numquam.</p>
          
          <Button styles="mt-10 rounded-[10px]" />
        </div>
        <div className={layout.sectionImg}>
          <img src={card} alt="card" className='w-[100%] h-[100%] object-contain' />
        </div>
    </section>
  )

export default CardDeal