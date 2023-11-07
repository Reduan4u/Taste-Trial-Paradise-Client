import { Link } from "react-router-dom";

const SingleFoodCard = ({ foods }) => {

    const { name, category, image, price, quantity, _id, madeBy, foodOrigin, description, rating, tags } = foods || {}
    //console.log(selectedFood);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>{category} </strong> from, {foodOrigin}</p>
                <p>Made By: {madeBy}</p>
                <p>{description}</p>
                <p>Available Quantity: {quantity}</p>
                <p>Rating: {rating}/10</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-between">
                    <Link to={`/${name}/${_id}`}> <button className="btn btn-primary">Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodCard;