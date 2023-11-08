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
                    <div className='flex flex-col-reverse lg:flex-row md:flex-row lg:px-24 md:px-20 px-4 my-10'>
                        <div className="lg:flex-1 md:flex-1 flex flex-col justify-center items-center lg:items-start md:items-start text-center lg:text-start md:text-start ">
                            <p className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-black">Best in <strong className='text-red-600'>Taste Trial Paradise</strong></p>
                            <h1 className="mb-1 md:mb-5 lg:mb-5 text-sm  sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">BBQ Chicken <strong className='text-red-600'>Salad</strong> with Creamy Avocado</h1>
                            <p className='text-black text-xs md:text-lg lg:text-2xl w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis dignissimos magni repellendus.</p>

                            <Link to="/allFood"><button className="btn btn-error mt-1 md:mt-4 lg:mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600 text-white hover:bg-red-500">Menu</button>
                            </Link>
                        </div>
                        <div className='lg:flex-1 md:flex-1 flex justify-center'>
                            <img className='lg:w-full md:w-full w-1/2' src="https://cafeu.vercel.app/img/slider/baner.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 2nd Slider */}
                <div className="relative " style={{ backgroundImage: 'url(https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg)', backgroundSize: '100%' }}>
                    <div className='flex flex-col-reverse lg:flex-row md:flex-row lg:px-24 md:px-20 px-4 my-10'>
                        <div className="lg:flex-1 md:flex-1 flex flex-col justify-center items-center lg:items-start md:items-start text-center lg:text-start md:text-start ">
                            <p className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-black">Best in <strong className='text-red-600'>Taste Trial Paradise</strong></p>
                            <h1 className="mb-1 md:mb-5 lg:mb-5 text-sm  sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">Asian Lettuce Wrap<strong className='text-red-600'> Chicken</strong> Chopped Salad</h1>
                            <p className='text-black text-xs md:text-lg lg:text-2xl w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis dignissimos magni repellendus.</p>

                            <Link to="/allFood"><button className="btn btn-error mt-1 md:mt-4 lg:mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600 text-white hover:bg-red-500">Menu</button>
                            </Link>
                        </div>
                        <div className='lg:flex-1 md:flex-1 flex justify-center'>
                            <img className='lg:w-full md:w-full w-1/2' src="https://cafeu.vercel.app/img/slider/baner1.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 3rd Slider */}
                <div className="relative " style={{ backgroundImage: 'url(https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg)', backgroundSize: '100%' }}>
                    <div className='flex flex-col-reverse lg:flex-row md:flex-row lg:px-24 md:px-20 px-4 my-10'>
                        <div className="lg:flex-1 md:flex-1 flex flex-col justify-center items-center lg:items-start md:items-start text-center lg:text-start md:text-start ">
                            <p className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-black">Best in <strong className='text-red-600'>Taste Trial Paradise</strong></p>
                            <h1 className="mb-1 md:mb-5 lg:mb-5 text-sm  sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black">Different <strong className='text-red-600'>Spice</strong>For A Different Taste</h1>
                            <p className='text-black text-xs md:text-lg lg:text-2xl w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis dignissimos magni repellendus.</p>

                            <Link to="/allFood"><button className="btn btn-error mt-1 md:mt-4 lg:mt-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600 text-white hover:bg-red-500">Menu</button>
                            </Link>
                        </div>
                        <div className='lg:flex-1 md:flex-1 flex justify-center'>
                            <img className='lg:w-full md:w-full w-1/2' src="https://cafeu.vercel.app/img/slider/first-slider.png" alt="" />
                        </div>
                    </div>
                </div>
            </AutoplaySlider>
        </div >
    );
};

export default Banner;