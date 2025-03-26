import heroImage from "../../assets/Devices-cuate1.png";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
function Hero() {
  return (
    <main className="w-screen lg:h-screen mainbg flex-col flex lg:flex-row gap-6 px-6 py-6 justify-center items-center ">
      <motion.div
        className="lg:pt-0  space-y-6 pt-[100px]"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
        }}
      >
        <h1 className="text-3xl lg:text-4xl font-extrabold">
          <span className="text-[#ffc004] ">Smart</span> School Management,
          <br /> <span className="text-[#ffc004] ">Simplified!</span>
        </h1>
        <p className="text-base">
          A Smarter way to run your school! Our platform seamlessly <br />
          integrates administration, communication, and academics,
          <br /> allowing educators to focus on what truly matters.
        </p>
        <motion.div
          className="w-full flex gap-4"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
          }}
        >
          <a
            href=""
            className="bg-[#ffc004] rounded-lg p-2 font-[600] w-[45%] text-center"
          >
            Login
          </a>
          <HashLink
            to="#demo"
            smooth
            className="bg-[#007BFF]  p rounded-lg font-[600] w-[45%] text-center p-2"
          >
            Book Demo
          </HashLink>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
      >
        <img src={heroImage} alt="hero image" />
      </motion.div>
    </main>
  );
}

export default Hero;
