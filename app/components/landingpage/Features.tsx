import { Link, PackageSearch, WindIcon } from 'lucide-react'
import React from 'react'

const Features = () => {
    return (
        <div className=' bg-zinc-900 my-8 p-16 py-24 grid grid-cols-2 gap-6 items-center border rounded-xl'>
            <div className='flex flex-col gap-6 '>
                <p className='text-5xl font-bold'>Powerful Dashboard For Complete Control</p>
                <p>Our intuitive dashboard gives you a comprehensive view of all your event metrics in one place. Monitor ticket sales, attendance rates, and revenue in real-time</p>
                <div className='flex flex-row items-center justify-center gap-6'>
                    <div className='border border-white p-3 rounded-xl'><PackageSearch className='text-sm'></PackageSearch></div>
                    <div>
                        <p className='text-2xl font-bold'>Real-time Performance Metrics</p>
                        <p>Monitor sales, attendance, and engagement as they happen.</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-6'>
                    <div className='border border-white p-3 rounded-xl'><PackageSearch className='text-sm'></PackageSearch></div>
                    <div>
                        <p className='text-2xl font-bold'>Real-time Performance Metrics</p>
                        <p>Monitor sales, attendance, and engagement as they happen.</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-6'>
                    <div className='border border-white p-3 rounded-xl'><PackageSearch className='text-sm'></PackageSearch></div>
                    <div>
                        <p className='text-2xl font-bold'>Real-time Performance Metrics</p>
                        <p>Monitor sales, attendance, and engagement as they happen.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="/landingpage.png" alt="features" />
            </div>
        </div>
    )
}

export default Features