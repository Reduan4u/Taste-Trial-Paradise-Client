import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Link } from 'react-router-dom';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className='mb-10'>
            <AutoplaySlider play={true} cancelOnInteraction={false} interval={300000}>

                {/* 1st Slider */}
                <div className="relative " style={{ backgroundImage: 'url(https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg)', backgroundSize: '100%' }}>
                    <div className='flex px-24 -my-10 '>
                        <div className="flex-1 justify-center flex flex-col">
                            <p className=" text-base sm:text-md md:text-lg lg:text-xl font-medium text-black">Best in <strong className='text-red-600'>Taste Trial Paradise</strong></p>
                            <h1 className="mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">BBQ Chicken <strong className='text-red-600'>Salad</strong> with Creamy Avocado</h1>
                            <p className='text-black w-4/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis dignissimos magni repellendus.</p>

                            <Link to="/allFood"><button style={{ backgroundColor: "#FF444A" }} className="w-4/12 mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn text-white  active:scale-95 transform transition-transform duration-200 ease-in-out">Menu</button></Link>
                        </div>
                        <div className='flex-1'>
                            <img src="https://cafeu.vercel.app/img/slider/baner.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 2nd Slider */}
                <div className="relative " style={{ backgroundImage: 'url(https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg)', backgroundSize: '100%' }}>
                    <div className='flex px-24 '>
                        <div className="flex-1 justify-center flex flex-col">
                            <p className=" text-base sm:text-md md:text-lg lg:text-xl font-medium text-black">Best in <strong className='text-red-600'>Taste Trial Paradise</strong></p>
                            <h1 className="mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">Asian Lettuce Wrap <strong className='text-red-600'>Chicken</strong> Chopped Salad</h1>
                            <p className='text-black w-4/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis dignissimos magni repellendus.</p>

                            <Link to="/allFood"><button style={{ backgroundColor: "#FF444A" }} className="w-4/12 mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn text-white  active:scale-95 transform transition-transform duration-200 ease-in-out">Menu</button></Link>
                        </div>
                        <div className='flex-1'>
                            <img src="https://cafeu.vercel.app/img/slider/baner1.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 3rd Slider */}
                <div className="relative " style={{ backgroundImage: 'url(https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg)', backgroundSize: '100%' }}>
                    <div className='flex px-24 '>
                        <div className="flex-1 justify-center flex flex-col">
                            <p className=" text-base sm:text-md md:text-lg lg:text-xl font-medium text-black">Best in <strong className='text-red-600'>Taste Trial Paradise</strong></p>
                            <h1 className="mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">Different <strong className='text-red-600'>Spice</strong> For A Different Taste</h1>
                            <p className='text-black w-4/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis dignissimos magni repellendus.</p>

                            <Link to="/allFood"><button style={{ backgroundColor: "#FF444A" }} className="w-4/12 mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg btn text-white  active:scale-95 transform transition-transform duration-200 ease-in-out">Menu</button></Link>
                        </div>
                        <div className='flex-1'>
                            <img src="https://cafeu.vercel.app/img/slider/first-slider.png" alt="" />
                        </div>
                    </div>
                </div>
            </AutoplaySlider>
        </div >
    );
};

export default Banner;