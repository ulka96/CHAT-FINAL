import React from "react";

import dateformat, {masks} from "dateformat";

// Redux hooks
import { useSelector } from "react-redux";

const SingleMessage = ({message}) => {

masks.hammerTime = "HH:MM";
const formatted = dateformat(message.createdAt, "hammerTime")  

const selectedUser = useSelector((state) => state.user.selectedUser)  

  return (
    <div 
    className={`${message.receiverId === selectedUser._id ? "text-right" : "text-left"} mb-3`}>
      <div className={`py-2 px-4 mb-1 text-sm inline-block w-auto max-w-sm rounded-xl text-black
       ${message.receiverId === selectedUser._id 
       ? "rounded-tr-none bg-indigo-400" 
       : "rounded-tl-none bg-orange-400"}`}>
        {message.content}
      </div>
      <p className="text-[9px] text-gray-500 text-right">{formatted}</p>
    </div>
  );
};

export default SingleMessage;
