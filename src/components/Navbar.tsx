import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const Navbar = () => {
  return (
      <nav
          className='sticky top-0 w-full border-b bg-background/95 backdrop-blur
           supports-[backdrop-filter]:bg-background/60 z-50'
      >
          <div className='max-w-7xl mx-auto px-4'>
              <div className='flex flex-row items-center justify-between h-16'>
                  <div className='flex items-center'>
                      <Link href={"/"} className='text-xl font-bold text-primary font-mono tracking-wider'>Sociality</Link>
                  </div>
                  <MobileNavbar />
                  <DesktopNavbar/>
              </div>
        </div>
      </nav>
  )
}

export default Navbar