'use client'

import useEventStore from '@/lib/store';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const params = useParams();
    const event_id = params.event_id
    const [one_event, setone_event] = useState([])

    // console.log('event_id from eventid page',typeof event_id)

    useEffect(() => {
        const get_allevents = async () => {
            try {
                const response = await axios.get(`/api/dashboard/get_an_event`, {
                    params: { event_id },
                })

                console.log('reponse :', response.data.one_event)
            } catch (error) {
                console.log('error from getting one event:', error)
            }

        }

        get_allevents()

    }, [])
    // const events = useEventStore((state) => state.events)
    // console.log('events forn store :', events)

    return (
        <div>
            {
                params.event_id
            }
        </div>
    )
}

export default page