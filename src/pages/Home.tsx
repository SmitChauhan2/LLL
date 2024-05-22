import React from 'react'
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import { Services } from '../components/Services';
import { TechStack } from '../components/TechStack';
export const Home = () => {
  return (
    <>
      <div className=' pt-20 flex flex-col xl:flex-row xl:ml-12'>
        <div className='p-1'>
          <img className='w-full h-80 xl:max-w-[700px] rounded-3xl mb-2' src={banner1} alt="" />
          <img className='w-full h-80 xl:max-w-[500px] rounded-3xl mb-2' src={banner2} alt="" />
        </div>
        <div className='p-1'>
          <h1 className='text-4xl xl:text-6xl font-bold text-left px-12'>Elevating Brands through Digital <span className='text-green-500'>Revolution</span></h1>
          <div className='flex flex-col xl:flex-row pt-10'>
            <img className=' w-full h-80 xl:max-w-[400px] xl:mr-12 mb-6 xl:mb-0 rounded-3xl' src="https://th.bing.com/th/id/OIP.JDSJm8Ib80dwUuskJlBBoQHaE8?w=283&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <div className='p-12 flex flex-col justify-center space-y-8'>
              <h2 className='text-lg xl:text-xl text-left'>Embrace innovation with our <span className='text-green-500'>precision-crafted software</span> solutions, lifting your business with elegance & efficiency.</h2>
              <button className='bg-green-700 text-white text-2xl rounded-2xl px-6 xl:w-[240px] text-left'>Get Quotation</button>
            </div>
          </div>
        </div>
      </div>
      <TechStack></TechStack>
      <Services></Services>
    </>
  )
}
