import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleFoodCard from "./SingleFoodCard";

const SingleFood = () => {
    const [foods, setFoods] = useState();
    const { _id } = useParams();
    const allFoods = useLoaderData();

    useEffect(() => {
        const selectedFoods = allFoods.find(foods => foods._id == _id);
        setFoods(selectedFoods);
    }, [allFoods, _id])

    return (
        <div className="w-10/12 m-auto  py-10">
            <SingleFoodCard foods={foods}></SingleFoodCard>
        </div>
    );
};

export default SingleFood;