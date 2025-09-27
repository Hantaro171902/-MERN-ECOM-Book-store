import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        <div>
					<Link to="/">
						<FaBars className='size-6 '></FaBars>
					</Link>

					<div>
						<IoSearch className='absolute inline-block left-3 inset-x-3'/>

						<input type='text' placeholder='Search here'
									 className='bg-gray-100 w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'/>
					</div>

				</div>
      </nav>

			<div>
				<FaUser className='size-6'/>
				<button className='hidden sm:block'></button>
				<FaRegHeart className='size-6'/>
			</div>
        
    </header>

  )
}
