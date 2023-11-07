import { Link } from "react-router-dom";

const UserAddedFoodCard = ({ food }) => {
    const { name, category, image, price, _id, quantity, } = food || {}

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} className="h-64 w-full " alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">${price}</div>
                    </h2>
                    <p>{category}</p>
                    <p>Available quantity: {quantity}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/${name}/${_id}/update`}><button className="btn btn-success btn-outline">Update</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAddedFoodCard;