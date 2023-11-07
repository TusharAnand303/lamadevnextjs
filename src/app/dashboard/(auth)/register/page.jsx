import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col h-screen gap-5 -mt-10'>
    <h1 className='text-3xl font-bold'>Create an Account</h1>
    <p className='font-semibold text-gray-400'>Please sign-up to see dashboard</p>
    <input type="text" placeholder='Username' className='bg-transparent border border-gray-200 rounded-md w-[350px] h-[50px] pl-2 outline-none' />
    <input type="email" placeholder='Email' className='bg-transparent border border-gray-200 rounded-md w-[350px] h-[50px] pl-2 outline-none' />
    <input type="password" placeholder='Password' className='bg-transparent border border-gray-200 rounded-md w-[350px] h-[50px] pl-2 outline-none' />
    <button className='w-[350px] rounded-lg bg-[#00D487] active:bg-[#24996e] h-[50px] text-black font-semibold uppercase'>Register</button>
    <p>- OR -</p>
    <Link href='/dashboard/login'>Login with an existing account !</Link>
    </div>
    </>
  )
}

export default Register
