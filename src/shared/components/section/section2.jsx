import Image from 'next/image'
import React from 'react'

const Section2 = ({img, description, title, category}) => {
  return (
    <div className='w-[90%] flex items-center flex-col gap-y-[50px] md:flex-row justify-between m-auto '>
        <div className='w-[100%] md:w-[45%] flex flex-col pr-[10%] gap-[30px]'>
            <p className='font-[600] text-[50px]'>{title}</p>
            <p className='font-[600] text-[14px]'>{description}</p>
            <p className='text-[15px] font-[600]'>{category}</p>
        </div>
        <Image className='w-[100%] md:w-[50%]' src={img} alt='Photo'/>
    </div>
  )
}

export default Section2