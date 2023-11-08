import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodCards from "../../Pages/AllFood/FoodCards";

const TopFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])


    return (
        <div>
            {/* <AllFood>
            </AllFood> */}
            <div>
                <h1 className="text-center py-10 text-5xl">Our Top Foods</h1>
            </div>

            <div className=" w-10/12 m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-10">
                {
                    foods.map(food => <FoodCards key={food._id} food={food} ></FoodCards>)
                }
            </div>

            <div className="flex justify-center pb-10">
                <Link to="allFood"> <button className="btn btn-active btn-secondary">See All Foods</button></Link>
            </div>
        </div>
    );
};

export default TopFoods;