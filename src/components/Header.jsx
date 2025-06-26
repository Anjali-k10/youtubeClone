import React, { useEffect, useState } from "react";
import youtube from "../assets/youtube.png";
import menu from "../assets/menu.png";
import defaultProfile from "../assets/defaultProfile.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sideSlice";
import { Youtube_Search_Api_Url } from "../utils/constant";
import { catchResults } from "../utils/SearchSlice";

const Header = () => {
  const menuIcon = useSelector((store) => store.menu.isMenuOpen);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleToggleMenu = () => {
    dispatch(toggleMenu(!menuIcon));
  };

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(Youtube_Search_Api_Url + searchQuery);
      const json = await response.json();
      setSuggestions(json[1]);
    dispatch(catchResults({
      [searchQuery]: json[1]
    }))
    } catch (err) {
      console.error("Failed to fetch suggestions", err);
    }
  };

  useEffect(() => {
    // if (!searchQuery) {
    //   setSuggestions([]);
    //   return;
    // }
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
        
      }else{
        getSearchSuggestions()

      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="bg-black shadow-md text-white">
    
      <div className="grid grid-cols-12 items-center px-4 py-2">
      
        <div className="flex col-span-3 items-center">
          <img
            onClick={handleToggleMenu}
            src={menu}
            alt="menu"
            className="w-8 mr-4 rounded-full cursor-pointer hover:bg-gray-800 p-1"
          />
          <img src={youtube} alt="logo" className="w-28" />
        </div>

       
        <div className="col-span-6 flex justify-center relative">
          <div className="w-[500px] relative">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                className="w-full h-10 px-4 bg-black border border-gray-600 text-white rounded-l-full focus:outline-none focus:border-white"
                placeholder="Search"
              />
              <button className="w-16 h-10 bg-gray-800 border border-l-0 border-gray-600 rounded-r-full hover:bg-gray-700">
                🔍
              </button>
            </div>

            
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-4 w-10/12 mt-1 bg-black rounded-lg border border-gray-700 shadow-xl z-50">
                <ul>
                  {suggestions.map((sug, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-sm"
                    >
                      🔍 {sug}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

       
        <div className="col-span-3 flex justify-end">
          <img
            src={defaultProfile}
            alt="profile"
            className="w-10 h-10 rounded-full bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

