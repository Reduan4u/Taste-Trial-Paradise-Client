import { Link } from "react-router-dom";
import AllFood from "../../Pages/AllFood/AllFood";
import { useEffect, useState } from "react";

const TopFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
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