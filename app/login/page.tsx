'use client'

import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handle_submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('emai and password is :', email, password)
        try {
            const response = await axios.post('/api/login', { email, password })
            console.log('response :', response.data)
            await localStorage.setItem("event_token", response.data.token)
        } catch (error) {
            console.log('failed to login user :', error)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center  text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-zinc-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form className="space-y-4" onSubmit={handle_submit}>

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
                        className="w-full px-4 py-2 font-bold text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-zinc-400">
                    Dont have an account?{' '}
                    <a href="/signup" className="text-violet-500 hover:underline">
                        Signup
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;