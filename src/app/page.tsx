import CardPage from "./components/Cardsection/card";
import HeroPage from "./components/LandingPage/Herosection";
import StatisticsCard from "./components/LandingPage/StatisticsCard";



export default function Home() {
  return (
   <main>
<HeroPage/>
<CardPage/>
<StatisticsCard/>


   </main>
  );
}
