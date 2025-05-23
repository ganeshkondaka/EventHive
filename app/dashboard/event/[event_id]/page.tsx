'use client';

import { EVENTTYPE } from '@/app/database/models/eventmodel';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg'; // Import a spinner icon

const Page = () => {
    const params = useParams();
    const event_id = params.event_id;
    const [one_event, setOneEvent] = useState<EVENTTYPE | null>(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const getEvent = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const response = await axios.get(`/api/dashboard/get_an_event`, {
                    params: { event_id },
                });
                setOneEvent(response.data.one_event);
            } catch (error) {
                console.error('Error fetching event:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        getEvent();
    }, [event_id]);

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <CgSpinner className="animate-spin text-4xl text-violet-500" />
            </div>
        );
    }

    return (
        <div className='flex flex-col md:flex-row p-6 md:p-10 gap-6 md:gap-10 w-full max-w-5xl mx-auto bg-zinc-800 border rounded-xl '>
            <div className='w-full md:w-2/4 flex justify-center'>
                <img src='/4.png' alt='org logo' className='max-w-xs md:max-w-full object-contain rounded-xl' />
            </div>
            <div className='flex flex-col gap-6 w-full md:w-2/4'>
                <h1 className='text-2xl font-bold text-center md:text-left'>{one_event?.title}</h1>
                <div className='flex flex-wrap gap-4 justify-center md:justify-start text-sm'>
                    <p className='text-green-500 font-bold bg-zinc-700 rounded-full px-3 py-1 '>{one_event?.price}</p>
                    <p className='text-zinc-300 bg-zinc-700 rounded-full px-3 py-1'>{one_event?.feild}</p>
                </div>
                <p className='text-red-400 font-bold text-left md:text-left'>By: {one_event?.organizer}</p>
                <button className='px-4 py-2 font-bold hover:scale-105 transition duration-300 hover:bg-yellow-400 hover:text-black bg-yellow-600 rounded-full self-center md:self-start w-full'>Buy Ticket</button>
                <div className='text-left md:text-left'>
                    <div><strong>Time:</strong> {one_event?.time}</div>
                    <div><strong>Place:</strong> {one_event?.place}</div>
                </div>
                <p className='text-blue-300 text-left md:text-left font-bold'>What you'll learn:</p>
                <p className='text-left md:text-left'>{one_event?.description}</p>
                <div className='text-purple-400 text-left md:text-left'>{one_event?.organizer_link}</div>
            </div>
        </div>
    );
};

export default Page;