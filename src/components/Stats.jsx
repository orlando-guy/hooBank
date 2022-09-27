import React from 'react'
import { stats } from "../constants";
import style from "../style";

const Stats = () => (
    <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className='font-poppins font-semibold xs:test-[40] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
            <p className='font-poppins font-normal xs:test-[20] text-[15px] xs:leading-[26px] leading-[21px] text-white text-gradient uppercase ml-3'>{stat.title}</p>
          </div>
      ))}
    </section>
  )

export default Stats