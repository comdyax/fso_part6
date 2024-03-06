import { useContext } from "react"
import { useReducer } from "react"
import { createContext } from "react"



const notificationReducer = (state, action) => {
    switch (action.type) {
        case "NEW":
            state = `You created ${action.payload}`
            return state
        case "VOTE":
            state = `You voted for ${action.payload}`

            return state
        case "REMOVE":
            state = ''
            console.log(state);
            return state
        default:
            return state
    }
}

const AnecContext = createContext()

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(AnecContext)
    return notificationAndDispatch[1]
}

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