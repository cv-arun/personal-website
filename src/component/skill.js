import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Micro from '../assets/microservice.png';
import AWS from '../assets/aws.png';
import Git from '../assets/gitlogo.webp';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import PostgreSQL from '../assets/psql.png'
import Bootstrap from '../assets/bootstrap.png'
import Socket from '../assets/socketio.png'
import Express from '../assets/express.png'
import MUI from '../assets/mui.png'
import Redux from '../assets/redux.png'




const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 md:mt-0 mt-96'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'> These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#E44D26] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#0277BD] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#FFD600] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#00D7FE] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#764ABC] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Redux} alt="HTML icon" />
                        <p className='my-4'>Redux Toolkit</p>
                    </div>
                    <div className='shadow-md shadow-[#f16056] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                        <p className='my-4'>Git</p>
                    </div>
                    <div className='shadow-md shadow-[#8CC84B] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#828282] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                        <p className='my-4'>Express</p>
                    </div>
                    <div className='shadow-md shadow-[#4CAF50] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#2F6792] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PostgreSQL} alt="HTML icon" />
                        <p className='my-4'>PostgreSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#1b8d97] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={Micro} alt="HTML icon" />
                        <p className='my-4'>Microservice</p>
                    </div>
                    <div className='shadow-md shadow-[#44A8B3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#764ABC] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#007FFF] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MUI} alt="HTML icon" />
                        <p className='my-4'>MUI</p>
                    </div>
                    <div className='shadow-md shadow-[white] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Socket} alt="HTML icon" />
                        <p className='my-4'>Socket.io</p>
                    </div>
                    <div className='shadow-md shadow-[#eeeeee] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                        <p className='my-4'>AWS EC2</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
