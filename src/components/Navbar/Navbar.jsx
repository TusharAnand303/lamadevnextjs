import Link from 'next/link'
import React from 'react'

const Links = [
  {
    id: 1,
    title: "Home",
    url : '/'
  },
  {
    id: 2,
    title: "Portofolio",
    url : '/portofolio'
  },
  {
    id: 3,
    title: "Blog",
    url : '/blog'
  },
  {
    id: 4,
    title: "About",
    url : '/about'
  },
  {
    id: 5,
    title: "Contact",
    url : '/contact'
  },
  {
    id: 6,
    title: "Dashboard",
    url : '/dashboard'
  },
]

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5'>
      <Link href="/" className='text-2xl text-[#00D487] font-semibold'>Blogmania</Link>
      <div className='flex justify-center items-center gap-10'>
        {
          Links.map(link=>(
            <>
            <div>
              <Link href={link.url} key={link.id}>
                {link.title}
              </Link>
            </div>
            </>
          ))
        }
        <button className='bg-[#00D487] active:bg-[#248d66] text-black px-6 py-2 rounded-lg font-semibold'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
