import React from 'react'
import styles from '../style'
import { logo } from "../assets";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.marginX} flex-col`}>
      <div className={`${styles.flexStart} sm:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start sm:mr-3'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A advanced way to make the payment easy, reliable and secure.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-mt-0 mt-10">
          {footerLinks.map((footerlink, key) => (
            <div key={key} className="flex flex-col sm:my-0 my-4 min-w-[150px]">
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerlink.title}</h4>

              <ul className='list-none mt-4'>
                {footerlink.links.map((link, index) => (
                  <li key={index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex md:flex-row flex-col justify-between items-center border-t-[1px] border-t-[#3f3e45] py-6'>
        <p className='font-poppins font-normal text-[16px] leading-[27px] text-center text-white'>2022 HooBank template made basicaly in Figma with build in React. Build By Orlando. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
          ))}
        </div>
      </div>
    </section>
  )

export default Footer