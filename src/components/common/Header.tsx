import { useState } from "react";
import logo from "../../assets/digiwezologo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const openNavbar = () => {
    setIsNavBarOpen((prev) => !prev);
  };
  return (
    <header className="w-full">
      <motion.div
        className="h-[80px] fixed top-0 z-[9999] bg-white shadow-lg w-full flex justify-between items-center px-4"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.6,
        }}
      >
        <a href="/" className="flex justify-center items-center">
          <img
            src={logo}
            alt="digiwezo logo"
            className="w-[180px] h-[45px] object-cover object-top"
          />
        </a>
        <nav className="lg:flex hidden">
          <ul className="flex justify-end items-center h-full">
            <li className="text-[#3EB0FD] gap-14 flex items-center text-xl font-weight-700">
              <a href="/about">About Us</a>
              <a href="/services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        {/* mobile navbar */}

        <nav
          className={`lg:hidden w-[75%] bg-[#FFC004] h-[100vh] top-[80px] fixed left-0 z-[9999] flex  justify-start items-center  transition-all duration-[6000] ease-in-out ${
            isNavBarOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul className="lg:hidden flex justify-center gap-4 items-start mt-[200px] h-full ml-[40px]">
            <li className="text-white gap-8 flex text-xl font-weight-700 flex-col text-left">
              <a href="/about">About Us</a>
              <a href="/services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-6 justify-center items-center">
          <button className="bg-[#FFC004] px-12  py-[7px] rounded-lg font-[600] hidden lg:block">
            Login
          </button>
          {/* menubar */}
          <div className="lg:hidden" onClick={openNavbar}>
            {!isNavBarOpen ? (
              <p className="text-[#3EB0FD] text-3xl">
                <FaBars />
              </p>
            ) : (
              <p className="text-[#3EB0FD] text-3xl">
                <FaTimes />
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
