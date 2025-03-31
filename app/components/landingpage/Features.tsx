import { Link, PackageSearch, WindIcon } from 'lucide-react';
import React from 'react';

const Features = () => {
    return (
        <div className='bg-zinc-900 my-8 p-8 sm:p-12 md:p-16 py-12 sm:py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border rounded-xl'>
            <div className='flex flex-col gap-6'>
                <p className='text-3xl sm:text-4xl md:text-4xl font-bold text-center md:text-left'>
                    Powerful Dashboard For Complete Control
                </p>
                <p className='text-center md:text-left text-zinc-300'>
                    Our intuitive dashboard gives you a comprehensive view of all your event metrics in one place. Monitor ticket sales, attendance rates, and revenue in real-time.
                </p>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-row items-center gap-4 sm:gap-6'>
                        <div className='border  p-3 rounded-xl bg-blue-700'>
                            <PackageSearch className='text-sm' />
                        </div>
                        <div>
                            <p className='text-xl sm:text-2xl font-bold'>Real-time Performance Metrics</p>
                            <p className='text-zinc-300 text-xs'>Monitor sales, attendance, and engagement as they happen.</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-4 sm:gap-6'>
                        <div className='border  p-3 rounded-xl bg-purple-700'>
                            <PackageSearch className='text-sm' />
                        </div>
                        <div>
                            <p className='text-xl sm:text-2xl font-bold'>Customizable Widgets</p>
                            <p className='text-zinc-300 text-xs'>Tailor your dashboard with the metrics that matter most to you.</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-4 sm:gap-6'>
                        <div className='border  p-3 rounded-xl bg-green-700'>
                            <PackageSearch className='text-sm' />
                        </div>
                        <div>
                            <p className='text-xl sm:text-2xl font-bold'>Exportable Reports</p>
                            <p className='text-zinc-300 text-xs'>Generate and share comprehensive reports with stakeholders.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <img
                    src="/landingpage.png"
                    alt="features"
                    className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'
                />
            </div>
        </div>
    );
};

export default Features;