import Hero from "@/components/contact/Hero";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import BookADemo from "@/components/contact/Main";
import MapView from "@/components/contact/MapView";

function ContactPage() {
  return (
    <div className=" text-white">
      <Header />
      <Hero />
      <BookADemo />
      <MapView />
      <Footer />
    </div>
  );
}

export default ContactPage;
