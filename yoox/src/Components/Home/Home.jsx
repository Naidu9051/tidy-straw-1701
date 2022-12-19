import ImageCard from "./ImageCard";
import Designer from "./Designers";
import NewArrival from "../Home/NewArrivals/NewArrivals";
import HomeCarts from "./HomeCarts";
import EightByYoox from "../Home/EightByYoox/EightByYoox";
import FooterCards from "./FooterCards";
import Footer from "./Footer/Footer";
import Topnavbar from "../Topnav/Topnavbar";
import DownNavbar from "../Lownav/DwnNavbar";
import Navbar from "../Navbar";


function Home() {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <DownNavbar />
      <ImageCard />
      <Designer />
      <NewArrival />
      <HomeCarts />
      <EightByYoox />
      <FooterCards />
      <Footer />
    </>
  );
}
export default Home;
