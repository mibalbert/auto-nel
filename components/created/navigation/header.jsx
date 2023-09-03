import React from 'react'

const Header = ({title, img}) => {
  return (
    <section className='w-full h-24 flex items-center justify-between'>
      <div className='w-[90%] mx-auto flex justify-start'>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>  
    </section>
  )
}

export default Header