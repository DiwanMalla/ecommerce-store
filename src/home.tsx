import Header from "./components/Header";
import PromoCard from "./components/promoCard";
import Service from "./components/service";
import Footer from "./components/footer";
import FrequentQuestion from "./components/frequentQuestion";
const home = () => {
  return (
    <div>
      <div>
        <Header />
        <PromoCard />
        <Service />
      </div>
      <FrequentQuestion />
      <Footer />
    </div>
  );
};

export default home;
