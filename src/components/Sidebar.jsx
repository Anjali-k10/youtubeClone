import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const menu=useSelector((store)=>store.menu.isMenuOpen);
  if (!menu) return null;
  return (
    <div className='col-span-1 bg-black text-white h-[91.2vh]'>
      <h1>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>You</li>
        </ul>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>
      </h1>
    </div>
  )
}

export default Sidebar
