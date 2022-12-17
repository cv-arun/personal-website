import React from 'react';

import socialMeida from '../assets/Tether.png'
import b4booksUser from '../assets/b4booksUser.png'
import b4booksAdmin from '../assets/b4booksAdmin.png'
import letsChat from '../assets/letsChat.png'
import OLX from '../assets/olx.png'
import Incubation from '../assets/incubation.png'

const Work = () => {
    return (
        <div name='work' className='w-full pt-60 sm:pt-0 md:h-[150vh]  text-gray-300 bg-[#0a192f] md:mt-0 mt-44'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'> Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 md:grid-rows-3 gap-5 h-[700px] '>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${socialMeida})`, backgroundSize: 'cover' }}
                        className='shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div '
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 w-full h-full bg-[#0a192f] '>
                            <div className='text-2xl text-center mt-10 font-bold text-white'>
                                Social Media
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='https://t-ether.click' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/cv-arun/Tether' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${b4booksUser})`, backgroundSize: 'cover'  }}
                        className='shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 w-full h-full  bg-[#0a192f] '>
                            <div className='text-2xl text-center mt-10 font-bold text-white tracking-wider'>
                                Rental platform User 
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='https://b4books.store' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/cv-arun/B4books' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${b4booksAdmin})`, backgroundSize: 'cover'  }}
                        className='shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 w-full h-full bg-[#0a192f] '>
                            <div className='text-2xl text-center mt-10 font-bold text-white tracking-wider'>
                            Rental platform Admin
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='https://b4books.store/admin' >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/cv-arun/B4books' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Incubation})`, backgroundSize: 'cover'  }}
                        className='shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 w-full h-full bg-[#0a192f] '>
                            <div className='text-2xl text-center mt-10 font-bold text-white tracking-wider'>
                                Incubation Management
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='https://zippy-sunburst-3c5394.netlify.app/admin'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/cv-arun/IncubationManger-react-node-' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${letsChat})`, backgroundSize: 'cover'  }}
                        className='shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 w-full h-full bg-[#0a192f] '>
                            <div className='text-2xl text-center mt-10 font-bold text-white tracking-wider'>
                                Chat application
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/cv-arun/Lets-Chat' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${OLX})`, backgroundSize: 'cover'  }}
                        className='shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 w-full h-full bg-[#0a192f] '>
                            <div className='text-2xl text-center mt-10 font-bold text-white tracking-wider'>
                                OLX-clone-react
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/cv-arun/olx-clone' target='_blank' rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Work;
