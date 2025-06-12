"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import img1 from "../../imgs/Vector.png"

const Header = () => {
    return (
        <div className='w-[90%] flex flex-row m-auto border-b-[1px] border-[#ccc] h-[8vh] items-center justify-between'>
            <menu className='flex w-[70%] items-center gap-[40px] '>
                <Image className='w-[50%] md:w-[18%] mr-[30px]' src={img1} alt="photo" />
                <Link className='hidden md:block hover:text-[#ccc] font-[400] text-[18px]' href={"/"}>HOME</Link>
                <Link className='hidden md:block hover:text-[#ccc] font-[400] text-[18px]' href={"/products"}>PRODUCTS</Link>
                <Link className='hidden md:block hover:text-[#ccc] font-[400] text-[18px]' href={"/city"}>CITY</Link>
                <Link className='hidden md:block hover:text-[#ccc] font-[400] text-[18px]' href={"/about"}>ABOUT</Link>
            </menu>
            <div className='flex w-[30%] md:w-[15%] justify-between'>
                <p className='text-[18px] flex gap-[5px] font-[400]'>EN <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" id="Gb-Ukm-United-Kingdom--Streamline-Flagpack" height={24} width={24} ><desc>{"\n    GB UKM United Kingdom Streamline Icon: https://streamlinehq.com\n  "}</desc><path fill="#2e42a5" fillRule="evenodd" d="M0 4v24h32V4H0Z" clipRule="evenodd" /><mask id="a" width={32} height={24} x={0} y={4} maskUnits="userSpaceOnUse" style={{
                    maskType: "luminance"
                }}><path fill="#ffffff" fillRule="evenodd" d="M0 4v24h32V4H0Z" clipRule="evenodd" /></mask><g mask="url(#a)"><path fill="#ffffff" d="m-3.563 26.285 7.042 2.978 28.68-22.025 3.715-4.426-7.53-.995-11.698 9.491-9.416 6.395-10.793 8.582Z" /><path fill="#f50100" d="M-2.599 28.372.99 30.1 34.54 2.401h-5.038L-2.6 28.371Z" /><path fill="#ffffff" d="m35.563 26.285-7.042 2.978L-.159 7.238l-3.715-4.426 7.53-.995 11.698 9.491 9.416 6.395 10.793 8.582Z" /><path fill="#f50100" d="m35.323 27.782-3.587 1.729-14.287-11.86-4.236-1.325L-4.231 2.827H.806L18.24 16.006l4.631 1.589 12.452 10.188Z" /><mask id="b" fill="#ffffff"><path fillRule="evenodd" d="M19.778 2h-7.556v10H-1.972v8h14.194v10h7.556V20h14.25v-8h-14.25V2Z" clipRule="evenodd" /></mask><path fill="#f50100" fillRule="evenodd" d="M19.778 2h-7.556v10H-1.972v8h14.194v10h7.556V20h14.25v-8h-14.25V2Z" clipRule="evenodd" /><path fill="#ffffff" d="M12.222 2V0h-2v2h2Zm7.556 0h2V0h-2v2Zm-7.556 10v2h2v-2h-2Zm-14.194 0v-2h-2v2h2Zm0 8h-2v2h2v-2Zm14.194 0h2v-2h-2v2Zm0 10h-2v2h2v-2Zm7.556 0v2h2v-2h-2Zm0-10v-2h-2v2h2Zm14.25 0v2h2v-2h-2Zm0-8h2v-2h-2v2Zm-14.25 0h-2v2h2v-2Zm-7.556-8h7.556V0h-7.556v4Zm2 8V2h-4v10h4Zm-16.194 2h14.194v-4H-1.972v4Zm2 6v-8h-4v8h4Zm12.194-2H-1.972v4h14.194v-4Zm2 12V20h-4v10h4Zm5.556-2h-7.556v4h7.556v-4Zm-2-8v10h4V20h-4Zm16.25-2h-14.25v4h14.25v-4Zm-2-6v8h4v-8h-4Zm-12.25 2h14.25v-4h-14.25v4Zm-2-12v10h4V2h-4Z" mask="url(#b)" /></g></svg></p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 block md:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden md:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden md:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>
        </div>
    )
}

export default Header