import { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { IoMoonOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoSunny } from "react-icons/io5";
import CartDetails from '../cine/CartDetails';
import { MovieContext, ThemeContext } from '../context';

const Header = () => {
const [showCart,setShowCart] = useState(false);
const {cartData} = useContext(MovieContext);
const {darkMode,setDarkMode} = useContext(ThemeContext);

  return (
    <>
    {showCart && <CartDetails onClose={()=>setShowCart(false)} />}
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
  
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <MdNotificationsNone />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg  backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setDarkMode(!darkMode)}
            >
              {
                darkMode ? <IoSunny/> :  <IoMoonOutline/>
              }
            
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setShowCart(true)}
            >
              <RiShoppingCartLine />
              {cartData.length > 0 && <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]'>{cartData.length}</span>}
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
