'use client'
import axios from "axios"
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/utils/slices/userSlice";
import useAuthorise from "../auth/hooks/useAuthorise";
const Profile = () => {
    const router = useRouter();

    const dispatch = useDispatch();

    const user = useSelector(store => store.user.user)

    const handleLogout = async () => {
        const res = await axios.get('/api/users/auth/logout');
        res.data.success && router.push("/");
        dispatch(logout({
            name: "",
            email: "",
            isLoggedIn: false
        }))
    }
    useAuthorise()
    return (
        <div>
            {
                user.isLoggedIn ?
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    : <p>Loading</p>
            }
            <button onClick={() => handleLogout()}>logout</button>
        </div>
    )
}

export default Profile