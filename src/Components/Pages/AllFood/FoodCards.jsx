import { Link } from "react-router-dom";

const FoodCards = ({ food }) => {
    const { name, category, image, price, quantity, _id } = food || {}

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