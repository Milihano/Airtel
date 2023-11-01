import Navbar from "../shared/navbar"
import Sim01 from "../shared/sim1"
import Sim02 from "../shared/sim2"
import Sim03 from '../shared/sim3'

import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import {HiOutlineDevicePhoneMobile} from 'react-icons/hi2'
import {BsRouterFill} from 'react-icons/bs'
import {AiTwotoneFolderOpen,AiOutlineTwitter} from 'react-icons/ai'
import {TfiSignal} from 'react-icons/tfi'
import {MdSimCard} from 'react-icons/md'
import {IoLogoYoutube} from 'react-icons/io'
import {IoDiamondOutline} from 'react-icons/io5'
import {FaLocationDot} from 'react-icons/fa6'
import {BsFillGiftFill} from 'react-icons/bs'
import {GiSmartphone} from 'react-icons/gi'



// import {AiOutlineArrowRight} from 'react-icons/ai'





import first from "../images/first.jpg"
import second from "../images/second.jpg"
import third from "../images/third.jpg"
import fourth from "../images/fourth.jpg"
import fifth from "../images/fifth.jpg"
import sixth from "../images/sixth.jpg"
import eight from "../images/eight.jpg" 
import airtel1 from "../images/Airtel_ Prepaid _ Postpaid _ 4G _ 5G-0.svg"
import airtel2 from "../images/Airtel_ Prepaid _ Postpaid _ 4G _ 5G-1.svg"
import airtel3 from "../images/Airtel_ Prepaid _ Postpaid _ 4G _ 5G-2.svg"
import andriod from "../images/andriod.png"
import iphone from "../images/apple-icon.png"
import QRcode from "../images/My-Airtel-App-5.png"
// import Nin from "../images/submit nin.svg"



export default function Home() {


    return (
        <body>
            <Navbar/>            
            <div className="my-[2rem] mx-[3rem]">
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* <!-- Item 1 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={first} className="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={second} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={third} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 4 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={fourth} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 5 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={fifth} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 6 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={sixth} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 7 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            {/* <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/> */}
                            <div>
                                <div>
                                    <h1 className="text-[3rem]">
                                        <p className="text-[red] font-semibold">Get Instant Access to Endless Possibilities,</p>
                                        <p>Download My Airtel App</p>

                                    </h1>
                                    
                                    <div>
                                        {/* <a href="">Know More </a> */}
                                    </div>  
                                </div> 
                                <div>

                                </div>                             
                            </div>
                        </div>
                        {/* <!-- Item 8 --> */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={eight} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>  
            </div>    
            <div className="flex bg-[rgb(174,0,0)] py-[2rem] justify-around items-center ">
                <div className="text-[white] text-[1.5rem] px-[3rem] font-bold">
                    <h2>RECHARGE & PAY BILLS</h2>
                </div>
                <div>
                    <div className="flex space-x-2">
                        <Sim01 img={airtel1} body='Prepaid'/>
                        <Sim01 img={airtel1} body='Postpaid'/>
                        <Sim01 img={airtel2} body='HBB'/>
                        <Sim01 img={airtel3} body='Fixed Internet'/>                    
                    </div>                
                    <span className="flex items-center mt-[1rem] space-x-4">    
                        <div className="flex">
                            <p className="bg-[white] p-2 rounded-md">
                                +234
                            </p>
                            <input type="tel" className="w-[28rem] px-5 rounded-md" placeholder="Enter mobile number" />
                        </div>                                            
                        <div className="w-[10rem] flex justify-center ">
                            <button className="text-sm border rounded-md text-white p-3 font-semibold">
                                BUY AIRTIME/DATA
                            </button>
                        </div>
                    </span>

                </div>   
                             
            </div>     
            <div className="p-4 my-5 mx-5">
                <div className="p-3 flex justify-between items-center w-full">
                    <Sim02 img={<BsGlobe2/>} body='DATA BOUNDLES'/>
                    <Sim02 img={<AiOutlinePhone/>} body='VOICE BUNDLES'/>
                    <Sim02 img={<HiOutlineDevicePhoneMobile/>} body='POSTPAID'/>
                    <Sim02 img={<BsRouterFill/>} body='DEVICES'/>
                    <Sim02 img={<AiTwotoneFolderOpen/>} body='SUBMIT NIN'/>
                    <Sim02 img={<TfiSignal/>} body='FIXED INTERNET'/>
                </div>
            </div>     
            <div className="flex justify-center py-[2rem]">
                <Sim03 img={<MdSimCard/>} body='Upgrade to 4G Get' body2='Free 4GB Data' button={"Know More!"}/>
                <div className="p-3 border">
                    <div className="flex flex-col justify-between">
                        <h2 className="text-[2rem]">                    
                            Open up your world to more on MY AIRTEL APP <span className="text-[red]">Click to download or Scan</span>
                        </h2>
                        <div className="flex justify-between items-center text-[5rem] py-7 ">
                            <div className="flex">
                                <img className="w-[5rem] h-[6rem]" src={andriod} alt="" />
                                <img className="w-[5rem] h-[6rem]" src={iphone} alt="" />
                            </div>
                            <img className="w-[5rem] h-[5rem]" src={QRcode} alt="" />
                        </div>                
                        
                    </div>
                </div>                
            </div>        
            <div className="flex justify-center py-[2rem]">
                <Sim03 body={"Airtel Hello tunes"} img={<AiOutlinePhone/>} body2={" Make your callers tingle Dial *791#"} button={"Get More"}/>
                <Sim03 body={"Airtel Hello tunes"} img={<IoLogoYoutube/>} body2={" Make your callers tingle Dial *791#"} button={"Get More"}/>
            </div>               
            <div className="flex flex-col items-center border">
                <p className="text-[2rem] w-[70rem] text-center">
                    "You have the best commercial really. They are always creative and very funny...keep up good work."
                </p>
                <p className="flex items-center text-center"><AiOutlineTwitter/>Airtel Nigeria (@Airtel_Ng)</p>            
            </div>
            <div className="flex justify-center  py-[2rem]">
                <Sim03 body={"Airtel Hello tunes"} img={<BsFillGiftFill/>} body2={" Make your callers tingle Dial *791#"} button={"Get More"}/>
                <Sim03 body={"Airtel Hello tunes"} img={<GiSmartphone/>} body2={" Make your callers tingle Dial *791#"} button={"Get More"}/>
            </div>   
            <div className="flex justify-center  py-[2rem]">
                <Sim03 body={"Airtel Hello tunes"} img={<IoDiamondOutline/>} body2={" Make your callers tingle Dial *791#"} button={"Get More"}/>
                <Sim03 body={"Airtel Hello tunes"} img={<FaLocationDot/>} body2={" Make your callers tingle Dial *791#"} button={"Get More"}/>
            </div>   
            <div>
                <img className="w-full py-5" src={third} alt="" />
            </div>                       
        </body>


    )
  }