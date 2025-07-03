import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    token: "",    
    email: "",
    user: null,
    user_id: null,
    error: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {        
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
            state.user_id = action.payload.user_id;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
            state.email = "";
            state.user_id = "";
        },        
    }
})

export const { logIn, signOut } = authSlice.actions

export default authSlice.reducer