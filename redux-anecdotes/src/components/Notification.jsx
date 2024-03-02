import { useSelector } from "react-redux"

const Notification = () => {

  const notification = useSelector(({ message }) => {
    return message
  })

  const style = {
    display: notification === 'Hello there!' ? 'none' : 'block',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification