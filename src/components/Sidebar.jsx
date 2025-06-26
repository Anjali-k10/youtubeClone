import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toggleMenu } from '../utils/sideSlice'; 
import youtube from '../assets/youtube.png'; 
import menuIcon from '../assets/menu.png'; 
const Sidebar = () => {
  const menu = useSelector(store => store.menu.isMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const isHome = location.pathname === '/';

 
  if (!menu) return null;

 
  const fixedSidebarClasses = 'col-span-2 bg-black text-white h-[91.2vh] p-4 w-60';

  
  const overlaySidebarClasses = `
    fixed top-0 left-0 z-50 h-full w-60 bg-black text-white p-4
    shadow-lg
  `;


  const overlayBackdrop = (
    <div
      onClick={() => dispatch(toggleMenu(false))}
      className="fixed inset-0 bg-black opacity-50 z-40"
    />
  );

  return (
    <>
      {isHome ? (
    
        <div className={fixedSidebarClasses}>
          <SidebarContent />
        </div>
      ) : (
        
        <>
          {overlayBackdrop}
          <div className=  {overlaySidebarClasses}>
         <div className="flex col-span-3  items-center">
                   <img
                    onClick={() => dispatch(toggleMenu(false))} src={menuIcon}
                     alt="menu"
                     className="w-8 p-1 ml-1 mr-4 rounded-full cursor-pointer hover:bg-gray-800 "
                   />
                   <img src={youtube} alt="logo" className="w-28" />
                 </div>
            <SidebarContent />
          </div>
        </>
      )}
    </>
  );
};

const SidebarContent = () => (
  <>
    <ul className="space-y-2 text-sm border-b border-gray-700 pb-4">
      <Link to="/">
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          🏠 <span>Home</span>
        </li>
      </Link>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        🎬 <span>Shorts</span>
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        📺 <span>Subscriptions</span>
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        👤 <span>You</span>
      </li>
    </ul>

    <ul className="space-y-2 text-sm mt-4">
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        🕒 <span>History</span>
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        📃 <span>Playlists</span>
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        🎥 <span>Your Videos</span>
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        ⏳ <span>Watch Later</span>
      </li>
      <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        ❤️ <span>Liked Videos</span>
      </li>
    </ul>
  </>
);

export default Sidebar;
