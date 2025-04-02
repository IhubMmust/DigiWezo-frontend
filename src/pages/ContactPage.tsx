import Hero from "@/components/contact/Hero";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ContactSection from "../components/contactus/ContactSection";

function ContactPage() {
  return (
    <div className="text-white w-screen  flex flex-col justify-center items-center">
      <Header />
      <section >
        <Hero />
      </section>
      <section >
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
