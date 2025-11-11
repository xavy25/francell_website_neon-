import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";
import Accessories from "./Accessories";
import RepairForm from "./RepairForm";
import ContactForm from "./ContactForm";

export default function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <Header />
      <main className="mt-20">
        <Hero />
        <Services />
        <Accessories/>
        <RepairForm/>
        <ContactForm/>
      </main>
      <Footer />
    </div>
  );
}