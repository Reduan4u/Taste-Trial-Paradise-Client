import { useEffect, useState } from "react";
import FoodCards from "./FoodCards";

const AllFood = () => {
    const [foods, setFoods] = useState([]);



    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])


    return (

        <div>
            <div>
                <h1 className="text-center py-10 text-5xl">Our All Foods</h1>
            </div>
            <div className=" w-10/12 m-auto grid grid-cols-3 gap-4 pb-10">
                {
                    foods.map(food => <FoodCards key={food._id} food={food} ></FoodCards>)
                }

            </div>
        </div>
    );
};

export default AllFood;