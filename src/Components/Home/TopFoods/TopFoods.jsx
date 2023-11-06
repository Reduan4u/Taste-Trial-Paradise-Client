import { Link } from "react-router-dom";
import AllFood from "../../Pages/AllFood/AllFood";

const TopFoods = () => {
    return (
        <div>
            <AllFood>
            </AllFood>
            <div className="flex justify-center pb-10">
                <Link to="allFood"> <button className="btn btn-active btn-secondary">See All Foods</button></Link>
            </div>
        </div>
    );
};

export default TopFoods;