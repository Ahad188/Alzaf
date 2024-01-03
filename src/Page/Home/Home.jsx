import Forsell from "../Forsell/Forsell";
import Banner from "./Banner/Banner";

 

const Home = () => {
     return (
          <section className="w-[1920px]">
               <Banner></Banner>
               <Forsell></Forsell>
          </section>
     );
};

export default Home;