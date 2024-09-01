
// Components
import SingleUser from "./SingleUser"

// Hooks 
import {useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"

// Slices
import { setUsers, setSelectedUser } from "../slices/users.slice"

const Users = () => {
const dispatch = useDispatch();

const users = useSelector((state) => state.user.users)


const selectUser = (user) => {

  dispatch(setSelectedUser(user))
}

const getUsers = async() =>{

const response = await fetch("/users");
const data = await response.json();

dispatch(setUsers(data.data))                       ////

}

useEffect(() => {
  getUsers();
}, [])



  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
    {
      users.map((user) => {
        return <SingleUser 
                 onClick = { () => selectUser(user)}
                 key= {user._id} 
                 user={user} 
                 />
      })
    }
        
    

  </div>
  )
}

export default Users