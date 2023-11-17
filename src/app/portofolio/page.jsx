import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Portofolio = () => {
  return (
   <div className='flex flex-col justify-center items-center h-screen -mt-12'>
   <div className='flex justuify-center items-center gap-10 -mt-10'>
  <div className='relative'>
  <Link href='/portofolio/sober'>
 <Image
    src="/img1.jpg"
    width={200}
    height={400}
    alt="First image"
    className='border-2 border-white rounded-md grayscale cursor-pointer hover:grayscale-0 hover:scale-110 transition-all duration-300'
    />
    <h1 className='text-[#00D487] font-semibold text-xl absolute bottom-2 right-2 p-2 bg-gray-900/70 rounded-md'>Sober</h1>
 </Link>
  </div>
  <div className='relative'>
 <Link href='/portofolio/humans'>
 <Image
    src="/img2.jpg"
    width={200}
    height={400}
    alt="First image"
    className='border-2 border-white rounded-md grayscale cursor-pointer hover:grayscale-0 hover:scale-110 transition-all duration-300'
    />
    <h1 className='text-[#00D487] font-semibold text-xl absolute bottom-2 right-2 p-2 bg-gray-900/70 rounded-md'>Humans</h1>
 </Link>
  </div>
  <div className='relative'>
  <Link href='/portofolio/nature'>
 <Image
    src="/img3.jpg"
    width={200}
    height={400}
    alt="First image"
    className='border-2 border-white rounded-md grayscale cursor-pointer hover:grayscale-0 hover:scale-110 transition-all duration-300'
    />
    <h1 className='text-[#00D487] font-semibold text-xl absolute bottom-2 right-2 p-2 bg-gray-900/70 rounded-md'>Nature</h1>
 </Link>
  </div>
   
   </div>
   </div>
  )
}

export default Portofolio
