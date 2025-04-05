import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        selectedUser: {},
        onlineUsersIds: []
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setOnlineUsersIds: (state, action) => {
            state.onlineUsersIds = action.payload;
        },
        setSelectedUser: (state, action) => {
           state.selectedUser = action.payload
        }
    }
})

export const {setUsers, setSelectedUser, setOnlineUsersIds} = userSlice.actions;

export default userSlice

