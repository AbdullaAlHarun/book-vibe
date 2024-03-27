import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png"

const Hero = () => {
  return (
    <div className="hero min-h-min bg-slate-300 lg:p-16 p-8 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse py-4">
        <img
          src={heroBg}
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <h1 className=" text-3xl lg:text-4xl font-bold mb-8">
            Unleash Your Imagination: <br></br>
            Find Your Next Favorite Read Among Our Diverse Collection!
          </h1>
          
          <Link 
            to="/listedBooks"
            className="btn bg-[#23BE0A] text-white"
          >
            View The List
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
