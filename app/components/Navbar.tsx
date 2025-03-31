import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='pt-4 flex justify-between items-center'>
            <div className='flex items-center '>
                <img src="/logo2.png" alt="logo" width={50} height={50} />
                <p className='text-2xl font-bold px-2'>EventHive</p>
            </div>
            <Link
                href={'/login'}
                className='px-5 py-1 rounded-lg border border-purple-700 hover:bg-purple-700 hover:text-white text-xs md:text-lg'>Login</Link>
        </div>
    )
}

export default Navbar