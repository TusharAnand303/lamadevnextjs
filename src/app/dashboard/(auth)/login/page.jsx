import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen gap-5 -mt-10'>
    <h1 className='text-3xl font-bold'>Login to your Account</h1>
    <p className='font-semibold text-gray-400'>Please Login to see dashboard</p>
    <input type="email" placeholder='Email' className='bg-transparent border border-gray-200 rounded-md w-[350px] h-[50px] pl-2 outline-none' />
    <input type="password" placeholder='Password' className='bg-transparent border border-gray-200 rounded-md w-[350px] h-[50px] pl-2 outline-none' />
    <button className='w-[350px] rounded-lg bg-[#00D487] active:bg-[#24996e] h-[50px] text-black font-semibold uppercase'>Login</button>
    <button className='flex bg-transparent border border-gray-200 h-[50px] justify-center items-center w-[350px] rounded-md gap-5'>
      Login with Google
      <Image
      src='/google.png'
      width={20}
      height={20}
      alt='google icon'
      />
    </button>
      <p>- OR -</p>
    <Link href='/dashboard/register'>Create new account</Link>
    </div>
  )
}

export default Login
