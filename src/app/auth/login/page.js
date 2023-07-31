"use client"
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        submitData();
    }
    const submitData = async () => {
        try {
            const res = await axios.post('/api/users/auth/login', userData);
            res.data.success && router.push("/profile")
        } catch (error) {
            console.log(error.message);
        } finally {
            setUserData({
                name: "",
                email: "",
                password: "",
            })
        }
    }
    return (
        <div className="flex flex-col mx-auto m-8 max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com"
                            value={userData.email} onChange={(e) => setUserData({
                                ...userData,
                                email: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****"
                            value={userData.password} onChange={(e) => setUserData({
                                ...userData,
                                password: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-600 text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Not have an account yet?
                        <Link href='/auth/signup' className="hover:underline text-indigo-600">Sign up</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;