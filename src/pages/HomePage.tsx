import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AboutSection from "../components/Home/AboutSection";
import BookADemo from "../components/Home/BookADemo";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import Testimonials from "../components/Home/Testimonials";

function HomePage() {
  return (
    <div className="text-white w-screen  flex flex-col justify-center items-center">
      <Header />
      <section >
        <Hero />
      </section>
      <section>
        <AboutSection />
      </section>
      <Testimonials/>
      <Partners/>
      <BookADemo/>
      <Footer />
    </div>
  );
}

export default HomePage;
