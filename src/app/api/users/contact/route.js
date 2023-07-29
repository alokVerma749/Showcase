import { NextResponse } from 'next/server'

import { connect } from "@/dbConfig/dbConfig"
connect();

import Contact from '@/models/contactModel';

export async function POST(request) {
    try {
        console.log(request);
        const reqBody = await request.json();
        const { name, email, subject, message } = reqBody;
        if (!name || !email || !subject || !message) {
            return (
                NextResponse.json({
                    status: false,
                    response: "all fields are required"
                }, { status: 400 })
            );
        }
        const contact = new Contact({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        const response = await contact.save();
        console.log(response);
        return NextResponse.json({
            status: true,
            response: "message send successfully",
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            status: false,
            response: error.message
        }, { status: 500 })
    }
}