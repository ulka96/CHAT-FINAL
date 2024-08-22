import React from 'react'

// Icons
import Envelope from "../icons/Envelope";
import Chat from "../icons/ChatIcon";
import Bell from "../icons/Bell";
import Trash from "../icons/Trash";

const NavMenu = () => {
  return (
    <ul className="space-y-7">
    <li>
      <Envelope className="h-5 w-5" color="white" />
    </li>
    <li>
      <Chat className="h-5 w-5" color="#FF3406" />
    </li>
    <li>
      <Bell className="h-5 w-5" color="white" />
    </li>
    <li>
      <Trash className="h-5 w-5" color="white" />
    </li>
  </ul>
  )
}

export default NavMenu
