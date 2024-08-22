
import SingleMessage from './SingleMessage'

// React hooks
import { useEffect, useRef } from 'react'

// Redux hooks
import { useSelector, useDispatch } from 'react-redux'

// Actions
import { setMessages } from '../slices/messages.slice'

const Messages = () => {

const selectedUser = useSelector((state) => state.user.selectedUser)  
const messages = useSelector((state) => state.messages.messages)

const scrollRef = useRef()

const dispatch = useDispatch()

const getMessages = async() => {

  const response = await fetch(`/messages/${selectedUser._id}`)
  const data = await response.json()

  dispatch(setMessages(data))

}

useEffect(() => {
 scrollRef.current.scrollIntoView({behavior: "smooth"})

}, [messages])

useEffect(() => {
  getMessages()
}, [selectedUser])

  return (
    <div className="bg-[#f6f6f6] p-5 pb-0 rounded-2xl flex-1 overflow-scroll">
     {
      messages.map((message) => {
        return   <SingleMessage key={message._id} message={message} />
      })}
     
     <div ref={scrollRef}></div>
    
  </div>
  )
}

export default Messages
