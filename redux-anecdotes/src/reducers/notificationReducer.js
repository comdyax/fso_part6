import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Hello there!',
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

export const setNotification = (message, time) => {
    return dispatch => {
        dispatch(createMessage(message))
        setTimeout(() => {
            dispatch(removeMessage(message))
        }, time * 1000)
    }
}

export default messageSlice.reducer