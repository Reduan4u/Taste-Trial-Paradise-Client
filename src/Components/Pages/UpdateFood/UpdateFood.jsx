import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
    const foods = useLoaderData();
    const { _id, name, category, foodOrigin, price, rating, image, quantity, tags, description, userEmail, madeBy } = foods || {};
    //console.log(foods);

    //console.log(user);


    const handleUpdateFood = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.foodName.value;
        const category = form.foodCategory.value;
        const foodOrigin = form.foodOrigin.value;
        const price = form.foodPrice.value;
        const rating = form.foodRating.value;
        const image = form.foodPhoto.value;
        const quantity = form.foodQuantity.value;
        const tags = form.foodTags.value;
        const description = form.foodDescription.value;

        const updatedFood = { name, category, foodOrigin, price, rating, image, quantity, tags, description, userEmail, madeBy };
        // console.log(updatedFood);

        fetch(`https://taste-trial-paradise-server.vercel.app/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Food Updated Successfully',
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
                <h2 className=" font-semibold capitalize text-center text-4xl mb-10">UPDATE <strong className="underline underline-offset-4">{name}</strong></h2>

                <form onSubmit={handleUpdateFood}>
                    <div className="  ">
                        <div className="">
                            <label className=" font-bold">Food Name</label>
                            <input id="" name="foodName" defaultValue={name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>
                        <div className="">
                            <label className="  font-bold " >Food Category</label>
                            <input id="" type="text" name="foodCategory" defaultValue={category} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Food Origin</label>
                            <input id="" type="text" defaultValue={foodOrigin} name="foodOrigin" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Add By (Name)</label>
                            <input readOnly defaultValue={madeBy} name="userName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md font-semibold focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Add By (Email)</label>
                            <input readOnly defaultValue={userEmail} name="userEmail" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md font-semibold focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className=" font-bold " >Food Price</label>
                            <input id="" type="number" step="0.01" name="foodPrice" defaultValue={price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Food Rating</label>
                            <input id="" type="number" name="foodRating" defaultValue={rating} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Food Photo</label>
                            <input id="" type="text" name="foodPhoto" defaultValue={image} className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div>
                            <label className=" font-bold " >Food Quantity</label>
                            <input id="" type="number" name="foodQuantity" defaultValue={quantity} className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div>
                            <label className=" font-bold " >Food Tags</label>
                            <input id="" type="text" name="foodTags" defaultValue={tags} className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div className="col-span-2">
                            <label className=" font-bold " >Food Description</label>
                            <textarea className="h-40 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" name="foodDescription" defaultValue={description}></textarea>

                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 leading-5 text-black font-bold transition-colors bg-green-400 duration-200 transform  rounded-md hover:bg-pink-400 focus:outline-none focus:bg-red-4 00 uppercase w-full">Update Food</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateFood;