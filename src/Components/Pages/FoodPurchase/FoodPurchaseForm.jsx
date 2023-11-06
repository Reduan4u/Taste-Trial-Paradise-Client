
const FoodPurchaseForm = ({ foods }) => {


    return (
        <div>
            <div className="max-w-4xl p-6 mx-auto bg-base-300  bg-opacity-85 rounded-md shadow-md ">
                <h2 className=" font-semibold capitalize text-center text-4xl mb-10 ">Ordering {name}</h2>

                <form >
                    <div className="  ">
                        <div className="">
                            <label className=" font-bold">Food Name</label>
                            <input id="" name="foodName" defaultValue={name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Buyer Name</label>
                            <input readOnly id="" type="text" placeholder={""} name="foodCook" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Buyer Email</label>
                            <input readOnly id="" type="text" placeholder={""} name="foodCook" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className=" font-bold " >Food Price</label>
                            <input id="" type="number" name="foodPrice" placeholder="Food Price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className=" font-bold " >Food Photo</label>
                            <input id="" type="text" name="foodPhoto" placeholder="Food Photo URL" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>
                        <div>
                            <label className=" font-bold " >Food Quantity</label>
                            <input id="" type="number" name="foodQuantity" placeholder="Food Quantity" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" />

                        </div>

                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 leading-5 text-black font-bold transition-colors bg-green-400 duration-200 transform  rounded-md hover:bg-pink-400 focus:outline-none focus:bg-red-4 00 uppercase w-full">Order Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodPurchaseForm;