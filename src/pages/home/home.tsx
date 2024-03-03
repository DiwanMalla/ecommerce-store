import Header from "../../components/header/Header";
import PromoCard from "./body/promoCard";
import Service from "./body/service";
import Footer from "../../components/footer/footer";
import FrequentQuestion from "../../components/FAQ/frequentQuestion";
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
