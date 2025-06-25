import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux'

const Mainbar = () => {
  const sideMenu =useSelector((store)=>store.menu.isMenuOpen);
  return (
    <div  className={`col-span-10   bg-black  flex flex-col h-full overflow-hidden   ${!sideMenu ? 'ml-16' : 'ml-0'}`}>
      <ButtonList/>
       <div className="overflow-y-auto flex-1 hide-scrollbar">
        <VideoContainer />
      </div>
    </div>
  )
}

export default Mainbar
