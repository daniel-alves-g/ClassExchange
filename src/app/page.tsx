import About from "@/components/pagina/About";
import BackToTop from "@/components/pagina/BackToTop";
import Cta from "@/components/pagina/Cta";
import Footer from "@/components/pagina/Footer";
import Header from "@/components/pagina/Header";
import Hero from "@/components/pagina/Hero";
import Turmas from "@/components/pagina/Turmas";
import Why from "@/components/pagina/Why";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Turmas />
      <About />
      <Why />
      <Cta />
      <Footer />
      <BackToTop />
      {/* 
        <div className="h-[4000px]"></div>
      */}
    </main>
  );
}
