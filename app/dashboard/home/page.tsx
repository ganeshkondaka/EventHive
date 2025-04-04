'use client';

import { EVENTTYPE } from '@/app/database/models/eventmodel';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<EVENTTYPE[]>([]);
  const [visibleCount, setVisibleCount] = useState(6); // State to control the number of visible events

  const router = useRouter()

  useEffect(() => {
    const getAllEvents = async () => {
      const token = localStorage.getItem('event_token');
      if (!token) {
        console.log('No token found, redirecting to login...');
        router.push('/login');
        return
      }

      try {
        setLoading(true);

        const headers = { Authorization: token };
        const allEvents = await axios.get('/api/dashboard/get_allevents', { headers });

        // console.log('allEvents from a page :', allEvents.data);
        const auth: boolean = allEvents.data.auth;
        // console.log('auth==false', auth == false)
        if (auth == false) {
          router.push('/login')
          return
        }

        // console.log('auth from a page :', auth);

        setLoading(false);
        setEvents(allEvents.data.all_events);


      } catch (error) {
        setLoading(false);
        console.log('Failed to get events:', error);
        router.push('/login'); // Redirect to login on error

      } finally {
        setLoading(false);
      }
    };

    getAllEvents();
  }, [router]);

  const handleShowMore = () => {
    setVisibleCount(events.length); // Show all events
  };

  return (
    loading ? (
      <div className="w-full h-screen flex justify-center items-center">
        <CgSpinner className="animate-spin text-4xl" />
      </div>
    ) : (
      <div className="w-full mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-evenly">
          {events.slice(0, visibleCount).map((item, index) => (
            <div
              className="flex flex-col m-4 text-xs gap-4 p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-transform duration-300"
              key={index}
            >
              <img
                src="/1.png"
                alt="events"
                className="rounded-2xl h-40 w-full object-cover object-top"
              />
              <div className="flex gap-2">
                <p className="px-3 py-1 bg-green-900 rounded-full">{item.price}</p>
                <p className="px-3 py-1 bg-blue-500 rounded-full">{item.feild}</p>
              </div>
              <div className="text-green-300">{item.time}</div>
              <div className="text-lg font-bold">{item.title}</div>
              <div className='flex justify-between pt-6'>
                <div className="text-yellow-400 border border-yellow-400 rounded-lg px-3 flex items-center justify-center ">{item.organizer}</div>
                <Link
                  href={`/dashboard/event/${item._id}`}
                  className="animate-pulse text-zinc-200 text-4xl font-bold scale-95 hover:scale-100"
                >
                  ⇨
                </Link>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < events.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-6 py-2  text-white rounded-lg border border-yellow-600 hover:bg-white hover:text-black transition duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default Page;