import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "message",
    initialState: {
        messages: []
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload
        },
        sendMessage: (state, action) => {
           state.messages.push(action.payload)
        }
    }
})

export const {setMessages, sendMessage} = messagesSlice.actions

export default messagesSlice