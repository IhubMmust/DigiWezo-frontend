import heroImage from "../../assets/Devices-cuate1.png";

function Hero() {
  return (
    <main className="w-screen lg:h-screen mainbg flex-col flex lg:flex-row gap-6 px-6 py-6 justify-center items-center pt-[320px] lg:pt-[200px]">
      <div className="lg:pt-0  space-y-6 pt-[320px]">
        <h1 className="text-3xl lg:text-4xl font-extrabold">
          <span>Smart</span> School Management,
          <br /> <span>Simplified!</span>
        </h1>
        <p className="text-base">
          A Smarter way to run your school! Our platform seamlessly <br />
          integrates administration, communication, and academics,
          <br /> allowing educators to focus on what truly matters.
        </p>
        <div className="w-full flex gap-4">
          <a
            href=""
            className="bg-[#ffc004] rounded-lg p-2 font-[600] w-[45%] text-center"
          >
            Login
          </a>
          <a
            href=""
            className="bg-[#007BFF]  p rounded-lg font-[600] w-[45%] text-center p-2"
          >
            Book Demo
          </a>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="hero image" />
      </div>
    </main>
  );
}

export default Hero;
