import { useState } from "react";
import logo from "../../assets/digiwezologo.png";
function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const openNavbar = () => {
    setIsNavBarOpen((prev) => !prev);
  };
  return (
    <header className="w-full ">
      <div className="h-[80px] fixed top-0 z-[9999] bg-white shadow-lg w-full flex justify-between items-center px-4">
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
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        {/* mobile navbar */}
        {isNavBarOpen ? (
          <nav className="lg:hidden w-[55%] bg-[#FFC004] h-[100vh] top-[80px] fixed left-0 z-[9999] flex  justify-start items-center">
            <ul className="lg:hidden flex justify-center gap-4 items-start mt-[200px] h-full ml-[40px]">
              <li className="text-white gap-8 flex text-xl font-weight-700 flex-col text-left">
                <a href="/about">About Us</a>
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        ) : null}
        <div className="flex gap-6 justify-center items-center">
          <button className="bg-[#FFC004] px-12  py-[7px] rounded-lg font-[600] hidden lg:block">
            Login
          </button>
          {/* menubar */}
          <div className="lg:hidden" onClick={openNavbar}>
            {!isNavBarOpen ? (
              <>
                <div className="w-[25px] h-[3px] bg-[#3EB0FD]"></div>
                <div className="w-[25px] h-[3px] bg-[#3EB0FD] mt-[5px] mb-[5px]"></div>
                <div className="w-[25px] h-[3px] bg-[#3EB0FD]"></div>
              </>
            ) : (
              <p className="text-black text-3xl">x</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
