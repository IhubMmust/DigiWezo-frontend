import Marquee from "react-fast-marquee";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import sr from "../../assets/speechr.png";
import sl from "../../assets/speechl.png";

function Testimonials() {
  return (
    <div className="w-screen h-[100vh] lg:h-screen mainbg px-6 flex flex-col justify-center items-center mt-[30px]">
      <h2 className="mb-14 mt-6 lg:px-8 text-2xl font-bold">
        What Our Users Say
      </h2>

      <Marquee pauseOnHover speed={40}>
        <div className="flex gap-6 px-4 lg:px-14">
          <TestimonialCard
            text="This system has transformed our school operations! Managing student records and communication has never been easier."
            name="Dr. Michael Johnson"
            role="Principal, Uwezo High"
            image={person1}
          />
          <TestimonialCard
            text="I love how I can track my child's performance in real-time!"
            name="Lucy Mwangi"
            role="Parent"
            image={person2}
          />
          <TestimonialCard
            text="Grading and exam management used to be time-consuming, but this system has made the process so much easier!"
            name="David Thompson"
            role="Teacher"
            image={person3}
          />
        </div>
      </Marquee>
    </div>
  );
}

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  image: string;
}

function TestimonialCard({ text, name, role, image }: TestimonialCardProps) {
  return (
    <div className="flex-1 h-[350px] w-[300px] bg-white rounded-2xl flex flex-col justify-between items-center p-4 shadow-lg">
      <div className="text-center">
        <p className="text-black font-semibold p-2">
          <img src={sl} className="inline-block w-[15px] mr-2" />
          {text}
          <img src={sr} className="inline-block w-[15px] ml-2" />
        </p>
      </div>
      <div className="w-full testimonialbg h-[240px] text-black flex flex-col rounded-2xl justify-end items-center pb-2">
        <img src={image} alt={name} className="mb-14 w-16 h-16 rounded-full" />
        <p className="font-bold">{name}</p>
        <p className="font-semibold">{role}</p>
      </div>
    </div>
  );
}

export default Testimonials;
