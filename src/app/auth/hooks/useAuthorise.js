import axios from "axios";

const useAuthorise = async () => {
    try {
        const res = await axios.get('/api/users/auth/authorise');
        return res.data;
    } catch (error) {
        console.log(error.message)
    }
}


export default useAuthorise;