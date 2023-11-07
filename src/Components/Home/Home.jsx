import useAuth from "../Hooks/useAuth";
import Banner from "./Banner/Banner";
import TopFoods from "./TopFoods/TopFoods";

const Home = () => {
    const { user, logOut } = useAuth();


    return (
        <div>
            <Banner></Banner>
            <TopFoods></TopFoods>
        </div>
    );
};

export default Home;