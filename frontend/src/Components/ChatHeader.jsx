// Icons
import Search from "../icons/Search";
import Dots from "../icons/Dots";

import { useSelector } from "react-redux";


const ChatHeader = (props) => {

const selectedUser = useSelector((state) => state.user.selectedUser)  

return (
    <div className="bg-[#F6F6F6] rounded-2xl h-20 flex items-center justify-between px-5">
    {/* Left */}
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img
          src={selectedUser.profilePic}
          alt="profile"
          className="h-full w-full"
        />
      </div>

      <div>
        <h4 className="text-sm text-black">{selectedUser.fullName}</h4>
        <p className="text-xs text-gray-400">Offline</p>
      </div>
    </div>

    {/* Right */}
    <div className="flex">
      <div className="space-x-1 border-r border-gray-300 pr-5 mr-5">
        <button className="w-20 h-10 rounded-3xl bg-white border text-sm border-gray-300">
          Profile
        </button>
        <button className="w-20 h-10 rounded-3xl bg-black text-sm text-white">
          Call
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <Search color="black" className="h-5 w-5" />
        </button>
        <button>
          <Dots color="black" className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default ChatHeader
