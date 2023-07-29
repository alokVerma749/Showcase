'use client'
import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSending, setIsSending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        sendMessage();
        setMessage({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }
    const sendMessage = async () => {
        try {
            const res = await axios.post('/api/users/contact', message)
            setIsSending(false);
        } catch (error) {
            console.log(error.message)
            setIsSending(false);
        }
    }
    return (
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about our services? Need details about our Business plan? Let us know.</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input value={message.name} onChange={(e) => setMessage({
                            ...message,
                            name: e.target.value
                        })} type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Alok Verma" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input value={message.email} onChange={(e) => setMessage({
                            ...message,
                            email: e.target.value
                        })} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name123@mail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input value={message.subject} onChange={(e) => setMessage({
                            ...message,
                            subject: e.target.value
                        })} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea value={message.message} onChange={(e) => setMessage({
                            ...message,
                            message: e.target.value
                        })} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">{isSending ? <span>Sending..</span> : <span>Send Message</span>}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact