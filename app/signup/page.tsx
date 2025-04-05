'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';

const Signup = () => {

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setLoading] = useState(false); // State to track loading

    const router = useRouter()

    const handle_submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log('emai and password is :', username, email, password)
        try {
            setLoading(true)
            const response = await axios.post('/api/signup', { username, email, password })
            // console.log('response :', response.data)
            localStorage.setItem("event_token", response.data.token)
            router.push('/dashboard/home')
        } catch (error) {
            console.log('failed to create user :', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-zinc-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <form className="space-y-4" onSubmit={handle_submit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-4 py-2 mt-1 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Enter your username"
                            onChange={(e) => setusername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 mt-1 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Enter your email"
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 mt-1 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Enter your password"
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 font-bold text-white  rounded-lg hover:bg-violet-700 transition duration-300 ${loading ? 'bg-violet-500 cursor-not-allowed' : 'bg-violet-600 hover:bg-violet-700'}`}
                        disabled={loading}

                    >
                        {
                            loading ? (
                                <div className="flex items-center justify-center">
                                    <CgSpinner className="animate-spin mr-2" size={20} />
                                    Signing up...
                                </div>) : (
                                'Signup'
                            )
                        }
                    </button>
                </form>
                <p className="text-sm text-center text-zinc-400">
                    Already have an account?{' '}
                    <a href="/login" className="text-violet-500 hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;