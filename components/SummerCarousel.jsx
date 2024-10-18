import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardDescription } from '@/components/ui/card'; 
import { FaStar, FaClock, FaBicycle } from 'react-icons/fa';

// Logos array with image paths, titles, ratings, descriptions, delivery, time, and off price
const logos = [
  { src: '/images/cuisines/73.webp', title: 'Pizza', rating: 4.5, description: 'Delicious cheesy pizza with fresh.', delivery: 'Free', time: '15-10 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.390 off Rs.390' },
  { src: '/images/cuisines/85.webp', title: 'Burgers', rating: 4.0, description: 'Juicy burgers made with 100% beef.', delivery: 'Free', time: '5-20 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.190 off Rs.7390' },
  { src: '/images/cuisines/103.webp', title: 'Biryani', rating: 4.8, description: 'Aromatic rice dish with tender meat.', delivery: 'Free', time: '15-30 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.290 off Rs.6390' },
  { src: '/images/cuisines/110.webp', title: 'Paratha', rating: 4.2, description: 'Flaky, buttery flatbread perfect.', delivery: 'Free', time: '25-40 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.490 off Rs.5390' },
  { src: '/images/cuisines/126.webp', title: 'Halwa Puri', rating: 4.7, description: 'A popular Pakistani breakfast treat.', delivery: 'Free', time: '5-15 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.590 off Rs.4390' },
  { src: '/images/cuisines/252.webp', title: 'Ice Cream', rating: 4.9, description: 'Creamy ice cream in various flavors.', delivery: 'Free', time: '12-20 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.690 off Rs.3390' },
  { src: '/images/cuisines/258.webp', title: 'Shawarma', rating: 4.3, description: 'Grilled meat wrapped in pita bread.', delivery: 'Free', time: '13-30 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.790 off Rs.2390' },
  { src: '/images/cuisines/259.webp', title: 'Pasta', rating: 4.6, description: 'Classic Italian pasta with rich sauces.', delivery: 'Free', time: '35-50 min', offPrice: 'Rs.390 off Rs.390', offPrice2: 'Rs.890 off Rs.1390' },
];

// Slick slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 700,
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
    <h1 className='text-3xl font-bold mt-4 mb-2'>Summer Deals & Discounts</h1>
    <section aria-label="Popular Cuisines" className="logo-carousel mx-auto w-full max-w-60rem">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <article key={index} className="p-4">
            <Card className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              
              <div className="relative">
                {/* Off Price Tag - Positioned on the left side of the card image */}
                <span className="absolute top-0 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold">
                  {logo.offPrice} 
                </span>
                <span className="absolute top-10 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold z-50">
                  {logo.offPrice2} 
                </span>
                <Image
                  src={logo.src}
                  alt={logo.title} // Descriptive alt text for better accessibility and SEO
                  layout="responsive"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
                  loading="lazy" // Improves performance by lazy-loading images
                />
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  {/* Title with heading for better SEO */}
                  <h3 className="text-xl font-semibold">{logo.title}</h3>
                  <div className="flex items-center space-x-2">
                    {/* Rating stars */}
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={`text-yellow-500 ${starIndex < Math.round(logo.rating) ? 'fill-current' : 'opacity-40'}`}
                      />
                    ))}
                    {/* Rating number */}
                    <span className="text-sm text-gray-600">({logo.rating})</span>
                  </div>
                </div>

                <CardDescription className="text-gray-500">{logo.description}</CardDescription>

                {/* Time and delivery info with icons */}
                <div className="flex justify-between items-center space-x-4 mt-1">
                  {/* Time info */}
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-1 text-gray-500" /> {/* Time icon */}
                    <span className="pt-1">{logo.time}</span> {/* Time text */}
                  </div>

                  {/* Free delivery info */}
                  <div className="flex items-center text-green-600">
                    <FaBicycle className="mr-1 text-green-500" /> {/* Cycle icon */}
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
