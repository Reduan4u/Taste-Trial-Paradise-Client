import Banner from "./Banner/Banner";
import OurTeam from "./OurTeam/OurTeam";
import Stats from "./Stats/Stats";
import TopFoods from "./TopFoods/TopFoods";
import WeOffer from "./WeOffer/WeOffer";

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <WeOffer></WeOffer>
            <Stats></Stats>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;