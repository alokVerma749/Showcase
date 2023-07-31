'use client'
import axios from "axios"
const Profile = () => {
    const handleLogout = async () => {
        const res = await axios.get('/api/users/auth/logout')
    }
    return (
        <div>
            <button onClick={() => handleLogout()}>logout</button>
        </div>
    )
}

export default Profile