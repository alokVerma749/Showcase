'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Signup = () => {
    const router = useRouter()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [isSending, setIsSending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        submitData();
    }
    const submitData = async () => {
        try {
            const res = await axios.post('/api/users/auth/signup', userData);
            res.data.success && router.push('/auth/login');
        } catch (error) {
            console.log(error);
        } finally {
            setIsSending(false);
            setUserData({
                name: "",
                email: "",
                password: "",
            })
        }
    }
    return (
        <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                <p className="text-sm text-gray-600">Sign up to register your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input type="name" name="name" id="name" placeholder="Alok Verma" value={userData.name} onChange={(e) => setUserData({
                            ...userData,
                            name: e.target.value
                        })} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
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
                            <Link rel="noopener noreferrer" href="/auth/forgotPassword" className="text-xs hover:underline text-gray-600">Forgot password?</Link>
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
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-600 text-gray-50">{isSending ? <span>Registering...</span> : <span>Sign up</span>}
                        </button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Already have an account?
                        <Link href="/auth/login" className="hover:underline text-indigo-600 ">Sign in</Link>
                    </p>
                </div>
            </form >
        </div >
    )
}

export default Signup;