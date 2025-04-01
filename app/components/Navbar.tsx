'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='w-full . p-4'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                {/* Logo */}
                <div className='flex items-center'>
                    <img src='/logo2.png' alt='logo' width={50} height={50} />
                    <p className='text-2xl font-bold px-2'>EventHive</p>
                </div>

                {/* Mobile Menu Button */}
                <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu */}
                <div className='hidden md:flex space-x-6 items-center'>
                    {pathname === '/' && (
                        <Link
                            href='/login'
                            className='px-5 py-1 rounded-lg border border-purple-700 hover:bg-purple-700 hover:text-white text-xs md:text-lg'>
                            Login
                        </Link>
                    )}
                    {pathname.includes('/dashboard') && (
                        <>
                            <Link href='/dashboard/home' className='hover:text-gray-600'>Home</Link>
                            <Link href='/dashboard/create-event' className='hover:text-gray-600'>Create Event</Link>
                            <Link href='/dashboard/myprofile' className='hover:text-gray-600'>My Profile</Link>
                            <div className='bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-xl'>G</div>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden flex flex-row text-[-10px] realtive px-2 items-center space-y-4 pt-4'>
                    {pathname === '/' && (
                        <Link
                            href='/login'
                            className='px-5 py-2 rounded-lg border border-purple-700 hover:bg-purple-700 hover:text-white'>
                            Login
                        </Link>
                    )}
                    {pathname.includes('/dashboard') && (
                        <div className=' space-x-2 py-2 text-[12px] flex flex-col absolute right-0'>
                            <Link href='/dashboard/home' className='hover:text-gray-600'>Home</Link>
                            <Link href='/dashboard/create-event' className='hover:text-gray-600'>Create Event</Link>
                            <Link href='/dashboard/myprofile' className='hover:text-gray-600'>My Profile</Link>
                            <div className='bg-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm '>G</div>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
