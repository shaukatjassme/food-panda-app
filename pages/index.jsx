import React, { useState, useEffect } from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import optionsData from '../data/options.json';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const Index = () => {

  const [places, setPlaces] = useState([]);

  // Fetch the data from the JSON file
  useEffect(() => {
    fetch('/data/places.json') // Make sure this path is correct and that the file is in the public folder
      .then((response) => response.json())
      .then((data) => setPlaces(data))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  return (
    <>

      {/* Hero-section */}
      <section
        className="hero-container hero mb-10 flex flex-col lg:flex-row bg-hero-section-bg--color"
        style={{
          backgroundImage: "url('/images/hero-crop.png')",
          backgroundSize: "contain", // Ensures the image is contained
          backgroundPosition: "100% 50%", // Adjusts the image position further to the right
          backgroundRepeat: "no-repeat", // Prevents image repetition
          width: "100%", // Ensures full width
          height: "100vh" // Ensures full height of the viewport
        }}
      >
        {/* Left side: Input field with Find button */}
        <div className="left-side flex flex-col justify-center items-start p-8 lg:w-1/2 space-y-6">
          <h1 className="lg:text-4xl text-2xl mt-24 lg:mt-0 font-bold text-gray-800">
            It's the food and groceries you love, delivered
          </h1>
          <div className="flex flex-col md:flex-row bg-white p-2 rounded-md shadow-md w-full">
      {/* Input Container */}
      <div className="relative w-full mb-2 md:mb-0">
        <input
          type="text"
          placeholder="Enter street number"
          className="pl-1 pr-16 py-3 w-full border rounded-lg focus:outline-none"
        />
        <a href="#" className="absolute right-0 lg:right-6 top-1/2 transform -translate-y-1/2 flex items-center">
          <FaMapMarkedAlt className="text-locate-me-btn" />
          <span className="ml-1 text-gray-600">Locate me</span>
        </a>
      </div>

      {/* Find button */}
      <button className="signup-btn text-white py-3 px-6 rounded-md w-full md:w-auto whitespace-nowrap">
        Find Food
      </button>
    </div>

        </div>
      </section>

      {/* hero-section-end */}


      {/* list-restaurebt-started */}
      <h1 className='text-lg font-bold px-8 mb-4 relative mt-20 sm:text-2xl lg:text-4xl'>You prepare the food, we handle the rest</h1>
      <section className="list-restaurebt"
        style={{
          backgroundImage: "url('/images/home-vendor-pk.webp')",
          backgroundSize: "cover", // Ensures the image is contained
          backgroundPosition: 'center', // Adjusts the image position further to the right
          backgroundRepeat: "no-repeat", // Prevents image repetition
          width: "100%", // Ensures full width
          height: "60vh" // Ensures full height of the viewport
        }}>

        <div className="flex justify-start items-center shop-section w-5/5 pl-20 w-50 mb-10">

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  p-8 bg-white shadow-lg  mt-14 rounded-lg ">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">List your restaurant or shop on foodpanda</h2>
                <p className='text-lg mt-4'>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
                <p className='text-lg mt-4'>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
                <p className='text-lg mt-4'>Interested? Let's start our partnership today!</p>
                <button className="signup-btn mt-4 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 "> {/* Added ml-2 for spacing */}
                  Get started
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* list-restaurebt-end */}


      {/* list-country-started */}
      <h1 className='text-lg font-bold px-8 mb-4 relative mt-20 sm:text-2xl lg:text-4xl'>You prepare the food, we handle the rest</h1>
      <section className="list-country ">
        <div className="container mx-auto">
          {/* Grid with 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 lg:p-0 cursor-pointer">
            {/* Dynamically generate the cards based on JSON data */}
            {places.map((place) => (
              <div key={place.id} className="relative group overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 transform group-hover:scale-110" // Keep rounded-lg the same
                />
                {/* Button always visible in the bottom-left corner */}
                <div className="absolute inset-0 flex items-end justify-start p-4 transition-opacity duration-300">
                  <div className="text-white">
                    {/* Button positioned at the bottom left */}
                    <p className="bg-white text-black py-2 px-4 rounded-md">
                      {place.name}
                    </p>
                  </div>
                </div>
              </div>




            ))}
          </div>

        </div>
      </section>

      {/* list-country-end */}

      {/* mobile-hero-start */}
      <h1 className=' text-lg font-bold px-8 mb-4 relative mt-20 sm:text-3xl lg:text-4xl'>Put us in your pocket</h1>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-col lg:flex-row px-10 rounded-xl bg-locate-me-btn items-center">
          {/* Left Section: Text and Buttons */}
          <div className="lg:w-1/2 w-full lg:pr-0 md:pr-0 flex flex-col items-center text-center lg:items-start md:items-center md:text-left mb-16 lg:mb-0 lg:pt-0 md:pt-20 pt-20">
            <h6 className="title-font sm:text-xl lg:text-2xl font-medium mb-4 text-white">
              Download the food and groceries you love
            </h6>

            <div className="flex flex-col items-center md:flex-row rounded-lg">
              {/* QR Code: Hidden on mobile and tablet */}
              <div className="hidden lg:block w-1/6">
                <img
                  src="/images/pkhomepageqrcode.png"
                  alt="Blurb Image"
                  className="w-75 h-auto p-2 rounded-md border border-white-900"
                />
              </div>

              {/* Text: Centered on mobile, left aligned on larger screens */}
              <div className="w-full mt-4 md:mt-0">
                <p className="text-white">
                  It's all at your fingertips – the restaurants and shops you love.
                  Find the right food and groceries to suit your mood, and make the
                  first bite last. Go ahead, download us.
                </p>
              </div>
            </div>

            {/* Buttons for Download */}
            <div className="flex flex-col lg:flex-row mt-5 items-center justify-center">
              <button className="inline-flex w-40 lg:w-20 rounded-lg items-center focus:outline-none mb-2 lg:mb-0">
                <img src="/images/apple-pic.png" alt="Apple Store" />
              </button>
              <button className="inline-flex w-40 lg:w-25 rounded-lg items-center focus:outline-none ml-0 lg:ml-3 mb-2 lg:mb-0">
                <img src="/images/gle-play.png" alt="Google Play Store" />
              </button>
              <button className="inline-flex w-40 lg:w-20 rounded-lg items-center focus:outline-none ml-0 lg:ml-3">
                <img src="/images/app-gallery.png" className="rounded-lg" alt="App Gallery" />
              </button>
            </div>
          </div>

          {/* Right Section: Image (comes under on small and tablet screens) */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/home-foodpanda-apps.webp"
            />
          </div>
        </div>
      </section>




      {/* mobile-hero-end */}

      {/* list-restaurebt-started */}
      <h1 className='text-lg font-bold px-8 mb-4 relative mt-20 sm:text-2xl lg:text-4xl'>Take your office out to lunch</h1>      <section className="list-restaurebt"
        style={{
          backgroundImage: "url('/images/home-corporate-pk.webp')",
          backgroundSize: "cover", // Ensures the image is contained
          backgroundPosition: 'center', // Adjusts the image position further to the right
          backgroundRepeat: "no-repeat", // Prevents image repetition
          width: "100%", // Ensures full width
          height: "60vh" // Ensures full height of the viewport
        }}>

        <div className="flex justify-start items-center shop-section w-5/5 pl-20 w-50 mb-10">

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  p-8 bg-white shadow-lg  mt-20 rounded-lg ">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">foodpanda for business</h2>
                <p className='text-lg mt-4'>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>

                <button className="signup-btn mt-4 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 "> {/* Added ml-2 for spacing */}
                  Get started
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* list-restaurebt-end */}

      {/* last-section */}
      <section className='container mx-auto rounded-xl px-8'>
        <h1 className='text-3xl font-bold   mb-1 relative mt-20'>Order food and groceries online from the best restaurants and shops on foodpanda</h1>
        <p className='text-lg mt-1'>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.</p>
        <h1 className='text-3xl font-bold   mb-1 relative mt-5'>What's new?</h1>
        <p className='text-lg mt-1 flex items-center'>
          <FaCheck className='text-locate-me-btn text-xl mr-2 ' />
          Wide variety of restaurants and shops, an abundance of cuisines & products.
        </p>
        <p className='text-lg mt-1 flex items-center mt-1'>
          <FaCheck className='text-locate-me-btn text-xl mr-2 ' />
          High quality delivery service.
        </p>
        <p className='text-lg mt-1 flex items-center mt-1'>
          <FaCheck className='text-locate-me-btn text-xl mr-2 ' />
          Live chat feature to give App users instant help when they need it.
        </p>
        <p className='text-lg mt-1 flex items-center mt-1 border-b-2 '>
          <FaCheck className='text-locate-me-btn text-xl mr-2 ' />
          NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you
        </p>

        <h1 className='text-2xl font-bold   mb-5 relative mt-10'>Frequently Asked Questions</h1>
        <h1 className='text-xl font-bold   mb-1 relative '>How can I get foodpanda delivery?</h1>
        <p className='text-lg mt-3'>To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>Which takeout restaurants open now near me?</h1>
        <p className='text-sm mt-3'>You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>Does foodpanda deliver 24 hours?</h1>
        <p className='text-sm mt-3'>Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>Can you pay cash for foodpanda?</h1>
        <p className='text-sm mt-3'>Yes, you can pay cash on delivery for foodpanda in Pakistan.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>How can I pay foodpanda online?</h1>
        <p className='text-sm mt-3'>You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>Can I order foodpanda for someone else?</h1>
        <p className='text-sm mt-3'>Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>How much does foodpanda charge for delivery?</h1>
        <p className='text-sm mt-3'>Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and the restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on the "Free Delivery" icon at the top of your restaurant listing.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>What restaurants let you order online?</h1>
        <p className='text-sm mt-3'>There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example,<a href="#" className='text-locate-me-btn'> KFC</a>, <a href="#" className='text-locate-me-btn'>McDonald's</a>, <a href="#" className='text-locate-me-btn'>Pizza Hut</a>,<a href="#" className='text-locate-me-btn'> OPTP</a>, <a href="#" className='text-locate-me-btn'>Hardee's</a>, <a href="#" className='text-locate-me-btn'>Domino's</a>, <a href="#" className='text-locate-me-btn'>Kababjees</a> and many-many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>Does foodpanda have minimum order?</h1>
        <p className='text-sm mt-3'>Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>What is the difference between delivery and Pick-Up?</h1>
        <p className='text-sm mt-3'>If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.</p>

        <h1 className='text-xl font-bold   mb-1 relative mt-6'>Order food and groceries online with foodpanda now and enjoy a great dining experience!</h1>


      </section>
    </>
  )
}

export default Index