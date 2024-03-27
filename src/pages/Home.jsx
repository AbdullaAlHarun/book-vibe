import Books from "../componants/Books";
import Hero from "../componants/Hero";


const Home = () => {
    return (
        <div className="px-8 mt-8 rounded-lg">
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default Home;