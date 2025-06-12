import React from 'react'
import Image from 'next/image'

import img1 from "../../shared/imgs/449ed33759ac77707654c6f5837d4b4dca7add43.png"
import img2 from "../../shared/imgs/9657bdaff8d38bc44486251f6b3059aa17b377c9.jpg"
import img3 from "../../shared/imgs/Span (4).png"
import img4 from "../../shared/imgs/image (1).png"
import img5 from "../../shared/imgs/image.png"
import img6 from "../../shared/imgs/Span (1).png"
import img7 from "../../shared/imgs/Span (2).png"
import img8 from "../../shared/imgs/div.h2d-ac44f41b.png"

const City = () => {
  return (
    <div>
      <div className='w-[100%] h-[110vh] text-[white] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img1.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[16px] font-[600]'>VELORETTI</p>
        <p className='text-[36px] md:text-[70px] font-[600]'>City bikes</p>
        <p className='text-[18px] font-[600]'>Forever Forward .</p>
      </div>
      <p className='text-[42px] md:text-[120px] font-[591] text-center my-[30px]'>Forever Forward.</p>
      <div className='w-[90%] flex flex-col-reverse gap-y-[30px] md:flex-row-reverse m-auto justify-between items-start'>
        <Image className='w-[100%] md:w-[50%]' src={img2} alt='Photo' />
        <Image className='w-[70%] md:w-[20%] md:pt-[15vh]' src={img3} alt='Photo' />
      </div>
      <p className='w-[80%] md:w-[25%] border-[1px] p-[20px] bg-[white] relative border-[#ccc] top-[-100px] rounded-[10px] text-[20px] m-auto'>Our women's bicycles are <br />
        for everyone who likes to <br />
        combine style with <br />
        performance. In this <br />
        range, available are the <br />
        Café Racer and the <br />
        Robyn, both frames with a <br />
        lower tube, making it easy <br />
        to step through.</p>
      <div className='w-[100%] md:py-[100px] my-[50px] bg-[#B6B6B6] md:p-[50px] flex flex-col gap-y-[30px] md:flex-row justify-between'>
        <div className='w-[90%] md:w-[45%] m-auto'>
          <Image className='w-[100%]' src={img5} alt='Photo' />
          <p className='text-[20px] flex my-[10px] justify-between font-[500] text-[white]'>Caféracer <span className='text-[#DBDBDB]'>Women</span></p>
        </div>
        <div className='w-[90%] md:w-[45%] m-auto'>
          <Image className='w-[100%]' src={img4} alt='Photo' />
          <p className='text-[20px] flex my-[10px] justify-between font-[500] text-[white]'>Robyn <span className='text-[#DBDBDB]'>Women</span></p>
        </div>
      </div>
      <div className='flex flex-col-reverse w-[90%] m-auto md:flex-row items-start'>
        <Image className='w-[100%] md:w-[50%]' src={img6} alt='Photo' />
        <p className='w-[80%] md:w-[30%] border-[1px] p-[5%] mt-[0] bg-[white] text-[#A1A2A1] border-[#ccc] text-[20px] m-auto'>Whether you like it easy or
          fast, we got both. Our
          men's range of bicycles
          combine modern clean
          design with great quality,
          so they're perfect for your
          daily city commute. Our
          men citybikes are the
          Caféracer, Caféchaser
          and the Berlin, but feel
          free to opt for a women's
          bike for that easy hop-on-
          hop-off Amsterdam style.</p>
        <Image className='w-[70%] md:w-[20%]' src={img7} alt='Photo' />
      </div>
      <Image className='w-[60%] md:w-[25%] m-auto relative h-[480px] object-cover object-top top-[-15vh] md:top-[-30vh]' src={img8} alt='Photo' />
      <p className='text-center text-[50px] md:text-[120px] font-[600]'>City bikes <br /> for everyone.</p>
    </div>
  )
}

export default City