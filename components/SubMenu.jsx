import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShoppingCart, faStore, faShop } from '@fortawesome/free-solid-svg-icons';


const SubMenu = () => {
    return (
        <>
            <div className=' bg-white fixed top-20 left-0 right-0 z-50'>
                <nav className='shadow-lg'>
                    <ul className="flex justify-center space-x-4">
                        <li className="active p-4 border-b-2 border-b-custom-border-color">
                            <Link href="/delivery">
                                <FontAwesomeIcon icon={faTruck} className='mr-2' /> Delivery
                            </Link>
                        </li>
                        <li className="p-4 border-b-2 border-b-transparent hover:border-b-custom-border-color">
                            <Link href="/pickup">
                                <FontAwesomeIcon icon={faShoppingCart} className='mr-2' /> Pickup
                            </Link>
                        </li>
                        <li className="p-4 border-b-2 border-b-transparent hover:border-b-custom-border-color">
                            <Link href="/pandamart">
                                <FontAwesomeIcon icon={faStore} className='mr-2' /> Pandamart
                            </Link>
                        </li>
                        <li className="p-4 border-b-2 border-b-transparent hover:border-b-custom-border-color">
                            <Link href="/shops">
                                <FontAwesomeIcon icon={faShop} className='mr-2' /> Shops
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default SubMenu