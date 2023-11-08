import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const FoodPurchaseForm = ({ foods }) => {
    const { user } = useContext(AuthContext);
    const buyerName = user.displayName;
    const buyerEmail = user.email;

    const { name, category, image, price, userEmail, quantity, foodOrigin, description, rating, tags } = foods || {}
    //console.log(selectedFood);


    // Date 
    const [buyingDate, setBuyingDate] = useState('');
    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setBuyingDate(currentDate);
    }, []);

    // Add to cart
    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const purchasedQuantityString = form.foodQuantity.value;
        const purchasedQuantity = parseInt(purchasedQuantityString);
        const quantityInt = parseInt(quantity);
        const selectedFood = { name, category, image, price, quantity, userEmail, foodOrigin, description, rating, tags, purchasedQuantityString, buyerEmail, buyerName }

        const url = `https://taste-trial-paradise-server.vercel.app/orderedFoods?email=${user?.email}`;

        if (buyerEmail === userEmail) {
            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "You can't order your added foods",
                footer: '<a href="#">Try other foods</a>'
            }); return
        } else if (quantityInt === 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The Product is not available",
                footer: '<a href="#">Please try again later</a>'
            });
        }
        else if (purchasedQuantity > quantityInt) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Available stock quantity is crossed",
                footer: '<a href="#">Reduce the Quantity, and Try Again</a>'
            });
        }
        else {

            fetch('https://taste-trial-paradise-server.vercel.app/orderedFoods', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedFood),
            })


            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Product Added to Cart Successfully',
                showConfirmButton: false,
                timer: 1500
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
    }


    return (
        <div>
            <div className="max-w-4xl p-6 mx-auto bg-base-200  rounded-md shadow-md ">
                <h2 className=" font-semibold capitalize text-center text-4xl mb-10 ">Ordering: <strong className="underline underline-offset-4 text-yellow-500">{name}</strong></h2>

                <form onSubmit={handleOrder} >
                    <div className="  ">
                        <div className="">
                            <label className=" font-bold">Food Name</label>
                            <input name="foodName" readOnly defaultValue={name} className="font-semibold block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Buyer Name</label>
                            <input readOnly defaultValue={buyerName} name="foodCook" className="font-semibold block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Buyer Email</label>
                            <input readOnly defaultValue={buyerEmail} name="foodCook" className="font-semibold block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Food Price</label>
                            <input name="foodPrice" defaultValue={price} className=" font-semibold block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Food Available Quantity</label>
                            <input name="foodAvailableQuantity" defaultValue={quantity} className=" font-semibold block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Food Quantity</label>
                            <input id="" required type="number" name="foodQuantity" placeholder="Food Quantity" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="font-bold">Buying Date</label>
                            <input
                                name="buyingDate"
                                value={buyingDate}
                                onChange={(e) => setBuyingDate(e.target.value)}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                type="date"
                            />
                        </div>

                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 leading-5 text-black font-bold transition-colors bg-yellow-400 duration-200 transform  rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-red-4 00 uppercase w-full">Order Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodPurchaseForm;