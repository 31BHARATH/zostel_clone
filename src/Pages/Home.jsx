import React from 'react'
// import Navbar from '../Components/Navbar'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Trips from '../Components/Trips';
import South from '../Components/South';
import Month from '../Components/Month';
import Action from '../Components/Action';
import Geographics from '../Components/Geographies';
import Awards from '../Components/Awards';
import Reads from '../Components/Reads';
import Footer from '../Components/Footer';
import Retreat from '../Components/Retreat';
import Budget from '../Components/Budget';
import Gems from '../Components/Gems';
import { useState, useEffect } from 'react';

// import './App.css';


function App() {
    const [bgImageIndex, setBgImageIndex] = useState(0);
    const backgroundImageUrls = ['https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg', 'https://img.cdn.zostel.com/cache/_59a0044cad4d16d4f4075657c2adb902/5_1_1400x600.jpg', 'https://img.cdn.zostel.com/cache/_bf6718c9924a17253c3e7a8bcc4640d8/Landing_Page_Photo_1400x600.jpg', 'https://img.cdn.zostel.com/cache/_606bf1e904105f3f61aa7abae817ba89/2_1400x600.jpg','https://img.cdn.zostel.com/cache/_1702bd3ab45e20acabe0c783694e8c73/4_1400x600.jpg'];
  
    // Automatically cycle through background images every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setBgImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
      }, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);


// export default function Home() {
    return (
        <>
            <div className='h-[80vh] w-screen relative flex justify-center items-center background-container' style={{ backgroundImage: `url(${backgroundImageUrls[bgImageIndex]})`}}>
            <div className="bg-black/[20%] h-full w-full absolute"> <h1 className='text-white font-bold text-6xl text-center my-[40vh]'>Live it.Now</h1></div>
                {/* <img src="https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg" alt="" /> */}
                {/* <h1 className='text-white font-bold text-6xl text-center'>Live it.Now</h1> */}
                <div className='h-[200px] absolute -bottom-20 bg-white w-[60%] rounded-lg px-9 py-2 shadow-2xl  z-10'>
                    <ul className='font-semibold flex gap-16 border-b mb-6'>
                        <button><li className='border-b-2 pb-3 border-red-500'>DESTINATIONS</li></button>
                        <button><li className='pb-3'>ZOSTEL</li></button>
                        <button><li className='pb-3'>ZOSTEL PLUS</li></button>
                        <button><li className='pb-3'>ZOSTEL HOMES</li></button> 
                        <button><li className='pb-3'>TRIPS</li></button>
                    </ul>
                    <div className='flex items-center'>
                        <div>
                            <h1 className='text-gray-400  text-center font-bold'>SEARCH YOUR DESTINATION</h1>
                            <div className='border-b-[1px] pb-2 border-gray-400 w-[95%]'>
                                <input type="text" placeholder='eg. Manali, Jodhpur, Jaipur, etc.' className='border-none w-80 outline-none placeholder:font-semibold ' />
                            </div>
                        </div>
                        <div className='flex'>
                        <div>
                            <h1 className='text-gray-400  text-center font-bold'>CHECK IN</h1>
                            <div className='border-b-[1px] pb-2 border-gray-400'>
                                <input type="date" placeholder='Mon 30 Oct' className='border-none outline-none placeholder:font-semibold ' />
                            </div>
                        </div>
                        <div>

                            <h1 className='text-gray-400  text-center font-bold'>CHECK OUT</h1>
                            <div className='border-b-[1px] pb-2 border-gray-400 '>
                                <input type="date" placeholder='Tue 31 Oct' className='border-none outline-none placeholder:font-semibold ' />
                            </div>
                        </div>
                        </div>
                        <div className='h-full absolute right-5 top-[55%] '>
                        <button className='bg-red-500 text-white h-10 w-28 rounded-lg'>Book Now</button>
                        </div>
                    </div>


                </div>
            </div>
            <div className='text-4xl font-semibold mt-32 px-10'>
                What's <span className='text-red-500'>New</span>
                <Trips />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Experiences <span className='text-red-500'>in</span> South India
            <South />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Experiences <span className='text-red-500'>in</span> Nov & Dec
            <Month />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Back <span className='text-red-500'>In</span> Action
            <Action />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Geographies
            <Geographics />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Autumn <span className='text-red-500'>Retreats</span>
                <Retreat />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Budget <span className='text-red-500'>Friendly</span>
                <Budget />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Offbeat  <span className='text-red-500'>Gems</span>
                <Gems />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Awards <span className='text-red-500'>and</span> Media
            <Awards />
            </div>

            <div className='text-4xl font-semibold mt-12 px-10'>
            Latest <span className='text-red-500'>Reads</span>
            <Reads />
            </div>

           
        </>
    )
}
export default App;