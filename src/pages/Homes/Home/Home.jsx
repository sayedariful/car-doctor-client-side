import About from "../../About/About";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
        <div>
        <Banner></Banner>
        </div>
        <div>
          <About></About>
        </div>
        <div>
          <Services></Services>
        </div>
    </div>
  )
};

export default Home;
