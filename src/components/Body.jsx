import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Body = () => {
  const location = useLocation();
  const isWatchPage = location.pathname === '/watch';
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Header />

      <div className={`${isWatchPage ? 'relative' : 'grid grid-cols-12'} h-[calc(100vh-56px)]`}>
        
        {isWatchPage ? (
          isMenuOpen && (
            <div className="absolute z-10 bg-black h-full w-60">
              <Sidebar />
            </div>
          )
        ) : (
          <Sidebar />
        )}

      
        <div
          className={`${
            isWatchPage ? 'w-full' : 'col-span-10'
          } overflow-auto`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;



