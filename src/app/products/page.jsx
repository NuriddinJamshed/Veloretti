"use client"
import React from 'react'
import Card from '@/shared/components/cards/card1'
import Card2 from '@/shared/components/cards/card2'
import Image from 'next/image'
import Section from '@/shared/components/section/section'
import Section2 from '@/shared/components/section/section2'

import img1 from "../../shared/imgs/d8bd60d643dceee9776b69c267697cea79e2ef7c.png"
import img2 from "../../shared/imgs/9aba37d06bdc0fac70014ad67bf8a702a32bb436.png"
import img3 from "../../shared/imgs/690919c6d5651834c319d822c7fa5b06f2a8b5f3.png"
import img4 from "../../shared/imgs/SVG.png"
import img5 from "../../shared/imgs/8d508d7b28e187efd3830842dfec9b4217475967.png"
import img6 from "../../shared/imgs/Bike-image.jpeg.png"
import img7 from "../../shared/imgs/TheVerge.svg.png"
import img8 from "../../shared/imgs/Span (3).png"
import img9 from "../../shared/imgs/VOGUE_LOGO.svg.png"
import img10 from "../../shared/imgs/4e372e2a8d9aa1ba38d541172e20bb57512e6032.png"
import img11 from "../../shared/imgs/d904a1d9e731ce254a5843b2e1d97f1204650417.jpg"

