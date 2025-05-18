'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
// EventCreateForm.tsx
import React, { useState } from "react";

const initialState = {
    email: "",
    title: "",
    price: "",
    feild: "",
    organizer: "",
    time: "",
    place: "",
    description: "",
    organizer_link: "",
    payment_link: "",
};

const EventCreateForm = ({ onSubmit, loading }: { onSubmit: (data: typeof initialState) => void, loading?: boolean }) => {
    const [form, setForm] = useState(initialState);

    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem('event_token')
        if (!token) {
            console.log('No token found, redirecting to login...');
            router.push('/login');
            return
        }
        const headers = { Authorization: token }

        try {
            const response = await axios.post('/api/dashboard/create_event', { form })
            console.log(response.data)
        } catch (error) {
            console.log('failed create event :', error)
        }
    };

    return (
        <form
            className="bg-zinc-800 p-8 rounded-xl shadow-lg max-w-xl mx-auto space-y-4 text-white"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold mb-4 text-center text-violet-400">Create Event</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="email"
                    name="email"
                    placeholder="Organizer Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    required
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="feild"
                    placeholder="Field"
                    value={form.feild}
                    onChange={handleChange}
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="organizer"
                    placeholder="Organizer Name"
                    value={form.organizer}
                    onChange={handleChange}
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="time"
                    placeholder="Time"
                    value={form.time}
                    onChange={handleChange}
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="place"
                    placeholder="Place"
                    value={form.place}
                    onChange={handleChange}
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="organizer_link"
                    placeholder="Organizer Link"
                    value={form.organizer_link}
                    onChange={handleChange}
                />
                <input
                    className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    type="text"
                    name="payment_link"
                    placeholder="Payment Link"
                    value={form.payment_link}
                    onChange={handleChange}
                />
            </div>
            <textarea
                className="bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                name="description"
                placeholder="Event Description"
                value={form.description}
                onChange={handleChange}
                rows={3}
            />
            <button
                type="submit"
                className={`w-full py-2 mt-2 font-bold rounded-lg transition duration-300 ${loading
                    ? "bg-violet-500 cursor-not-allowed"
                    : "bg-violet-600 hover:bg-violet-700"
                    }`}
                disabled={loading}
            >
                {loading ? "Creating..." : "Create Event"}
            </button>
        </form>
    );
};

export default EventCreateForm;