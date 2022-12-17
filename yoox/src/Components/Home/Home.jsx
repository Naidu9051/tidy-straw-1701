import ImageCard from "./ImageCard";
import Designer from "./Designers"
import NewArrivals from "../Home/NewArrivals/NewArrivals"
import HomeCarts from "./HomeCarts"
import OneOfAKind from "../Home/OneOfAKind/OneOfAKind"
import EightByYoox from "../Home/EightByYoox/EightByYoox"
import ConnectWithUs from "./ConnectWithUs"
import FooterCards from "./FooterCards"
import Footer from "./footer"

function Home() {
  return (
    <>
      <ImageCard />
      <Designer />
      <NewArrivals />
      <HomeCarts />
      <OneOfAKind />
      <EightByYoox />
      <FooterCards />
      <Footer />
      <ConnectWithUs />
    </>
  );
}
export default Home;
