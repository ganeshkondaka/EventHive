'use client';

import { EVENTTYPE } from '@/app/database/models/eventmodel';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {

    const [events, setevents] = useState([])
    
    useEffect(() => {
        const get_allevents = async () => {
            const all_events = await axios.get('http://localhost:3000/api/dashboard/get_allevents')
            console.log('all_events :', all_events.data.all_events)
            setevents(all_events.data.all_events)
        }

        get_allevents()
    }, [])

    return (
        <div>{JSON.stringify(events)}</div>
    )
}

export default page