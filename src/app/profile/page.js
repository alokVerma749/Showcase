'use client'
import axios from "axios"
import { useRouter } from "next/navigation";
const Profile = () => {
    const router = useRouter();
    const handleLogout = async () => {
        const res = await axios.get('/api/users/auth/logout');
        res.data.success && router.push("/");
    }
    return (
        <div>
            <button onClick={() => handleLogout()}>logout</button>
        </div>
    )
}

export default Profile