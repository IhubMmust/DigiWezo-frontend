// import { FaCalendarTimes } from "react-icons/fa";
import fasbeth from "../../assets/fasbeth.png";
import riara from "../../assets/riara.png";
import booker from "../../assets/booker.png";

function Partners() {
  return (
    <div className="w-screen lg:px-6 mt-[30px]">
      <div className="w-full flex flex-col justify-center items-start  lg:mt-[0px]">
        <h2 className="text-[#007BFF]  m-6 lg:text-left lg:self-start lg:px-8 text-2xl font-bold">
          Join the Growing Community of Schools Using Our System
        </h2>
        <div className="wfull grid grid-cols-3  gap-12 px-4 lg:px-14">
          <img
            src={riara}
            alt=""
            className="w-[100px] h-[100px]  object-contain"
          />
          <img
            src={booker}
            alt=""
            className="w-[100px] h-[100px]  object-contain"
          />
          <img
            src={fasbeth}
            alt=""
            className="w-[100px] h-[100px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
