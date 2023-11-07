import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import UserAddedFoodCard from "./UserAddedFoodCard";


const UserAddedFoods = () => {
    const [userAddedFoods, setUserAddedFoods] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    //console.log(userEmail);
    const foods = useLoaderData();

    useEffect(() => {
        const addedFoods = foods.filter(userAddedFoods => userAddedFoods.userEmail === userEmail);
        setUserAddedFoods(addedFoods);
    }, [foods, userEmail])


    return (
        <div>
            {userAddedFoods.length > 0 ?
                <div className="w-10/12 m-auto grid lg:grid-cols-3 md:grid-cols-2 py-20 gap-20">
                    {
                        userAddedFoods.map(food => <UserAddedFoodCard key={food._id} food={food}></UserAddedFoodCard>)
                    }
                </div>
                :
                (<div className="">
                    <h1 className="text-5xl col-span-3  mb-10 text-center">Product Available Soon...</h1>
                    <Link to="/addFood">
                        <a rel="noopener noreferrer" href="#" className="px-8 btn flex w-1/5 m-auto py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Add Foods</a></Link>
                </div>

                )

            }


        </div>
    );
};

export default UserAddedFoods;