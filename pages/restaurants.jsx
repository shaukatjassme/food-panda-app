import React from 'react'
import Sidebar from '../components/Sidebar';
import { FaSearch } from 'react-icons/fa';
import LogoCarousel from '../components/LogoCarousel';
import CuisinesCarousel from '../components/CuisinesCarousel';
import SummerCarousel from '../components/SummerCarousel';
import DeliveryCarousel from '../components/DeliveryCarousel';


const restaurants = () => {
  const items = ['Item 1', 'Item 30', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5'];
  return (
    <>

      <div style={{ display: 'flex' }} className='bg-grey-900'>
        {/* Ensure items are passed as a prop */}
        <Sidebar items={items} className='' />
        {/* Main content area */}
        <div style={{ marginLeft: '25px', padding: '20px', flexGrow: 1 }}>


          {/* Main-div */}


          <div className='bg-white  '>

            <div className="relative w-full mt-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-black" />
              </div>
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, and dishes"
                className="w-full border border-gray-200 text-bold rounded-3xl pl-10 pr-2 py-4 hover:bg-gray-100 focus:outline-none"
              />
            </div>


           <div className='container overflow-hidden mt-5'>
           <LogoCarousel />
           <CuisinesCarousel />
           <SummerCarousel />
           <DeliveryCarousel />
           </div>
          </div>
        

          {/* Main-div-end */}

        </div>
      </div>

    </>
  )
}

export default restaurants