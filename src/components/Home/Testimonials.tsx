import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import sr from "../../assets/speechr.png";
import sl from "../../assets/speechl.png";
function Testimonials() {
  return (
    <div className="w-screen h-[230vh] lg:h-screen mainbg px-6 flex flex-col justify-center items-center mt-[30px]">
      <h2 className="mb-14 mt-6  lg:px-8 text-2xl font-bold">
        What Our Users Say
      </h2>
      <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-3 justify-center items-center px-4 lg:px-14">
        <div className="flex-1 h-[350px] bg-white rounded-2xl flex flex-col justify-between items-center">
          <div className="items-center flex">
            <p className="text-black font-semibold p-2 ">
              <img src={sl} className="place-self-start w-[15px]" />
              This system has transformed our school operations! Managing
              student records and communication has never been easier
              <img src={sr} className="place-self-end w-[15px]" />
            </p>
          </div>
          <div className="w-full testimonialbg h-[240px] text-black flex flex-col rounded-2xl justify-end items-center pb-2">
            <img src={person1} alt="person1" className="mb-14" />
            <p className="font-bold">Dr. Michael Johnson</p>
            <p className="font-semibold">Principal, Uwezo High</p>
          </div>
        </div>
        <div className="flex-1 h-[350px] bg-white rounded-2xl flex flex-col justify-between items-center">
          <div className="w-full items-center flex ">
            <p className="text-black font-semibold p-2 ">
              <img src={sl} className="place-self-start w-[15px]" />
              I love how I can track my child's performance in real-time!
              <img src={sr} className="place-self-end w-[15px]" />
            </p>
          </div>
          <div className="w-full testimonialbg h-[240px] text-black flex flex-col rounded-2xl justify-end items-center pb-2">
            <img src={person2} alt="person1" className="mb-14" />
            <p className="font-bold">Lucy Mwangi</p>
            <p className="font-semibold">Parent</p>
          </div>
        </div>
        <div className="flex-1 h-[350px] bg-white rounded-2xl flex flex-col justify-between items-center">
          <div className="w-full items-center flex ">
            <p className="text-black font-semibold p-2 ">
              <img src={sl} className="place-self-start w-[15px]" />
              Grading and exam management used to be time-consuming, but this
              system has made the process so much easier.s ! I love how I can
              track my child's performance in real-time!
              <img src={sr} className="place-self-end w-[15px]" />
            </p>
          </div>
          <div className="w-full testimonialbg h-[240px] text-black flex flex-col rounded-2xl justify-end items-center pb-2">
            <img src={person3} alt="person1" className="mb-14" />
            <p className="font-bold">David Thompson</p>
            <p className="font-semibold">Teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
