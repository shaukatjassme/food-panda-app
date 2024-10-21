import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { cuisinesData } from '@/data/cuisinesData';  // Make sure this path is correct

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
    console.log("Cusnines Data are:", cuisinesData);
  // Check if cuisinesData is defined to avoid errors
  if (  !cuisinesData || cuisinesData.length === 0) {
    return <p>No cuisines data available</p>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mt-4">Cuisines for you</h1>
      <section aria-label="Cuisine Carousel" className="logo-carousel mx-auto w-full logo-carousel mx-auto w-full max-w-[22rem] md:max-w-[32rem] lg:max-w-[69rem] xl:max-w-[69rem]">
        <Slider {...settings}>
          {cuisinesData.map((logo, index) => (
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
