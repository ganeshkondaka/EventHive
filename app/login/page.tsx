'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg'; // Import a spinner icon

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false); // State to track loading

    const router = useRouter();

    const handle_submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log('email and password is:', email, password);
        setLoading(true); // Set loading to true when login starts
        try {
            const response = await axios.post('/api/login', { email, password });
            // console.log('response:', response.data);
            await localStorage.setItem('event_token', response.data.token);
            router.push('/dashboard/home');
        } catch (error) {
            console.log('Failed to login user:', error);
        } finally {
            setLoading(false); // Set loading to false after login completes
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
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
                        className={`w-full px-4 py-2 font-bold text-white rounded-lg transition duration-300 ${loading ? 'bg-violet-500 cursor-not-allowed' : 'bg-violet-600 hover:bg-violet-700'}`
                        }
                        disabled={loading} // Disable the button while loading
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <CgSpinner className="animate-spin mr-2" size={20} />
                                Logging in...
                            </div>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                <p className="text-sm text-center text-zinc-400">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-violet-500 hover:underline">
                        Signup
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;