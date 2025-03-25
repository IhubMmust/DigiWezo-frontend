import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function AboutPage() {
  return (
    <div className="bg-gray-900 text-white h-screen  flex flex-col justify-center items-center">
      <Header/>
      <p className="text-green-500 text-2xl">Hello @BinaryBrigades</p>
      {/* 1 programic joke */}
      <p className="text-red-500 text-2xl">
        Why do programmers prefer dark mode?
      </p>
      <p className="text-blue-500 text-2xl">Because light attracts bugs.</p>
      <Footer/>
    </div>
  );
}

export default AboutPage;
