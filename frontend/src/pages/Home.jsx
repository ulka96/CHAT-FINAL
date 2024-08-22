// Components
import Sidebar from "../Components/Sidebar";
import Contacts from "../Components/Contacts";
import Chats from "../Components/Chats";

// Hooks
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Cookie
import Cookies from "js-cookie";

// Router
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate()

const selectedUser = useSelector((state) => state.user.selectedUser)  

const token = Cookies.get("jwt")

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