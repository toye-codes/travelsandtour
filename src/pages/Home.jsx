import Header from "../components/Header";
import Hero from "../components/Hero";
import Sales from "../components/Sales";
import Travel from "../components/Travel";
import Magazine from "../components/Magazine";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div id="home">
        <Header />
        <Hero />
      </div>
      <div id="sales">
<Sales />
      </div>
      
      <Travel />
      <Magazine />
      <Booking />
      <Footer />
    </>
  );
};

export default Home;
