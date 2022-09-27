import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient text-primary font-poppins font-medium text-[18px] outline-none ${styles}`}>
      Get started
    </button>
  )
}

export default Button