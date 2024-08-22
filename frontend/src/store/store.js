import {configureStore} from "@reduxjs/toolkit"

// Slices

import userSlice from "../slices/users.slice"
import messagesSlice from "../slices/messages.slice"

const store = configureStore({
reducer: {
       user: userSlice.reducer,
       messages: messagesSlice.reducer
}
})

export default store