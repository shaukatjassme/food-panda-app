import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

// Logos array with image paths and descriptions
const logos = [
    { src: '/images/cuisines/73.webp', description: 'Pizza' },
    { src: '/images/cuisines/85.webp', description: 'Burgers' },
    { src: '/images/cuisines/103.webp', description: 'Biryani' },
    { src: '/images/cuisines/110.webp', description: 'Paratha' },
    { src: '/images/cuisines/126.webp', description: 'Halwa Puri' },
    { src: '/images/cuisines/252.webp', description: 'Ice Cream' },
    { src: '/images/cuisines/258.webp', description: 'Shawarma' },
    { src: '/images/cuisines/259.webp', description: 'Pasta' },
];

// Slick slider settings
const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 8,  // Number of logos to show at once
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
        <> <h1 className='text-3xl font-bold mt-4'>Cuisines for you</h1>
        <section aria-label="Cuisine Carousel" className="logo-carousel mx-auto w-full max-w-60rem">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <article key={index} className="p-4 text-center">
                        {/* Use Next.js Image component for optimized loading */}
                        <Image
                            src={logo.src}
                            alt={logo.description} // Use descriptive alt text for SEO and accessibility
                            width={300}  // Define width and height to avoid layout shifts
                            height={300}
                            className="mx-auto bg-grey-500 rounded-md transition duration-500 ease-in-out hover:scale-105 cursor-pointer bg-image-background-color"
                            priority={index === 0}  // Prioritize loading for the first image
                        />
                        {/* Add description below the image */}
                        <h3 className="mt-2 text-gray-700">{logo.description}</h3>
                    </article>
                ))}
            </Slider>
        </section>
        </>
    );
};

export default LogoCarousel;
