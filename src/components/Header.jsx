import React from 'react'
import youtube from '../assets/youtube.png';
import menu from '../assets/menu.png';
import defaultProfile  from '../assets/defaultProfile.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/sideSlice';
const Header = () => {
  const menuIcon=useSelector((store)=>store.menu.isMenuOpen);
  const dispatch = useDispatch();

  const handleToggleMenu=()=>{
   dispatch(toggleMenu(!menuIcon))
  }
  return (
    <div className='grid grid-flow-col bg-black shadow-lg '>
        <div className='bg-black flex  col-span-5 '>
        <img onClick={handleToggleMenu} src={menu} alt='menu' className='w-8  m-4  rounded-full cursor-pointer hover:bg-gray-800 active:bg-gray-900' />
     <img src={youtube} alt='logo' className='w-28  m-4' />
        </div>
        <div className='col-span-6 mt-1'>
            <input type='text' placeholder='' className='w-96 h-10 border-2 border-white text-white border-r-0 rounded-l-full focus:outline-none ' />
           <button className='text-white rounded-r-full w-16 h-10  border-2 border-l-white border-white mt-2' >Search</button>
        </div>
        <div className=' col-span-1 mt-1'>
            <img src={defaultProfile} alt='profile' className='w-10 bg-white h-10 m-2 rounded-full' />
        </div>
    </div>
  )
}
 
export default Header;
