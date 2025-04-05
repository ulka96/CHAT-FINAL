import { useSelector } from "react-redux";



const SingleUser = ({user, onClick}) => {

 const selectedUser = useSelector((state) => state.user.selectedUser) 
 const onlineUsersIds = useSelector(state => state.user.onlineUsersIds)

 const isOnline = onlineUsersIds.includes(user._id)



  return (
    <div
      onClick={onClick}                               //
      className={`flex justify-between p-5 border-b ${selectedUser._id === user._id ? "bg-gray-300" : "bg-gray-50"} border-gray-300 cursor-pointer`}
    >
      {/* Left */}
      <div className="flex gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={user.profilePic}
            alt="profile"
            className="h-full w-full"
          />
        </div>
        <div>
          <h4 className="text-sm text-black mb-1">{user.fullName}</h4>
          <p className="text-xs text-gray-400">{isOnline? "Online" : "Offline"}</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-start items-end">
        <p className="text-xs text-gray-400 mb-2">10:27 AM</p>
        <p className={`text-right h-4 w-4 text-white ${isOnline? "bg-green-500" : "bg-red-500"} rounded-full text-[9px] flex items-center justify-center`}></p>
      </div>
    </div>
  );
};

export default SingleUser;
