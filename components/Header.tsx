import React from 'react';
import amazonlogo from '../public/amazonlogo.png';
import { LocationMarkerIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

const Header = () => {
    return <div className="w-screen border-2 border-red-500 h-24 ">
        <div className="w-full  h-16 ">
            <div className='flex justify-between items-center'>
                {/* //* this is logo */}
                <div className='border-2 w-[10%]'>
                    <h1>
                        lore
                    </h1>
                    {/* <img src='' alt="nor found" /> */}
                </div>
                {/* //* this is search an dlocation */}
                <div className='flex border-2 w-[65%]'>
                    {/* //todo: this is lcoation */}
                    <div className='flex items-center w-[25%]'>
                        <div>
                            <LocationMarkerIcon className='h-5' />
                        </div>
                        <div >
                            <h1 className='text-sm'>
                                Hello
                            </h1>
                            <h1 className='font-bold'>
                                Select you location
                            </h1>
                        </div>
                    </div>
                    {/* //todoL this is search */}
                    <div className=' border w-[75%]'>
                        <div className='flex '>
                            <div className='w-[10%]'>
                                All
                            </div>
                            <div className='w-[80%] bg-yellow-500'>
                                Search Products
                            </div>
                            <div className='w-[10%]'>
                                <SearchIcon className='h-5' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* //* this is search an dlocation */}
                <div className='w-[25%] flex items-center justify-around'>
                    <div>
                        IN
                    </div>
                    <div>
                        <h1>Hello, Sign in</h1>
                        <h1 className='font-bold'>
                            Account &  Lists
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Return's <p className='font-bold'>
                                &  Orders
                            </p>
                        </h1>

                    </div>
                    <div className='flex'>
                        <ShoppingCartIcon className='h-5' />
                        <h1 className='font-bold'>
                            Cart
                        </h1>
                    </div>
                </div>

            </div>
        </div>
        <div>All  Lorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta explicabo asperiores quo quasi magni error eaque expedita saepe nam.
        </div>
    </div>
};

export default Header;
