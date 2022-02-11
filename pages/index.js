import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Reel from "../components/Reel/Reel";
import About from "../components/About/About";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";
import Credits from "../components/Credits/Credits";

function Home(){
  return (
    <main>
      
      <Head title="Agência Milkshake | Design e Desenvolvimento Vtex"/>
      
      <Header />

      <Hero />

      <Intro />

      <Reel />

      <About />

      <Brands />

      <Footer />

      <Credits />

    </main>
  )
}



export default Home;