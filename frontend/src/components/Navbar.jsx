import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import avartarImg from "../assets/avatar.png";

const navigation = [
	{name: "Dashboard", href:"/dashboard"},
	{name: "Orders", href:"/order"},
	{name: "Cart", href:"/cart"},
	{name: "Check Out", href:"/checkout"},
]

export const Navbar = () => {
	const [isDropdownOpen, setisDropdownOpen] = useState(false)
	console.log(isDropdownOpen);
	const currentUser = true;

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
				{/* left side */}
        <div className='flex items-center md:gap-16 gap-4'>
					<Link to="/">
						<FaBars className='size-6 '></FaBars>
					</Link>

					{/* search input */}
					<div className='relative sm:w-72 w-40 space-x-2'>
						<IoSearch className='absolute inline-block left-3 inset-y-2'/>
						<input type='text' placeholder='Search here'
									 className='bg-gray-100 w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'/>
					</div>
				</div>

					{/* right side */}
				<div className='relative flex items-center md:space-x-3 space-x-2'>
					<div>
						{
							currentUser ? <>
							<button onClick={() => setisDropdownOpen(!isDropdownOpen)}>
								<img src={avartarImg} alt='' className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : '' }`}/>
							</button>
							{/* show dropdown */}
							{
								isDropdownOpen && (
									<div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
										<ul>
											{
												navigation.map((item) => (
													<li key={item.name} onClick={() => setisDropdownOpen}>
														<Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-200'>
															{item.name}
														
														</Link>
													</li>
												))
											}
										</ul>
									</div>
								)
							}
							
							</> : <Link to="/login"><FaUser className='size-6'/></Link> 
						}
					</div>

					<FaUser className='size-6'/>
					<button className='hidden sm:block'>
						<FaRegHeart className='size-6'/>
					</button>

					<Link to='/cart' className='bg-amber-300 p-1 sm:px-6 px-2 flex items-center rounded-sm'>
					
						<FaShoppingCart className=''/>
						<span>0</span>
					</Link>
				</div>
      </nav>

			
        
    </header>

  )
}
