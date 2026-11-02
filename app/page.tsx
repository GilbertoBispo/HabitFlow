import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <Pricing></Pricing>
    </div>
  );
}
