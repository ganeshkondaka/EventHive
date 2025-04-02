'use client';

import { EVENTTYPE } from '@/app/database/models/eventmodel';
import useEventStore from '@/lib/store';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = () => {

  const [events, setevents] = useState<EVENTTYPE[]>([])
  const add_events = useEventStore((state) => state.addEvents)

  const stored_events =  useEventStore((state) => state.events);
  useEffect(() => {
    const get_allevents = async () => {
      const all_events = await axios.get('/api/dashboard/get_allevents')
      // console.log('all_events :', all_events.data.all_events)
      setevents(all_events.data.all_events)

      // add_events(all_events.data.all_events)//adding to store
      // console.log('events from store hime:', stored_events)

    }

    get_allevents()
  }, [])

  return (
    // <div>{JSON.stringify(events)}</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-evenly w-full mt-12'>
      {events.map((item, index) => (
        <div
          className='flex flex-col m-4 text-xs gap-4 p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-transform duration-300'
          key={index}
        >
          <img
            src='/1.png'
            alt="events"
            className="rounded-2xl h-40 w-full object-cover object-top"
          />
          <div className='flex gap-2'>
            <p className='px-3 py-1 bg-green-900 rounded-full'>{item.price}</p>
            <p className='px-3 py-1 bg-blue-500 rounded-full'>{item.feild}</p>
          </div>
          <div className='text-green-300'>{item.time}</div>
          <div className='text-lg font-bold'>{item.title}</div>
          <div className='text-yellow-400 pt-6'>{item.organizer}</div>
          <Link href={`/dashboard/event/${item._id}`} className='animate-pulse text-zinc-200 text-4xl font-bold scale-95 hover:scale-100 w-32 '>⇨</Link>
        </div>
      ))}
    </div>
  )
}

export default page