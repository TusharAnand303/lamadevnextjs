import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold mt-10'>Our work</h1>
      {children}
    </div>
  )
}

export default layout
