// Components
import Sidebar from "../Components/Sidebar";
import Contacts from "../Components/Contacts";
import Chats from "../Components/Chats";

// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Cookie
import Cookies from "js-cookie";

// Router
import { useNavigate } from "react-router-dom";

// Socket

import useSocket from "../hooks/useSocket";

// Actions
import {setOnlineUsersIds} from "../slices/users.slice.js"

const Home = () => {

const navigate = useNavigate()

const selectedUser = useSelector((state) => state.user.selectedUser)  

const token = Cookies.get("jwt")
const dispatch = useDispatch();


const socket = useSocket()

useEffect(() => {
  socket.on("getOnlineUsers", (onlineUserIds) => {
    
    dispatch(setOnlineUsersIds(onlineUserIds))
    
  } )

  return () => socket.disconnect("getOnlineUsers")
}, [socket, dispatch] )

// socket.emit("onlineUser", 1)


useEffect(() => {
  if(!token) {
    navigate("/sign-in")
  }
}, [])



  return (
<div className="h-[600px] w-full flex gap-2">

<Sidebar/>

<div className="flex-1 grid grid-cols-12 gap-2">

<Contacts/>

{selectedUser._id && <Chats/>}

        </div>
      </div>

  );
};

export default Home;