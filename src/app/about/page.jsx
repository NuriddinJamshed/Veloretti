import React from 'react'
import Section from '@/shared/components/section/section'
import Section2 from '@/shared/components/section/section2'
import Card2 from '@/shared/components/cards/card2'

import img1 from "../../shared/imgs/cf243cb0590f56715904fff7b663159eea9c62a8.png"
import img2 from "../../shared/imgs/Text-media-static_background (2).png"
import img3 from "../../shared/imgs/Bike-image.jpeg.png"
import img4 from "../../shared/imgs/05eedd2cb73c0f8baab51788ea64f230221c0794.jpg"
import img5 from "../../shared/imgs/9aba37d06bdc0fac70014ad67bf8a702a32bb436.png"
import img6 from "../../shared/imgs/image (2).png"

const About = () => {
  return (
    <div>
      <div className='w-[100%] h-[110vh] text-[white] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img1.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[16px] font-[600]'>VELORETT</p>
        <p className='text-[36px] md:text-[70px] font-[600]'>About us</p>
        <p className='text-[18px] font-[600]'>Forever Forward.</p>
      </div>
      <Section img={img2} title={"Forever forward"} description={"Our bikes are made to stand the test of time, both aesthetically and practically. Whether you’re after a state-of-the-art electric bike, a classic city bike, or a kids bike for the school run, we want to help make your commute the best part of your day. "} />
      <Section2 img={img3} title={"Part of Pon.Bike"} description={"Veloretti was founded in Amsterdam in 2012 with a mission to make clean, timeless bikes that are great quality and delivered to your door at a fair price. We are proud to now be part of Pon.Bike, the world-leading family of bike brands. With this support, we can continue to evolve our designs, take care of our riders, and help keep their bikes on the road. "} />
      <p className='w-[90%] md:w-[60%] m-auto text-[48px] md:text-[100px] font-[591] text-center'>Designed in <br />
        Amsterdam, <br />
        handmade <br />
        in Europe, <br />
        personal in <br />
        all cities.</p>
      <div className='w-[100%] h-[110vh] text-[white] my-[100px] flex px-[5%] flex-col items-end justify-center' style={{ backgroundImage: `url(${img4.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className='text-[36px] md:text-[70px] font-[600]'>Made for you</p>
        <p className='text-[18px] font-[600] w-[90%] md:w-[30%]'>Elevate your ride with a bicycle that mirrors
          your unique style and personality. From an
          Ace Two electric bike with the latest
          technology packed into a minimalist design,
          or a bright yellow Berlin for those who like to
          ride light and have a craving for nostalgia.
          Our diverse range of models and colours
          cater to riders of all kinds.</p>
      </div>
      <div className='w-[98%] m-auto flex justify-between items-center'>
        <p className='text-[25px] font-[600]'>Explore our bikes</p>
        <div className='flex gap-[10px]'>
          <svg className='w-[50px] h-[50px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Left--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Left Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M9.405962666666666 4.4605760000000005c0.187456 0.187456 0.187456 0.4913706666666667 0 0.6788266666666666l-2.8605866666666664 2.8605866666666664 2.8605866666666664 2.860597333333333c0.187456 0.18741333333333332 0.187456 0.49130666666666667 0 0.6788266666666666 -0.18744533333333332 0.18741333333333332 -0.4913706666666667 0.18741333333333332 -0.678816 0l-3.2 -3.2000106666666666c-0.09001600000000001 -0.09002666666666667 -0.14058666666666667 -0.21211733333333335 -0.14058666666666667 -0.3394133333333333 0 -0.12730666666666665 0.05057066666666667 -0.24939733333333333 0.14058666666666667 -0.3394133333333333l3.2 -3.2c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0Z" fill="#000000" strokeWidth={1.0667} /></svg>
          <svg className='w-[50px] h-[50px] text-[#ccc]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Right--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Right Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M6.594069333333334 4.46064c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0l3.2 3.2c0.09001600000000001 0.09001600000000001 0.14058666666666667 0.21210666666666667 0.14058666666666667 0.3394133333333333 0 0.12730666666666665 -0.05057066666666667 0.24939733333333333 -0.14058666666666667 0.3394133333333333l-3.2 3.199946666666667c-0.18744533333333332 0.18752000000000002 -0.4913706666666667 0.18752000000000002 -0.678816 0 -0.187456 -0.18741333333333332 -0.187456 -0.49130666666666667 0 -0.67872l2.8605866666666664 -2.8606399999999996 -2.8605866666666664 -2.8605866666666664c-0.187456 -0.187456 -0.187456 -0.4913706666666667 0 -0.6788266666666666Z" fill="#000000" strokeWidth={1.0667} /></svg>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-[90%] my-[30px] m-auto justify-between gap-y-[30px]'>
        <Card2 img={img6} title={"Electric Bikes"} />
        <Card2 img={img5} title={"City Bikes"} />
      </div>
    </div>
  )
}

export default About