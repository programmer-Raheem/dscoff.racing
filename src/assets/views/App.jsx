import Header from "@/components/sections/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import Giveaway from "@/components/sections/Giveaway/Giveaway";
import GiveawaysPromo from "@/components/sections/GiveawaysPromo/GiveawaysPromo";
import GameModes from "@/components/sections/GameModes/GameModes";
import VehicleModes from "@/components/sections/VehicleModes/VehicleModes";
import Team from "@/components/sections/Team/Team";
import Roadmap from "@/components/sections/Roadmap/Roadmap";
import Footer from "@/components/sections/Footer/Footer";

function App() {
  return (
    <div className="wrapper-div" id="wrapper">
      <main>
        <Header />
        <Hero />
        <Giveaway />
        <GiveawaysPromo />
        <GameModes />
        <VehicleModes />
        <Team />
        <Roadmap />
        <Footer />
      </main>
    </div>
  );
}

export default App;
