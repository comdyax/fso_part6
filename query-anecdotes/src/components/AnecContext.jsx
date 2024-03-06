import { useContext } from "react"
import { useReducer } from "react"
import { createContext } from "react"
import PropTypes from 'prop-types'



const notificationReducer = (state, action) => {
    switch (action.type) {
        case "NEW":
            state = action.payload
            return state
        case "VOTE":
            state = action.payload

            return state
        case "REMOVE":
            if (action.payload === state)
                state = ''
            return state

        case "ERROR":
            state = 'too short, anecdote must have length 5 or more'
            return state
        default:
            return state
    }
}

const AnecContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(AnecContext)
    return notificationAndDispatch[1]
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(AnecContext)
    return notificationAndDispatch[0]
}



export const AnecContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')

    return (
        <AnecContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </AnecContext.Provider>
    )
}

export default AnecContext

AnecContextProvider.propTypes = {
    children: PropTypes.node
}
