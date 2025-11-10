import HeroSection from "./_components/HeroSection";
import Header from "./_components/Header";
import About from "./_components/About";
import Services from "./_components/Services";
import { Footer } from "./_components/Footer";
import Diferenciais from "./_components/Diferenciais";
import Feedback from "./_components/Feedback";


export default function MainPage(){
  return(
    <main className="bg-gray-800">
      <Header></Header>
      <HeroSection></HeroSection>
      <About></About>
      <Services></Services>
      <Diferenciais></Diferenciais>
      {/*<Feedback></Feedback>*/}
      <Footer></Footer>
    </main>
  )
}