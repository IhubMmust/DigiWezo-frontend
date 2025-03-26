import About from "../components/about/About";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function AboutPage() {
  return (
    <div className="flex text-white flex-col">
      <Header/>
      <About />
      <Footer/>
    </div>
  );
}

export default AboutPage;
