"use client"
import React from 'react'

import img1 from "../../imgs/Span.png"
import Image from 'next/image'
import ThemeSelector from '../theme/themeSelector'
import Link from 'next/link'

const Card = ({ status }) => {
    return (
        <div className='bg-[#EBEDEE] w-[100%] md:w-[45%] flex flex-col gap-[30px] p-[20px] rounded-[5px]'>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-[18px] md:text-[30px] font-[600] flex flex-row items-start gap-[10px]'>
                    Electric Ace
                    <span className='text-[14px] font-[500]'>Two</span>
                </p>
                <p className='text-[16px] md:text-[20px] font-[400]'>€69,07 NET/MONTH</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <svg className='w-[50px] h-[50px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Left--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Left Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M9.405962666666666 4.4605760000000005c0.187456 0.187456 0.187456 0.4913706666666667 0 0.6788266666666666l-2.8605866666666664 2.8605866666666664 2.8605866666666664 2.860597333333333c0.187456 0.18741333333333332 0.187456 0.49130666666666667 0 0.6788266666666666 -0.18744533333333332 0.18741333333333332 -0.4913706666666667 0.18741333333333332 -0.678816 0l-3.2 -3.2000106666666666c-0.09001600000000001 -0.09002666666666667 -0.14058666666666667 -0.21211733333333335 -0.14058666666666667 -0.3394133333333333 0 -0.12730666666666665 0.05057066666666667 -0.24939733333333333 0.14058666666666667 -0.3394133333333333l3.2 -3.2c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0Z" fill="#000000" strokeWidth={1.0667} /></svg>
                <Image src={img1} alt='Photo' />
                <svg className='w-[50px] h-[50px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Right--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Right Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M6.594069333333334 4.46064c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0l3.2 3.2c0.09001600000000001 0.09001600000000001 0.14058666666666667 0.21210666666666667 0.14058666666666667 0.3394133333333333 0 0.12730666666666665 -0.05057066666666667 0.24939733333333333 -0.14058666666666667 0.3394133333333333l-3.2 3.199946666666667c-0.18744533333333332 0.18752000000000002 -0.4913706666666667 0.18752000000000002 -0.678816 0 -0.187456 -0.18741333333333332 -0.187456 -0.49130666666666667 0 -0.67872l2.8605866666666664 -2.8606399999999996 -2.8605866666666664 -2.8605866666666664c-0.187456 -0.187456 -0.187456 -0.4913706666666667 0 -0.6788266666666666Z" fill="#000000" strokeWidth={1.0667} /></svg>
            </div>
            <div className='flex flex-col-reverse items-center gap-y-[20px] md:flex-row' style={{ justifyContent: status === "true" ? "space-between" : "center" }}>
                {status == "true" && <div className='flex items-center gap-[20px]'>
                    <Link href={"/products/1"} className='bg-[white] p-[10px] px-[20px] rounded-[50px]'>Buy Now</Link>
                    <Link href={"/products/1"} className='font-[500] text-[18px] underline'>Learn more</Link>
                </div>}
                <ThemeSelector />
            </div>
        </div>
    )
}

export default Card