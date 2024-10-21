import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { FaStar, FaClock, FaBicycle } from 'react-icons/fa';
import { summerData } from '@/data/summerData';

// Slick slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const LogoCarousel = () => {
  if (!summerData || summerData.length === 0) 
    return <p>No deals available</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mt-4 mb-2 pl-4">Summer Deals & Discounts</h1>
      <section className="logo-carousel mx-auto w-full logo-carousel mx-auto w-full max-w-[22rem] md:max-w-[32rem] lg:max-w-[69rem] xl:max-w-[69rem]">
        <Slider {...settings}>
          {summerData.map((logo, index) => (
            <article key={index} className="p-4">
              <Card className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div className="relative">
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
                    <h3 className="text-xl font-semibold">{logo.title}</h3>
                    <div className="flex items-center space-x-2">
                     {/* Single Rating Star */}
                     <FaStar
                        key={0}
                        className={`text-yellow-500 ${logo.rating >= 4 ? 'fill-current' : 'opacity-40'}`}
                      />
                      <span className="text-sm text-gray-600">({logo.rating})</span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-500">{logo.description}</CardDescription>

                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-1 text-gray-500" />
                      <span>{logo.time}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <FaBicycle className="mr-1 text-green-500" />
                      <span>{logo.delivery}</span>
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
