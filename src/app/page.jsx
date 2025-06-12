"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Section from '@/shared/components/section/section'

import img1 from "@/shared/imgs/7838d2af982259a96f988a19c294dad5d4ce1148.png"
import img2 from "../shared/imgs/Text-media-static_background.png"
import img3 from "../shared/imgs/Text-media-new_background.png"
import img4 from "../shared/imgs/Bike-image.jpeg.png"
import img5 from "../shared/imgs/div.video_wrapper__OHSYY.png"
import Image from 'next/image'
import Card from '@/shared/components/cards/card1'

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <div className='w-[100%] h-[110vh] text-[white] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img1.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[14px] font-[600]'>VELORETTI BUSINESS</p>
        <p className='text-[36px] md:text-[70px] font-[600]'>Bike lease plan for employees.</p>
      </div>
      <Section img={img2} title={"Bike plans for employees."} category={"Discover more"} description={"Veloretti Electrics benefit both the environment and the health of your employees. Oh, and they look good too. Cost-free for the employer and outside of the WKR."} />
      <div className='w-[100%] h-[100vh] text-[white] flex px-[10%] flex-col justify-center' style={{ backgroundImage: `url(${img3.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[36px] md:text-[50px] font-[600]'>Service, <br /> maintenance and <br />insurance</p>
        <p className='text-[14px] font-[600]'>The lease includes an all-in service package. <br /> Throughout the entire 36 months, you are <br /> fully insured against damage, theft and <br /> maintenance. In addition, you always have <br /> access to roadside assistance. </p>
      </div>
      <Section img={img4} title={"Free of charge for employers"} category={"Cost example"} description={"The bike plan is totally independent of the WKR and is free for you as an employer. The employee pays the lease costs and you, as the employer, decide whether you want to contribute to the costs."} />
      <div className='flex my-[100px] items-center flex-col-reverse md:pl-[5%] md:flex-row justify-between w-[95%] m-auto'>
        <div className="w-[100%] flex flex-col gap-y-[50px] md:w-[50%]">
          <p className='text-[50px] font-[500]'>How it works</p>
          <div className='flex flex-col gap-[20px] w-[100%]'>
            <div>
              <p className='text-[20px] font-[600]'><span className='py-[3px] px-[10px] text-[#EAEAEA] bg-[#EAEAEA] rounded-[50%] mr-[10px]'>.  </span> Register your company</p>
              <p className='text-[16px] text-[#A1A2A1] font-[500] md:w-[80%] pl-[10%] md:pl-[5%]'>Fill in our registration form with your company details. After your registration, our leasing partner will do a credit check. You will hear whether your application has been approved within 24 hours.</p>
            </div>
            <div>
              <p className='text-[20px] font-[600]'><span className='py-[3px] px-[10px] text-[#EAEAEA] bg-[#EAEAEA] rounded-[50%] mr-[10px]'>.  </span> Determine the requirements</p>
              <p className='text-[16px] text-[#A1A2A1] font-[500] md:w-[80%] pl-[10%] md:pl-[5%]'>You get acces to the digital platform. Set the requirements for your employees and share the registration link.</p>
            </div>
            <div>
              <p className='text-[20px] font-[600]'><span className='py-[3px] px-[10px] text-[#EAEAEA] bg-[#EAEAEA] rounded-[50%] mr-[10px]'>.  </span> Ride your bike!</p>
              <p className='text-[16px] text-[#A1A2A1] font-[500] md:w-[80%] pl-[10%] md:pl-[5%]'>Let's go! Your employees can choose their bikes and they'll be delivered straight to their homes.</p>
            </div>
            <div>
              <p className='text-[20px] font-[600]'><span className='py-[3px] px-[10px] text-[#EAEAEA] bg-[#EAEAEA] rounded-[50%] mr-[10px]'>.  </span> Administration</p>
              <p className='text-[16px] text-[#A1A2A1] font-[500] md:w-[80%] pl-[10%] md:pl-[5%]'>Everything in one place. The digital platform gives you an easy overview of all the information for your payroll.</p>
            </div>
          </div>
        </div>
        <Image src={img5} alt="Photo" className='w-[100%] md:w-[50%]' />
      </div>
      <div className='w-[90%] gap-y-[30px] m-auto flex flex-col md:flex-row justify-between my-[50px]'>
        <Card status={"false"} />
        <Card status={"false"} />
      </div>
      <div className='w-[100%] flex flex-col gap-[15px] p-[30px] md:p-[20%]'>
        <p className='text-[50px] font-[600] text-center mb-[30px]'>Get in touch</p>
        <input type="text" placeholder='First name' className='rounded-[3px] p-[10px] px-[20px] border-[1px] border-[#E8E8E8] placeholder:text-[black]' />
        <input type="text" placeholder='Last name' className='rounded-[3px] p-[10px] px-[20px] border-[1px] border-[#E8E8E8] placeholder:text-[black]' />
        <input type="text" placeholder='Email address' className='rounded-[3px] p-[10px] px-[20px] border-[1px] border-[#E8E8E8] placeholder:text-[black]' />
        <input type="text" placeholder='Phone number' className='rounded-[3px] p-[10px] px-[20px] border-[1px] border-[#E8E8E8] placeholder:text-[black]' />
        <input type="text" placeholder='Company name' className='rounded-[3px] p-[10px] px-[20px] border-[1px] border-[#E8E8E8] placeholder:text-[black]' />
        <select className='rounded-[3px] p-[10px] px-[20px] border-[1px] border-[#E8E8E8]'>
          <option value="">Company Size</option>
        </select>
        <input type="text" placeholder='Number of bikes' className='rounded-[3px] p-[10px] px-[20px] border-[1px] border-[#E8E8E8] placeholder:text-[black]' />
        <textarea placeholder="Company Size" className="resize-none w-[100%] h-[200px] md:h-[300px] rounded-[3px] px-[20px] py-[10px] border border-[#E8E8E8] placeholder:text-black" />
        <button className='bg-[#898A8A] rounded-[50px] p-[10px] text-[white]'>Send the request</button>
      </div>
      <div className='w-[100%] mb-[100px] border-t-[1px] border-[#ccc] pt-[50px] px-[5%] md:px-[20%]'>
        <p className='text-[42px] font-[600] text-center md:text-[120px]'>Any questions?</p>
        <div className='mt-[30px] flex flex-col mb-[30px] gap-[20px] border-t-[1px] pt-[30px] border-[#ccc]'>
          <p className='flex justify-between items-center text-[25px] font-[600]'>What about the paperwork? <span className='font-[900]'>-</span> </p>
          <p className='text-[#14161599] text-[14px]'>The bicycle plan is set up so that there will be no administrative work on your part as the employer. You can use a free online platform that has been created by our leasing partner. This provides you with a simple overview of your business and your employees, allowing you to arrange everything. It also simplifies all the paperwork. Everything is organised with just a few clicks.</p>
        </div>
        <p className='flex justify-between items-center text-[25px] font-[600] border-t-[1px] mt-[30px] pt-[30px] border-[#ccc]'>How does it work with an employee who retires early?<span className='font-[900]'>+</span> </p>
        <p className='flex justify-between items-center text-[25px] font-[600] border-t-[1px] mt-[30px] pt-[30px] border-[#ccc]'>What does a Veloretti Bike Plan cost for an employer?<span className='font-[900]'>+</span> </p>
        <p className='flex justify-between items-center text-[25px] font-[600] border-t-[1px] mt-[30px] pt-[30px] border-[#ccc]'>How is the insurance & maintenance arranged when leasing a Veloretti bike?<span className='font-[900]'>+</span> </p>
        <p className='flex justify-between items-center text-[25px] font-[600] pb-[30px] border-y-[1px] mt-[30px] pt-[30px] border-[#ccc]'>What are the legal requirements for the Veloretti bicycle plan?<span className='font-[900]'>+</span> </p>
      </div>
    </div>
  )
}

export default Page