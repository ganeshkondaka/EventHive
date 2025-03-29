import React from 'react'

interface EVENTS {
    img_link: string;
    price: string;
    field: string;
    date_time: string;
    event_title: string;
    hostby: string;
}
const Eventscards = () => {

    const events: EVENTS[] = [
        {
            "img_link": "/1.png",
            "price": '$150',
            "field": "Technology",
            "date_time": "2025-04-01T10:00:00",
            "event_title": "Tech Innovations Expo",
            "hostby": "TechWorld Inc."
        },
        {
            "img_link": "/2.png",
            "price": 'free',
            "field": "Artificial Intelligence",
            "date_time": "2025-04-05T14:00:00",
            "event_title": "AI & Machine Learning Summit",
            "hostby": "FutureTech Solutions"
        },
        {
            "img_link": "/3.png",
            "price": '$180',
            "field": "Cybersecurity",
            "date_time": "2025-04-10T09:00:00",
            "event_title": "Global Cybersecurity Conference",
            "hostby": "SecureNet Alliance"
        },
        {
            "img_link": "/4.png",
            "price": '$170',
            "field": "Blockchain",
            "date_time": "2025-04-15T11:00:00",
            "event_title": "Blockchain Innovations Forum",
            "hostby": "CryptoWorld Network"
        },
        {
            "img_link": "/5.png",
            "price": '$75',
            "field": "Environment & Tech",
            "date_time": "2025-04-20T16:00:00",
            "event_title": "GreenTech Revolution",
            "hostby": "EcoTech Initiatives"
        },
        {
            "img_link": "/6.png",
            "price": 'free',
            "field": "Technology",
            "date_time": "2025-04-25T13:00:00",
            "event_title": "Future of Tech Conference",
            "hostby": "NextGen Leaders"
        }
    ]

    return (
        <div className='grid grid-cols-3 justify-evenly '>
            {
                events.map((item, index) => (
                    <div
                        className='flex flex-col m-4 text-xs gap-4 p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-transform duration-300'
                        key={index}
                    >
                        <img src={item.img_link} alt="events" className="rounded-2xl h-40 w-full overflow-hidden object-cover object-top" />
                        <div className='flex gap-2'>
                            <p className='px-3 py-1 bg-green-900 rounded-full'>{item.price}</p>
                            <p className='px-3 py-1 bg-zinc-600 rounded-full'>{item.field}</p>
                        </div>
                        <div className='text-green-300'>{item.date_time}</div>
                        <div className='text-lg font-bold'>{item.event_title}</div>
                        <div className='text-yellow-400 pt-10'>{item.hostby}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Eventscards
