import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const FoodCards = ({ food }) => {
    const { name, category, image, price, quantity, _id } = food || {}
    const { loading } = useContext(AuthContext);


    if (loading) {
        return (
            <div className="flex flex-col rounded shadow-md w-60 m-auto my-20 sm:w-80 animate-pulse h-96">
                <div className="h-48 rounded-t dark:bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">${price}</div>
                </h2>
                <p>{category}</p>
                <p>Available quantity: {quantity}</p>
                <div className="card-actions justify-start">
                    <Link to={`/${category}/${name}/${_id}`}><button className="btn btn-success btn-outline">Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default FoodCards;