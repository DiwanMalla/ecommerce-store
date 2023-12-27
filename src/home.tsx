import Header from "./components/Header";
import PromoCard from "./components/promoCard";
import Service from "./components/service";
import Footer from "./footer";
const home = () => {
  return (
    <div>
      <div>
        <Header />
        <PromoCard />
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default home;
