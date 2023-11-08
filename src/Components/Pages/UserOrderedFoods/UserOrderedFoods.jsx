import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import UserOrderedFoodsCard from "./UserOrderedFoodsCard";


const UserOrderedFoods = () => {
    const orderedFoods = useLoaderData();
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const [userOrderedFoods, setUserOrderedFoods] = useState(orderedFoods);

    useEffect(() => {
        const filteredOrderedFoods = orderedFoods.filter(orderedFood => orderedFood.buyerEmail == userEmail);
        setUserOrderedFoods(filteredOrderedFoods);
    }, [orderedFoods, userEmail])


    return (
        <div className="w-2/3 m-auto py-10 bg-base-300">
            <div className="flex flex-col p-6 space-y-4 sm:p-10 rounded-lg">
                <h2 className="text-5xl text-center  font-semibold border-b-2 border-gray-300 pb-4">Your Cart</h2>
                {
                    userOrderedFoods.map(userOrderedFood => <UserOrderedFoodsCard
                        key={userOrderedFood._id}
                        userOrderedFood={userOrderedFood}
                        userOrderedFoods={userOrderedFoods}
                        setUserOrderedFoods={setUserOrderedFoods}
                    ></UserOrderedFoodsCard>)
                }
                <div className="space-y-1 text-right pt-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-base text-right">Total amount:
                        <strong className="text-pink-500 font-bold"> 000.00$</strong>
                    </p>
                    <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to="/allFood"><button type="button" className="btn px-6 py-2 border rounded-md dark:border-violet-400">Back
                        <span className="sr-only sm:not-sr-only"> to shop</span>
                    </button></Link>
                    <Link><button type="button" className="btn px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserOrderedFoods;