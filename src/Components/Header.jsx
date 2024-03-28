import React from 'react'

export default function NavBar() {
   
  const st = "hover:text-red-500";
  return (
    <div>
      <header className="">
        <nav className="flex flex-row justify-between bg-white border border-solid border-black">
          <div className="">
            <img className="w-24" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt=""/>
          </div>
          <ul className=" flex flex-row justify-evenly gap-2 w-2/5 items-center">
            <li><a className='hover:text-red-500' href="#">Search</a></li>
            <li><a className='hover:text-red-500' href="#">Offer</a></li>
            <li><a className='hover:text-red-500' href="#">Help</a></li>
            <li><a className='hover:text-red-500' href="#">Sign IN</a></li>
            <li><a className='hover:text-red-500' href="#">Cart</a></li>
          </ul>
        </nav>
      </header>
      
    </div>
  )
}
