import CardPage from "./components/Cardsection/card";
import AllUnderOneRoof from "./components/LandingPage/AllRoof";
import BookC from "./components/LandingPage/Book";
import BrandSliders from "./components/LandingPage/brandslider";
import CustomerCarousel from "./components/LandingPage/Carousel";
import Footer from "./components/LandingPage/Footer";
import FoundersSection from "./components/LandingPage/Founder";
import HeroPage from "./components/LandingPage/Herosection";

import StatisticsCard from "./components/LandingPage/StatisticsCard";



export default function Home() {
  return (
   <main>
<HeroPage/>
<CardPage/>
<StatisticsCard/>
<FoundersSection/>
<AllUnderOneRoof/>
<BookC/>
<BrandSliders/>
<CustomerCarousel/>
<Footer/>




   </main>
  );
}
