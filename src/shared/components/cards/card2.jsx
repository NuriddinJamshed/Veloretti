"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card2 = ({ img, title }) => {
    return (
        <div className='w-[100%] flex flex-col gap-[20px] md:w-[48%] bg-[#EBEDEE] rounded-[10px] p-[30px]'>
            <div className='flex justify-between'>
                <p className='text-[30px] font-[600]'>{title}</p>
                <p className='text-[16px] font-[400]'>From €399</p>
            </div>
            <p className='font-[600] text-[16px]'>Ages 1,5 to 8</p>
            <Image className='w-[100%]' src={img} alt='Photo' />
            <div className='flex items-center gap-[20px]'>
                <Link href={"/products/1"} className='bg-[white] p-[10px] px-[20px] rounded-[50px]'>Buy Now</Link>
                <Link href={"/products/1"} className='font-[500] text-[18px] underline'>Learn more</Link>
            </div>
        </div>
    )
}

export default Card2