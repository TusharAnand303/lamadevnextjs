"use client"
import Image from 'next/image'
import React from 'react'

const Category = ({params}) => {
  return (
    <div className='text-center text-[#00D487] text-2xl capitalize font-semibold mt-5'>
      <h1>{params.category}</h1>
      <h1 className='mt-5 text-white capatilize text-5xl mb-10'>Creative Portofolio</h1>
      <div className='flex justify-around items-center'>
        <div className='flex flex-col justify-start items-start gap-5'>
        <h1 className='text-5xl'>Sober Work</h1>
        <p className='text-white w-[400px] text-sm text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam magnam, labore deleniti sapiente quibusdam excepturi doloribus numquam aperiam itaque! labore deleniti sapiente quibusdam excepturi doloribus numquam aperiam itaque!</p>
        <button className='bg-[#00D487] text-black px-6 py-2 rounded-md text-sm'>Learn More</button>
        </div>
        <Image src={'/img1.jpg'} alt='sober image' width={300} height={200}/>
      </div>
      <div className='flex justify-around items-center'>
      <Image src={'/img2.jpg'} alt='humans image' width={300} height={200}/>
        <div className='flex flex-col justify-start items-start gap-5'>
        <h1 className='text-5xl'>Humans Work</h1>
        <p className='text-white w-[400px] text-sm text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam magnam, labore deleniti sapiente quibusdam excepturi doloribus numquam aperiam itaque! labore deleniti sapiente quibusdam excepturi doloribus numquam aperiam itaque!</p>
        <button className='bg-[#00D487] text-black px-6 py-2 rounded-md text-sm'>Learn More</button>
        </div>
        
      </div>
      <div className='flex justify-around items-center'>
        <div className='flex flex-col justify-start items-start gap-5'>
        <h1 className='text-5xl'>Nature Work</h1>
        <p className='text-white w-[400px] text-sm text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam magnam, labore deleniti sapiente quibusdam excepturi doloribus numquam aperiam itaque! labore deleniti sapiente quibusdam excepturi doloribus numquam aperiam itaque!</p>
        <button className='bg-[#00D487] text-black px-6 py-2 rounded-md text-sm'>Learn More</button>
        </div>
        <Image src={'/img3.jpg'} alt='nature image' width={300} height={200} className='mb-[100px]'/>
      </div>
    </div>
  )
}

export default Category
