import { createSlice } from "@reduxjs/toolkit"


const initialState = 'Hello there!'


const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        createMessage(state, action) {
            state = action.payload
            return state
        },
        removeMessage(state, action) {
            if (action.payload === state)
                state = 'Hello there!'
            return state
        },

    }
})

export const { createMessage, removeMessage } = messageSlice.actions
export default messageSlice.reducer