const Products = () => {
  return (
    <div className='mb-[100px]'>
      <div className='w-[100%] h-[110vh] text-[white] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img1.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[16px] font-[600]'>VELORETTI BUSINESS</p>
        <p className='text-[36px] md:text-[70px] font-[600]'>This is Two.</p>
        <p className='text-[16px] font-[600]'>Introducing the all-new Ivy and Ace</p>
      </div>
      <div className='w-[90%] gap-y-[30px] m-auto flex flex-col md:flex-row justify-between my-[100px]'>
        <Card status={"true"} />
        <Card status={"true"} />
      </div>
      <div className='w-[98%] m-auto flex justify-between items-center'>
        <p className='text-[25px] font-[600]'>Explore our bikes</p>
        <div className='flex gap-[10px]'>
          <svg className='w-[50px] h-[50px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Left--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Left Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M9.405962666666666 4.4605760000000005c0.187456 0.187456 0.187456 0.4913706666666667 0 0.6788266666666666l-2.8605866666666664 2.8605866666666664 2.8605866666666664 2.860597333333333c0.187456 0.18741333333333332 0.187456 0.49130666666666667 0 0.6788266666666666 -0.18744533333333332 0.18741333333333332 -0.4913706666666667 0.18741333333333332 -0.678816 0l-3.2 -3.2000106666666666c-0.09001600000000001 -0.09002666666666667 -0.14058666666666667 -0.21211733333333335 -0.14058666666666667 -0.3394133333333333 0 -0.12730666666666665 0.05057066666666667 -0.24939733333333333 0.14058666666666667 -0.3394133333333333l3.2 -3.2c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0Z" fill="#000000" strokeWidth={1.0667} /></svg>
          <svg className='w-[50px] h-[50px] text-[#ccc]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Right--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Right Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M6.594069333333334 4.46064c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0l3.2 3.2c0.09001600000000001 0.09001600000000001 0.14058666666666667 0.21210666666666667 0.14058666666666667 0.3394133333333333 0 0.12730666666666665 -0.05057066666666667 0.24939733333333333 -0.14058666666666667 0.3394133333333333l-3.2 3.199946666666667c-0.18744533333333332 0.18752000000000002 -0.4913706666666667 0.18752000000000002 -0.678816 0 -0.187456 -0.18741333333333332 -0.187456 -0.49130666666666667 0 -0.67872l2.8605866666666664 -2.8606399999999996 -2.8605866666666664 -2.8605866666666664c-0.187456 -0.187456 -0.187456 -0.4913706666666667 0 -0.6788266666666666Z" fill="#000000" strokeWidth={1.0667} /></svg>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-[90%] my-[30px] m-auto justify-between gap-y-[30px]'>
        <Card2 img={img2} title={"City Bikes"} />
        <Card2 img={img3} title={"Kids' Bikes"} />
      </div>
      <div className='w-[90%] m-auto'>
        <p className='font-[600] mt-[150px] mb-[60px] text-[36px] md:text-[70px]'>Make your commute <br /> the best part of your day.</p>
        <div className='flex justify-between items-center'>
          <p className='w-[70%]'>Clean and timeless designs that make every ride a thrill. <br /> Wherever you're heading, our bikes are made to make your daily <br /> commute a joy.</p>
          <Image src={img4} alt='Photo' />
        </div>
      </div>
      <div className='w-[100%] my-[30px] h-[110vh] text-[white] gap-[20px] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img5.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[36px] md:text-[50px] font-[600]'>Discover your <br /> local Veloretti <br /> partner store</p>
        <p className='text-[14px] font-[600]'>Our partner stores across the Netherlands <br /> are there for you. Whether you're looking to <br />pick up a newly ordered bike, need a fix, or <br /> want to take a test ride on our Ivy or Ace Two, <br />your ideal biking experience is closer than <br /> you think.</p>
        <button className='bg-[white] text-[black] w-[70%] md:w-[25%] py-[15px] p-[10px] px-[20px] rounded-[50px]'>Find a partner store near you</button>
      </div>
      <Section img={img6} title={"Leasing"} category={"Learn more"} description={"Want to provide your organisation with mobility in a unique and creative way? Our Electric and City bikes are the perfect solution for healthier employees. So whether it's customised employee bicycles or standout promotional rides, both small and big organisations share the love of our Veloretti designs. Depending on the number of bikes, we will give you a customised quote."} />
      <p className='w-[90%] m-auto text-[36px] md:text-[70px] font-[591] my-[30px]'>They talked about us</p>
      <div className='w-[90%] m-auto mb-[100px] flex gap-y-[30px] flex-col md:flex-row justify-between'>
        <div className='border-[1px] flex flex-col items-center gap-[20px] border-[#E8E8E8] rounded-[3px] w-[100%] md:w-[30%] p-[30px]'>
          <p className='text-[20px] font-[591]'>"One of the best e-bikes available at any price and far and away my favourite ride of the year."</p>
          <Image src={img7} alt='Photo' />
        </div>
        <div className='border-[1px] flex flex-col items-center gap-[20px] border-[#E8E8E8] rounded-[3px] w-[100%] md:w-[30%] p-[30px]'>
          <p className='text-[20px] font-[591]'>“This second-generation Ace is a superhero amongst urban e-bikes… 9/10.”</p>
          <Image src={img8} alt='Photo' />
        </div>
        <div className='border-[1px] flex flex-col items-center gap-[20px] border-[#E8E8E8] rounded-[3px] w-[100%] md:w-[30%] p-[30px]'>
          <p className='text-[20px] font-[591]'>"The timeless, chic design and stunning craftsmanship make them the perfect way to get around the city."</p>
          <Image src={img9} alt='Photo' />
        </div>
      </div>
      <div className='w-[100%] my-[30px] h-[110vh] text-[white] gap-[20px] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img10.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[36px] md:text-[50px] font-[600]'>Red Dot Award</p>
        <p className='text-[14px] font-[600]'>Good design is what drives us, and we're <br /> proud to share that Veloretti Electric Two has <br /> already won the prestigious Red Dot Design <br /> Award 2023, as judged by the world's best <br /> product designers.</p>
      </div>
      <Section2 img={img11} title={"Ride carefree"} category={"Learn more"} description={"Our Qover x Veloretti insurance plan has got you covered. It offers comprehensive coverage against theft, provides assistance in case of any issues, and covers any damages to your bike."} />
    </div>
  )
}

export default Products