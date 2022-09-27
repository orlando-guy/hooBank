import React from 'react'
import {clients} from '../constants'
import styles from '../style'

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:max-w-[192px] max-w-[120px] ${index !== clients.length ? 'sm:mr-10 mr-6' : 'mr-0'}`}>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain ' />
          </div>
        ))}
      </div>
    </section>
  )

export default Clients