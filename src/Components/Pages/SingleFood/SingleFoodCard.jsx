import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SingleFoodCard = ({ foods }) => {
    const { user } = useContext(AuthContext);
    const email = user.email;

    const { name, category, image, price, quantity, _id, madeBy, foodOrigin, description, rating, tags } = foods || {}
    const selectedFood = { name, category, image, price, quantity, _id, madeBy, foodOrigin, description, rating, tags, email }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>{category} </strong> from, {foodOrigin}</p>
                <p>Made By: {madeBy}</p>
                <p>{description}</p> <p>Rating: {rating}/10</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-between">
                    <Link to={`/${name}/${_id}`}> <button className="btn btn-primary">Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodCard;