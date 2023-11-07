import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddFoods = () => {

    const { user } = useContext(AuthContext);
    //console.log(user);
    const userEmail = user.email;
    const userName = user.displayName;

    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.foodName.value;
        const category = form.foodCategory.value;
        const foodOrigin = form.foodOrigin.value;
        const price = form.foodPrice.value;
        const addedFoodRating = form.foodRating.value;
        const image = form.foodPhoto.value;
        const quantity = form.foodQuantity.value;
        const addedFoodTags = form.foodTags.value;
        const addedFoodDescription = form.foodDescription.value;

        const newFood = { name, category, foodOrigin, price, addedFoodRating, image, quantity, addedFoodTags, addedFoodDescription, userEmail, userName };
        console.log(newFood);

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Food Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
    }

    return (
        <div className="">
            <div className="max-w-4xl p-6 mx-auto bg-base-300 rounded-md shadow-md">
                <h2 className=" font-semibold capitalize text-center text-4xl mb-10">ADD FOOD</h2>

                <form onSubmit={handleAddFood}>
                    <div className="  ">
                        <div className="">
                            <label className=" font-bold">Food Name</label>
                            <input id="" name="foodName" placeholder="Food Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>
                        <div className="">
                            <label className="  font-bold " >Food Category</label>
                            <input id="" type="text" name="foodCategory" placeholder="Food Category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Food Origin</label>
                            <input id="" type="text" placeholder="Food Origin" name="foodOrigin" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Add By (Name)</label>
                            <input readOnly defaultValue={userName} name="userName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md font-semibold focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Add By (Email)</label>
                            <input readOnly defaultValue={userEmail} name="userEmail" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md font-semibold focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className=" font-bold " >Food Price</label>
                            <input id="" type="number" step="0.01" name="foodPrice" placeholder="Food Price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Food Rating</label>
                            <input id="" type="number" name="foodRating" placeholder="Food Rating" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Food Photo</label>
                            <input id="" type="text" name="foodPhoto" placeholder="Food Photo URL" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div>
                            <label className=" font-bold " >Food Quantity</label>
                            <input id="" type="number" name="foodQuantity" placeholder="Food Quantity" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div>
                            <label className=" font-bold " >Food Tags</label>
                            <input id="" type="text" name="foodTags" placeholder="Food Tags" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div className="col-span-2">
                            <label className=" font-bold " >Food Description</label>
                            <textarea className="h-40 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" name="foodDescription" placeholder="Short Description about the Food"></textarea>

                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 leading-5 text-black font-bold transition-colors bg-green-400 duration-200 transform  rounded-md hover:bg-pink-400 focus:outline-none focus:bg-red-4 00 uppercase w-full">Add Food</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddFoods;