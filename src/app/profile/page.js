'use client'
import axios from "axios"
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/utils/slices/userSlice";
import { useEffect } from "react";
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

    useEffect(() => {
        fetchAuthoriseData();
    }, [])
    const fetchAuthoriseData = async () => {
        const data = await useAuthorise();
        data ? dispatch(login({
            name: data.name,
            email: data.email,
            isLoggedIn: true
        })) : dispatch(login({
            name: '',
            email: "",
            isLoggedIn: true
        }))
    }

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