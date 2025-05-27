import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

 const DropdownLinks = [
   {
     id: 1,
     name: "Trending Products",
     link: "/#",
   },
   {
     id: 2,
     name: "Best Selling",
     link: "/#",
   },
   {
     id: 3,
     name: "Top Rated",
     link: "/#",
   },
 ];

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200 relative z-40">


      {/* UPPER NAVBAR */}


      <div className="bg-primary/10 py-2 ">
        <div className="container flex justify-between items-center">
          <div>
            <a className="font-bold text-2xl sm:text-3xl flex gap-2" href="">
              <img className="w-10 uppercase" src={Logo} alt="Logo" />
              <span className="dark:text-white text-textPrimary font-bold">
                BuyBest
              </span>
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                className=" w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
                type="text"
                placeholder="Search"
              />
              <IoMdSearch className="absolute text-gray-500 group-hover:text-primary dark:group-hover:text-[#22b37e] top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              className="bg-gradient-to-r from-[#228cb3] to-[#22b37e] transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
              onClick={handleOrderPopup}
            >
              <span className="group-hover:block hidden transition-all duration-200  ">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer transition-all duration-200" />
            </button>
            {/* <Darkmode Switch /> */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>



      {/* LOWER NAVBAR */}



      <div className="flex justify-center font-thin">
        <ul className="sm:flex hidden  items-center gap-4">
          {Menu.map((data) => (
            <li  key={data.id}>
              <a
                className="inline-block px-4 hover:text-[#317860] duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* dropdown and links */}
          <li  className="group relative cursor-pointer">
            <a className="flex items-center gap-[2px] py-2" href="">Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate=180" />
              </span>
            </a>
            <div className="absolute bg-white z-[9999] hidden group-hover:block w-[170px] rounded-md  p-2 text-black shadow-md">
              <ul >
              {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                      href={data.link}
                      
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
