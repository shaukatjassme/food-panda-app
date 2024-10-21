import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { FaStar, FaClock, FaBicycle } from 'react-icons/fa';
import { deliveryData } from '@/data/deliveryData';  // Make sure the path is correct

// Slick slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4,  // Number of logos to show at once
  slidesToScroll: 1,
  autoplay: false,
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

const LogoCarousel = ({ filter }) => {
  // State for the title
  const [title, setTitle] = useState('Delivery Fee Savers');

  // Helper function to parse and compare time
  const parseTime = (time) => {
    const match = time.match(/\d+/g); // Extract all numbers
    if (match) {
      const times = match.map(Number); // Convert the extracted values to numbers
      return Math.max(...times); // Return the maximum value in the time range
    }
    return 0;
  };

  // Filter logos based on the selected filter
  const filteredLogos = filter === 'fastest'
    ? deliveryData.filter((logo) => logo.rating < 4.6) // Filter by rating
    : filter === 'rating'
      ? deliveryData.filter((logo) => logo.rating < 4.6) // Apply filter for rating
      : filter === 'distance'
        ? deliveryData.filter((logo) => parseTime(logo.time) <= 20) // Filter by distance (20 minutes or less)
        : deliveryData; // Show all logos if no filter is selected

  // Update title based on the filter
  useEffect(() => {
    if (filter === 'fastest') {
      setTitle('358 Restaurants found');
    } else if (filter === 'distance') {
      setTitle('Restaurants within 20 minutes');
    } else {
      setTitle('Delivery Fee Savers');
    }
  }, [filter]);

  return (
    <>
      <h1 className='text-3xl font-bold mt-4 mb-2 pl-4'>{title}</h1>
      <section aria-label="Popular Cuisines" className="logo-carousel mx-auto w-full max-w-[22rem] md:max-w-[32rem] lg:max-w-[69rem] xl:max-w-[69rem]">
        <Slider {...settings}>
          {filteredLogos.map((logo, index) => (
            <article key={index} className="p-4">
              <Card className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div className="relative">
                  {/* Off Price Tags */}
                  <span className="absolute top-0 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold z-50">
                    {logo.offPrice}
                  </span>
                  <span className="absolute top-10 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold z-50">
                    {logo.offPrice2}
                  </span>
                  <div className="h-[150px] w-[200px]">
                    <Image
                      src={logo.src}
                      alt={logo.title}
                      fill
                      className="object-cover transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
                      loading="lazy"
                    />
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    {/* Title */}
                    <h3 className="text-xl font-semibold">{logo.title}</h3>
                    <div className="flex items-center space-x-2">
                      {/* Rating stars */}
                      <FaStar
                        key={0}
                        className={`text-yellow-500 ${logo.rating >= 4 ? 'fill-current' : 'opacity-40'}`}
                      />
                      {/* Rating number */}
                      <span className="text-sm text-gray-600">({logo.rating})</span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-500">{logo.description}</CardDescription>

                  {/* Time and delivery info */}
                  <div className="flex justify-between items-center space-x-4 mt-1">
                    {/* Time info */}
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-1 text-gray-500" /> {/* Time icon */}
                      <span className="pt-1">{logo.time}</span> {/* Time text */}
                    </div>

                    {/* Delivery info */}
                    <div className="flex items-center text-green-600">
                      <FaBicycle className="mr-1 text-green-500" /> {/* Bicycle icon */}
                      <span>{logo.delivery}</span> {/* Delivery text */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default LogoCarousel;
