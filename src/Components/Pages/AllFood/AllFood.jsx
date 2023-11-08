import { useEffect, useState } from "react";
import FoodCards from "./FoodCards";

const AllFood = () => {
    const [foods, setFoods] = useState([]);



    useEffect(() => {
        fetch("https://taste-trial-paradise-server.vercel.app/foods")
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])


    return (
        <div>
            <div>

                <div className='flex flex-col-reverse lg:flex-row md:flex-row lg:px-24 md:px-20 px-4 py-10'>
                    <div className="lg:flex-1 md:flex-1 flex flex-col justify-center items-center lg:items-start md:items-start text-center lg:text-start md:text-start ">
                        <h1 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-black">Best in <strong className="text-yellow-400">Taste Trial Paradise</strong></h1>
                        <p className="mb-1 md:mb-5 lg:mb-5 text-sm  sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">We With The Aspects Professional Services
                        </p>
                        <p className="text-black text-xs md:text-lg lg:text-xl w-fulls">Design of choice for many of the worlds leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software to development.
                        </p>
                        <div className="flex my-4 gap-4">
                            <div className="flex">
                                <div className=" pt-4 pr-3">
                                    <img className="" src="https://cafeu.vercel.app/img/icon/3-7.png" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-bold">Rating Star</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className=" pt-4 pr-3">
                                    <img className="" src="https://cafeu.vercel.app/img/icon/3-8.png" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-bold">Free Species</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <button className="btn btn-warning">About More</button>
                        </div>                    </div>
                    <div className='lg:flex-1 md:flex-1 flex justify-center'>
                        <img className="lg:w-full md:w-full w-1/2" src="https://cafeu.vercel.app/img/slider/banner-7.png" alt="" />
                    </div>

                </div>

            </div>
            <div>
                <h1 className="text-center py-10 text-2xl md:text-4xl lg:text-6xl">Our All Foods</h1>
            </div>
            <div className="w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                {
                    foods.map(food => <FoodCards key={food._id} food={food} ></FoodCards>)
                }
            </div>
        </div>
    );
};

export default AllFood;