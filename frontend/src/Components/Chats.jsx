// Components
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import SendMessage from "./SendMessage"

const Chats = (props) => {
  return (
    <div className="h-full col-span-8 flex flex-col gap-2 overflow-y-hidden ">
    <ChatHeader selectedUser = {props.selectedUser}/>
    <Messages/>
    <SendMessage/>

  </div>
  )
}

export default Chats
