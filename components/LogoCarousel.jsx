import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { logos } from '@/data/logos';  // Make sure this path is correct


// Slick slider settings
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,  // Show 3 logos on tablet devices
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,  // Show 2 logos on mobile devices
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,  // Show 1 logo on small mobile devices
            },
        },
    ],
};

const LogoCarousel = () => {
    return (
        <>   
        <h1 className='text-3xl font-bold'>Your daily deals</h1>
        <section aria-label="Logo Carousel" className="logo-carousel mx-auto w-full w-full max-w-[22rem] md:max-w-[32rem] lg:max-w-[69rem] xl:max-w-[60rem]">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <article key={index} className="p-4">
                        {/* Use Next.js Image component for optimized loading */}
                        <Image
                            src={logo}
                            alt={`Slide image ${index + 1}`}  // Descriptive alt text for SEO
                            width={300}  // Define width to prevent layout shifts
                            height={300} // Define height to prevent layout shifts
                            className="mx-auto rounded-md transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
                            priority={index === 0}  // Prioritize the first image for faster loading
                        />
                    </article>
                ))}
            </Slider>
        </section>
        </>
    );
};

export default LogoCarousel;
