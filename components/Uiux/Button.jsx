import React from 'react'

const Button = ({ button_name, Class,variant }) => {
  return (
    <>
      {
        variant === 'primary' ?
          <button className={`duration-500 transition-all text-xl md:text-[22px] md:text-2xl 2xl:text-3xl font-primary hover:bg-transparent bg-primary px-8 md:px-12 pt-2 md:pt-3 pb-2.5 md:pb-3 2xl:pb-2.5 rounded-xl  ${Class} hover:text-primary border-2 border-transparent hover:border-primary`}>
            {button_name}
          </button>
          :
          variant === 'secondary' ?
            <button className={`duration-500 transition-all text-xl md:text-[22px] md:text-2xl 2xl:text-3xl font-secondary  hover:bg-primary border-2 border-primary px-6 md:px-12 2xl:px-16 py-2 md:py-3 2xl:py-2.5 rounded-xl  ${Class} hover:text-black`}>
              {button_name}
            </button>
            : null
      }
    </>

  )
}

export default Button
