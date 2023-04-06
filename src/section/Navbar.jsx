import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="z-10 w-full bg-white flex md:justify-center justify-between items-center p-4 fixed">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="people" className="w-32 cursor-pointer" />
      </div>
      <ul
        className="text-green-700 text-lg md:flex hidden list-none flex-row justify-between 
      items-center flex-initial"
      >
        {[
          "Home",
          "Services",
          "Gallery",
          "Co-traveller",
          "FAQs",
          "Contact Us",
          "Register",
        ].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li>
          <HiMenu />
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenu
            fontSize={28}
            className="text-green-800 md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden
          list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-green-800
          animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              "Home",
              "Services",
              "Gallery",
              "Co-traveller",
              "FAQs",
              "Contact Us",
              "Register",
            ].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
