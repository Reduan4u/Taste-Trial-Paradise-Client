import { useEffect, useState } from "react";
import FoodCards from "./FoodCards";
import { useLoaderData } from "react-router-dom";
import './Pagination.css'

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const { count } = useLoaderData();

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map((page) => page + 1);

    // search and filter
    const [searchTerm, setSearchTerm] = useState("");
    const [priceFilter, setPriceFilter] = useState(null);
    const [countryFilter, setCountryFilter] = useState("");
    const [sortOrder, setSortOrder] = useState(""); // Possible values: "", "asc", "desc"




    useEffect(() => {
        fetch(`https://taste-trial-paradise-server.vercel.app/foods?page=${currentPage - 1}&size=${itemsPerPage}&price=${priceFilter}&country=${countryFilter}&search=${searchTerm}&sortOrder=${sortOrder}`)
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, [currentPage, itemsPerPage, countryFilter, priceFilter, searchTerm, sortOrder])

    const filteredFoods = foods.filter((food) => {
        const meetsPriceFilter = parseFloat(food.price) <= parseFloat(priceFilter) || !priceFilter;
        const meetsCountryFilter = food.foodOrigin.toLowerCase().includes(countryFilter.toLowerCase()) || !countryFilter;
        return meetsPriceFilter && meetsCountryFilter;
    })
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return parseFloat(a.price) - parseFloat(b.price);
            } else if (sortOrder === "desc") {
                return parseFloat(b.price) - parseFloat(a.price);
            } else {
                return 0;
            }
        });


    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(1);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    }

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



            {/* Filter */}
            <div className="w-10/12 m-auto flex mb-4 flex-wrap gap-2 justify-center items-center">
                <input
                    type="text"
                    placeholder="Search by Food Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-200  rounded-lg "
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="p-2 border border-gray-200 rounded-lg "
                />
                <input
                    type="text"
                    placeholder="Search by Country"
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="p-2 border border-gray-200 rounded-lg "
                />
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="p-2 border border-gray-200 rounded-lg "
                >
                    <option value="">Sort by Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>


            <div className="w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                {filteredFoods.length === 0 ? (
                    <p className="text-center col-span-3 text-red-500 font-bold text-4xl">No matching food found!</p>
                ) : (
                    filteredFoods.map((food) => (
                        <FoodCards key={food._id} food={food}></FoodCards>
                    ))
                )}
            </div>

            {/* Pagination */}
            <div className='pagination'>

                <button onClick={handlePrevPage}><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-5">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg></button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button
                    onClick={handleNextPage}><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-5">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg></button>

                <select className="bg-yellow-400" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default AllFood;