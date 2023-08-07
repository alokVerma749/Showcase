import { login } from "@/utils/slices/userSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAuthorise = () => {
    console.log("it is here")
    const dispatch = useDispatch()
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const res = await axios.get('/api/users/auth/authorise');
            const { name, email } = res.data
            res ? dispatch(login({
                name: name,
                email: email,
                isLoggedIn: true
            })) : dispatch(login({
                name: "",
                email: "",
                isLoggedIn: false
            }))
        } catch (error) {
            console.log(error.message)
            dispatch(login({
                name: "",
                email: "",
                isLoggedIn: false
            }))
        }
    }
}

export default useAuthorise;