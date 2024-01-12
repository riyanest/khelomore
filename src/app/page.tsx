// 'use client';
// import Image from 'next/image'
import Carousel from '@/app/components/carousel'
export default function Home() {
  return (
    <>
      <div className='w-full h-60 '>
      <Carousel/> 
      <input type="search"className="m-2 w-full h-[43px] bg-white rounded-[11px] shadow border border-neutral-200"></input>
      <div className=" m-2 ml-4 mr-4  w-full h-[43px] flex ">
      <div className="mr-2 w-1/3 h-[43px] bg-white rounded-[11px] shadow border border-neutral-200"></div>
      <div className="mr-2 w-1/3 h-[43px] bg-white rounded-[11px] shadow border border-neutral-200"></div>
      <div className="mr-2 w-1/3 h-[43px] bg-white rounded-[11px] shadow border border-neutral-200"></div>
      </div>
      </div>
    </>
  )
}
