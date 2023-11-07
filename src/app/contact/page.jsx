import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <>
    <h1 className='text-center text-5xl font-bold mt-5 text-[#00D487]'>Let's Keep in Touch</h1>
    <div className='flex justify-center items-center gap-20  mt-[100px]'>
    <Image
    src='/contact.svg'
    width={400}
    height={400}
    alt='contact page'
    />
    <div className='flex flex-col justify-center items-center gap-10'>
      <input type="text" placeholder='Name' className='bg-transparent border border-gray-200 w-[300px] h-[50px] pl-2 rounded-lg' />
      <input type="email" placeholder='Email' className='bg-transparent border border-gray-200 w-[300px] h-[50px] pl-2 rounded-lg' />
      <input type="text" placeholder='Message' className='bg-transparent border border-gray-200 w-[300px] h-[50px] pl-2 rounded-lg' />
      <button className='bg-[#00D487] text-black rounded-lg active:bg-[#24946b] px-6 py-2 font-semibold'>Send Message</button>
    </div>
    </div>
    </>
  )
}

export default Contact
