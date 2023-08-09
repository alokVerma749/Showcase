const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            isLoggedIn: false
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = {
                name: action.payload.name,
                email: action.payload.email,
                isLoggedIn: action.payload.isLoggedIn
            }
        },
        logout: (state) => {
            state.user = {
                name: "",
                email: "",
                isLoggedIn: false
            }
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;