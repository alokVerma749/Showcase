import { login } from "@/utils/slices/userSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAuthorise = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const res = await axios.get('/api/users/auth/authorise');
            const { success } = res.data
            if (success) {
                dispatch(login({
                    name: res.data.name,
                    email: res.data.email,
                    isLoggedIn: true
                }))
            } else {
                dispatch(login({
                    name: "",
                    email: "",
                    isLoggedIn: false
                }))
            }
        } catch (error) {
            console.log(error)
            dispatch(login({
                name: "",
                email: "",
                isLoggedIn: false
            }))
        }
    }
}

export default useAuthorise;