"use client"

import Link from "next/link";
import { useState } from "react";

const VerifyEmail = () => {
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const handleVerify = async () => {
        try {
            setIsVerifying(true)
            // send email
            const res = true;
            if (res) {
                setIsVerified(true);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsVerifying(false);
        }
    }
    return (
        < div >
            Dear user plaese verify your email by clicking on this <button onClick={handleVerify} className="bg-orange-500 p-2 rounded-md text-gray-50 hover:bg-orange-600" > {isVerifying ? <span>Verify</span> : <span>Verified</span>}</button>
            {
                isVerified && <Link href="/" className="bg-orange-500 p-2 rounded-md text-gray-50 hover:bg-orange-600">Go To Home</Link>
            }
        </div >
    )
}

export default VerifyEmail