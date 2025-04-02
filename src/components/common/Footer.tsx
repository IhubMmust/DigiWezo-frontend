import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoImg from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <section className="w-screen footerbg  mt-[30px]">
      <footer className="bg text-body py-8 relative pt-[70px] lg:pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-2 pt-4">
            <div>
              <a href="/">
                {" "}
                <img
                  src={LogoImg}
                  alt="mmust ihub logo image"
                  className="mt-[-50px] sm:w-36 sm:h-36 object-contain  w-28 h-28"
                />
              </a>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-tersiary w-6 h-6"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="truncate">Kakamega, Kenya</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-tersiary w-6 h-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="truncate">
                    <a href={`tel:+254798675706`}>+254796654709</a>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-tersiary w-6 h-6"
                  >
                    <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                    <polyline points="15,9 18,9 18,11"></polyline>
                    <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                    <line x1="6" x2="7" y1="10" y2="10"></line>
                  </svg>
                  <span className="truncate">
                    <a href={`mailto:info@digiwezo.com`}>info@digiwezo.com</a>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className=" flex flex-col ">
                <ul className="flex flex-col ml-4 gap-2">
                  <li className="relative group cursor-pointer">
                    <NavLink to={"/about"}>About Us</NavLink>
                  </li>
                  <li className="relative group cursor-pointer">
                    <NavLink to={"#"}>Services</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
                      Pricing
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to="/contact"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Partner Links</h3>
              <div className=" flex flex-col ">
                <ul className="flex flex-col ml-4 gap-2">
                  <li className="relative group cursor-pointer">
                    <NavLink to={"/mmust.ac.ke"}>MMUST</NavLink>
                  </li>
                  <li className="relative group cursor-pointer">
                    <NavLink to={"/ihub.mmust.ac.ke"}>MmustIhub</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
              <div className="flex flex-row items-center text-center gap-6 text-tersiary">
                <a
                  href="https://x.com/mmustihub?t=GADtVncH6OHulzgYNOfULQ&s=09"
                  target="_blank"
                  className=" "
                >
                  <p className="text-amber-300 rounded-full h-[28px] w-[28px] ">
                    {" "}
                    <FaXTwitter className="hover:scale-125 h-[28px] w-[28px] transition-all duration-100 ease-in-out " />
                  </p>
                </a>
                <a
                  href="https://github.com/Mmust-Ihub/"
                  target="_blank"
                  className="text-amber-300 rounded-full h-[28px] w-[28px] "
                >
                  <p>
                    {" "}
                    <FaGithub className="hover:scale-125 h-[28px] w-[28px] transition-all duration-100 ease-in-out" />
                  </p>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61566790980197"
                  target="_blank"
                >
                  <p className="text-amber-300 rounded-full h-[28px] w-[28px] ">
                    {" "}
                    <FaFacebook className="hover:scale-125 h-[28px] w-[28px] transition-all duration-100 ease-in-out" />
                  </p>
                </a>
              </div>
            </div>

            <div className="flex flex-col  w-[200px]">
              <h3>Get Our Latest Updates </h3>
              <form action="" className="flex sm:flex-row flex-col gap-4 sm:gap-0">
                <div className="flex bg-white ">
                  <input
                    type="email"
                    placeholder="email..."
                    required
                    className="p-2 outline-0 text-black"
                  />
                </div>
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-amber-300 p-2  font-bold"
                />
              </form>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="italic">Digiwezo @ 2025. All rights Reserved</p>
          </div>
        </div>
        <div className="absolute flex items-center  justify-center float-right flex-col lg:bottom-[100px] bottom-[90px] sm:right-2 right-0">
          <div
            className="w-12 h-12 flex items-center justify-center  shadow rounded-full shadow-black px-2 py-2 bg-body mx-12 animate-bounce"
            rel="ugc"
          >
            <HashLink to="#" smooth>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white w-6 h-6"
              >
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </HashLink>
          </div>
          <p className="font-bold">Back To Top </p>
        </div>

        <a href="https://github.com/Mmust-Ihub" target="_blank">
          {" "}
          <p className="text-sm text-center text-secondary/75 mt-2">
            Made with ❤ by @MmustIhub
          </p>
        </a>
      </footer>
    </section>
  );
}

export default Footer;
