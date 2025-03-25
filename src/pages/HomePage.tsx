import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AboutSection from "../components/Home/AboutSection";
import Hero from "../components/Home/Hero";

function HomePage() {
  return (
    <div className="text-white h-screen w-screen  flex flex-col justify-center items-center">
      <Header />
      <section className="pt-[150px] mb-[20px]">
        <Hero />
      </section>
      <section>
        <AboutSection />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
