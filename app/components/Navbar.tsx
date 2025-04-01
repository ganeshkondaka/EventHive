'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';import React from 'react'

const Navbar = () => {
    const pathname = usePathname(); // Use usePathname to get the current route

    return (
        <div>
            {
                pathname == '/' &&
                <div className='pt-4 flex justify-between items-center'>
                    <div className='flex items-center '>
                        <img src="/logo2.png" alt="logo" width={50} height={50} />
                        <p className='text-2xl font-bold px-2'>EventHive</p>
                    </div>
                    <Link
                        href={'/login'}
                        className='px-5 py-1 rounded-lg border border-purple-700 hover:bg-purple-700 hover:text-white text-xs md:text-lg'>Login</Link>
                </div>
            }
            {
                pathname.includes('/dashboard') &&
                <div className='pt-4 flex justify-between items-center'>
                    <div className='flex items-center '>
                        <img src="/logo2.png" alt="logo" width={50} height={50} />
                        <p className='text-2xl font-bold px-2'>EventHive</p>
                    </div>
                    <div>
                        <Link
                            href={'/dashboard/home'}
                            className='px-5 py-1  hover:text-gray-600 text-xs md:text-lg'>Home
                        </Link>
                        <Link
                            href={'/dashboard/create-event'}
                            className='px-5 py-1  hover:text-gray-600 text-xs md:text-lg'>Create Event
                        </Link>
                        <Link
                            href={'/dashboard/myprofile'}
                            className='px-5 py-1  hover:text-gray-600 text-xs md:text-lg'>My Profile
                        </Link>
                    </div>
                    <div>
                    <p className='bg-blue-800 w-8 h-8 rounded-full text-black flex items-center justify-center text-xl'>🙂</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar