import React from 'react'




// Components
import Logo from './Logo';
import NavMenu from './NavMenu';
import Profile from './Profile';


const Sidebar = () => {
  return (
    <div className="bg-black w-24 h-full rounded-3xl flex flex-col items-center justify-between p-6">

    <Logo/>
    <NavMenu/>
    <Profile/>



  </div>
  )
}

export default Sidebar
