import React from 'react'
import Image from 'next/image'
import ThemeSelector from '@/shared/components/theme/themeSelector'
import Section2 from '@/shared/components/section/section2'

import img1 from "../../../shared/imgs/Span.png"
import img2 from "../../../shared/imgs/276586445270dcca0bc561a0186973ac284c8961.png"
import img3 from "../../../shared/imgs/931da49b117a80c9cd040bd4f7bc9f85e028fda7.jpg"
import img4 from "../../../shared/imgs/1810c620e1175de43a6d80ef1c57b570d9885fce.png"
import img5 from "../../../shared/imgs/Video.png"
import img6 from "../../../shared/imgs/Text-media-static_background (1).png"
import img7 from "../../../shared/imgs/1991c7429ab0b3076623861bbb6c6daaa2494882.png"
import img8 from "../../../shared/imgs/Video (1).png"
import img9 from "../../../shared/imgs/bfc42dbf6e765e21a4a3aa473c96874e358cad6f.png"
import img10 from "../../../shared/imgs/Video (2).png"
import img11 from "../../../shared/imgs/31ca828f33cb62a4afcb7afbf3ee65291cd98fe4.png"
import img12 from "../../../shared/imgs/Section.png"
import Section from '@/shared/components/section/section'

const InfoById = () => {
    return (
        <div>
            <div className='flex flex-col items-center pr-[3%] gap-y-[30px] md:flex-row justify-between'>
                <div className='flex w-[100%] md:w-[50%] h-[100vh] bg-[#F0F0F0] flex-row justify-between items-center'>
                    <svg className='w-[50px] h-[50px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Left--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Left Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M9.405962666666666 4.4605760000000005c0.187456 0.187456 0.187456 0.4913706666666667 0 0.6788266666666666l-2.8605866666666664 2.8605866666666664 2.8605866666666664 2.860597333333333c0.187456 0.18741333333333332 0.187456 0.49130666666666667 0 0.6788266666666666 -0.18744533333333332 0.18741333333333332 -0.4913706666666667 0.18741333333333332 -0.678816 0l-3.2 -3.2000106666666666c-0.09001600000000001 -0.09002666666666667 -0.14058666666666667 -0.21211733333333335 -0.14058666666666667 -0.3394133333333333 0 -0.12730666666666665 0.05057066666666667 -0.24939733333333333 0.14058666666666667 -0.3394133333333333l3.2 -3.2c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0Z" fill="#000000" strokeWidth={1.0667} /></svg>
                    <Image className='w-[96%]' src={img1} alt='Photo' />
                    <svg className='w-[50px] h-[50px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Caret-Right--Streamline-Radix" height={16} width={16} ><desc>{"\n    Caret Right Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" clipRule="evenodd" d="M6.594069333333334 4.46064c0.18744533333333332 -0.187456 0.4913706666666667 -0.187456 0.678816 0l3.2 3.2c0.09001600000000001 0.09001600000000001 0.14058666666666667 0.21210666666666667 0.14058666666666667 0.3394133333333333 0 0.12730666666666665 -0.05057066666666667 0.24939733333333333 -0.14058666666666667 0.3394133333333333l-3.2 3.199946666666667c-0.18744533333333332 0.18752000000000002 -0.4913706666666667 0.18752000000000002 -0.678816 0 -0.187456 -0.18741333333333332 -0.187456 -0.49130666666666667 0 -0.67872l2.8605866666666664 -2.8606399999999996 -2.8605866666666664 -2.8605866666666664c-0.187456 -0.187456 -0.187456 -0.4913706666666667 0 -0.6788266666666666Z" fill="#000000" strokeWidth={1.0667} /></svg>
                </div>
                <div className='w-[48%] flex flex-col gap-y-[20px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='text-[18px] md:text-[25px] font-[500] flex flex-row items-start gap-[10px]'>
                            Electric Ivy
                            <span className='text-[14px] font-[500]'>Two</span>
                        </p>
                        <p className='text-[20px] md:text-[30px] font-[400]'>€ 3.299</p>
                    </div>
                    <div className='flex gap-[30px] border-b-[1px] pb-[40px] border-[#ccc]'>
                        <div className='w-[40%] md:w-[20%] flex flex-col gap-[10px]'>
                            <Image className='w-[100%] bg-[#EBEDEE] rounded-[5px] px-[20px]' src={img1} alt='Photo' />
                            <p className='text-[16px] font-[400] flex flex-row items-start'>
                                Electric Ivy
                                <span className='text-[14px] font-[500]'>Two</span>
                            </p>
                        </div>
                        <div className='w-[40%] md:w-[20%] flex flex-col gap-[10px]'>
                            <Image className='w-[100%] bg-[#EBEDEE] rounded-[10px] border-[4px] border-[black] px-[20px]' src={img1} alt='Photo' />
                            <p className='text-[16px] font-[400] flex flex-row items-start'>
                                Electric Ivy
                                <span className='text-[14px] font-[500]'>Two</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col border-b-[1px] pb-[20px] border-[#ccc] items-start gap-[20px]'>
                        <p>Ivy Two Matte Black</p>
                        <ThemeSelector />
                    </div>
                    <p className='underline'>3 interest-free payments with <span className='text-[22px] font-[900]'>Klarna.</span></p>
                    <p className='text-[#727373]'>The Ivy Two is a step-through frame electric bike combining design, advanced technology, and safety features. Rider height: between 164 and 184cm.</p>
                    <select className='bg-[#F0F0F0] w-[70%] md:w-[35%] p-[10px] rounded-[50px]'>
                        <option value="Scroll to Specifications">Scroll to Specifications</option>
                    </select>
                    <button className='w-[70%] bg-[black] text-[white] p-[10px] rounded-[50px]'>Customise now</button>
                    <hr className='text-[#ccc]' />
                    <b>Shipping to the Netherlands, Belgium & Germany only.</b>
                    <p>Delivery time: 5-15 business days</p>
                </div>
            </div>
            <div className='w-[100%] h-[110vh] text-[white] gap-[15px] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img2.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <p className='text-[36px] md:text-[50px] font-[600]'>Removable long- <br /> range battery</p>
                <p className='text-[14px] w-[90%] md:w-[30%] font-[600]'>Recharge anytime, anywhere. Our in-house developed battery is
                    built to go the distance. With a powerful 540 Wh and an impressive
                    range of up to 120km, you'll have the freedom to explore without
                    worrying about running out of power. And if you do need to
                    recharge, our removable and smart battery pack can be easily
                    detached and charged with any electrical outlet.</p>
            </div>
            <Section2 img={img3} title={"Ivy Two"} description={"Introducing the Ivy Two, the electric bike that takes your daily commute to the next level. With an accessible lower frame, the latest technology, and safety features, the Ivy delivers instant power, convenience, and peace of mind at every turn, making it the go-to bike for any commute. Equipped with a bright LED brake light for enhanced visibility and safety tracking for added security, the Ivy Two is the perfect combination of design, technology, and safety."} />
            <Section img={img4} title={"Silent and powerful mid- motor"} description={"Natural and powerful. The 65Nm torque mid-engine gives you all the power you need. Because the engine is directly connected to your pedals, it automatically adjusts its power to your torque instead of speed. This gives you the most natural electric biking experience there is."} />
            <div className='w-[100%] h-[110vh] text-[white] gap-[15px] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img5.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <p className='text-[36px] md:text-[50px] font-[600]'>Built-in display</p>
                <p className='text-[14px] w-[90%] md:w-[30%] font-[600]'>Discover a new level of convenience and
                    control with our elegantly designed
                    integrated display. Everything you need to
                    manage your ride is right at your fingertips,
                    from customizing your bike's settings to
                    navigating unfamiliar parts of the city. And
                    with seamless integration to our app, you can
                    access all your data and ride information with
                    ease.</p>
            </div>
            <Section2 img={img6} title={"Enviolo® automated gears"} description={"Never think about shifting gears again. The Enviolo® gear system takes automated gear-shifting to the next level, delivering the ultimate ride experience every time. This advanced technology effortlessly shifts gears to optimize performance, delivering a natural and effortless ride. Say goodbye to clunky gear changes and hello to a ride that's both easy and efficient."} />
            <Section img={img7} title={"Gates® belt drive"} description={"The Gates Carbon Belt drive is a game-changer. Made from premium quality carbon, it offers unmatched durability and strength. And the best part? You'll never have to worry about oiling your chain again. With our carbon belt, you'll enjoy a seamless, hassle-free biking experience that requires no maintenance for up to 30,000 kilometers."} />
            <Section2 img={img8} title={"LED brake light"} description={"When commuting, safety is priority. We acknowledge the significance of being alert and responsive on the road. That's why we created our brake light to activate instantly and illuminate brightly upon pressing the brakes. This feature guarantees that other drivers and commuters are immediately notified of your intention to slow down or come to a complete stop, ensuring your safety on the road."} />
            <div className='w-[100%] h-[110vh] text-[white] gap-[15px] flex px-[5%] flex-col justify-center' style={{ backgroundImage: `url(${img9.src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <p className='text-[36px] md:text-[50px] font-[600]'>Osram® <br /> precision light</p>
                <p className='text-[14px] w-[90%] md:w-[30%] font-[600]'>Safety is fundamental when it comes to
                    biking. We've designed the precision front
                    light with precision and clarity in mind. From
                    dark roads to challenging city terrain, the
                    precision front light, with its strong beam, is
                    designed to help you navigate with ease and
                    safety. No matter the environment, we make
                    sure we provide you with the visibility you
                    need.</p>
            </div>
            <Section img={img10} title={"Safety tracking"} description={"The Electric Two comes with safety tracking. In case you find yourself in an uncertain situation, simply press the button on your handlebar to alert your loved ones of your live location and feel more secure. Whether you're commuting in the city or exploring the countryside, you can have peace of mind knowing that notifying is just a button press away. Moreover, the tracking feature automatically deactivates after an hour, allowing you to enjoy your rides with complete privacy and security."} />
            <Section2 img={img11} title={"Shimano® hydraulic discbrakes"} description={"The Shimano® discbrakes are premium hydraulic disc brakes designed to deliver lightning-fast stopping power, so you can ride with complete confidence and control. Rest assured, you'll feel the difference in the moments you need it most."} />
            <Image className='my-[150px]' src={img12} alt='Photo' />
            <p className='text-[32px] md:text-[50px] my-[30px] font-[591]'>All in the details.</p>
            <div className='flex mb-[50px] flex-col gap-y-[40px] md:flex-row justify-between w-[90%] m-auto'>
                <div className='w-[90%] md:w-[32%] flex flex-col gap-[20px]'>
                    <p className='text-[30px] font-[591]'>Frame</p>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Frame</p>
                        <p className='text-[#727373]'>Coated aluminium with integrated battery case</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Paint</p>
                        <p className='text-[#727373]'>PPG Powder Coating 2K</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Weight</p>
                        <p className='text-[#727373]'>Frame 26 kg</p>
                        <p className='text-[#727373]'>Battery 3 kg</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Rider Height</p>
                        <p className='text-[#727373]'>164-184cm</p>
                    </div>
                </div>
                <div className='w-[90%] md:w-[32%] flex flex-col gap-[20px]'>
                    <p className='text-[30px] font-[591]'>Components</p>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Motor</p>
                        <p className='text-[#727373]'>Bafang® 36v 250W / Torq + Rotation Sensor w/ a maximum torque of 65 Nm</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Battery</p>
                        <p className='text-[#727373]'>Removable Smart Battery / 36Vdc, 540 WH 60-120 km range</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Gears</p>
                        <p className='text-[#727373]'>Enviolo® TR / Pro 44T Stepless Automatic Shifting / Ratio 310%</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Display</p>
                        <p className='text-[#727373]'>Veloretti built-in display</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Brakes</p>
                        <p className='text-[#727373]'>Shimano® MT200 hydraulic disc brakes</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Tires</p>
                        <p className='text-[#727373]'>Performance Plus tire / 50-622 / Anti Puncture level 2</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'></p>
                        <p className='text-[#727373]'></p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Belt</p>
                        <p className='text-[#727373]'>Gates® Carbon Beltdrive / 122T CDX</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Light front</p>
                        <p className='text-[#727373]'>Osram® Precision front light LED, StVZO approved</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Light rear</p>
                        <p className='text-[#727373]'>COB Hyperbolic LED</p>
                    </div>
                </div>
                <div className='w-[90%] md:w-[32%] flex flex-col gap-[20px]'>
                    <p className='text-[30px] font-[591]'>Accessories</p>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Abus plug</p>
                        <p className='text-[#727373]'>In-chain lock 140 cm</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Front carrier</p>
                        <p className='text-[#727373]'>AVS front carrier 480g Carrying Capacity: 10 kg (22 lb)</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Rear carrier</p>
                        <p className='text-[#727373]'>TBA</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Basket</p>
                        <p className='text-[#727373]'>AVS basket 1.33kg Carrying Capacity: 10 kg (22 lb)</p>
                    </div>
                    <div className='pl-[30px]'>
                        <p className='font-[600]'>Cargo basket</p>
                        <p className='text-[#727373]'>AVS cargo basket 1.7kg Carrying Capacity: 10 kg (22 lb)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoById