import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen pt-[80px] bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full pt-5 lg:pt-0'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Arun C V
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Passionate and self-taught MERN stack developer capable to convert
          any wireframe design and business logic into  fully functional webapp.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>

          {/* Social icons */}
          <div className='flex lg:hidden mt-10 top-[35%]'>
            <ul className='flex gap-3 mx-auto '>
              <li className=' h-[60px] flex justify-between items-center  bg-blue-600'>
                <a
                  className='flex justify-between items-center w-full text-gray-300'
                  target="blank"
                  href='https://linkedin.com/in/cvarun98'
                >
                 Linkedin <FaLinkedin size={30} />
                </a>
              </li>
              <li className=' h-[60px] flex justify-between items-center bg-[#333333]'>
                <a
                  className='flex justify-between items-center w-full text-gray-300'
                  target="blank"
                  href='https://github.com/cv-arun'
                >
                  <FaGithub size={30} />
                </a>
              </li>
              <li className=' h-[60px] flex justify-between items-center  bg-[#6fc2b0]'>
                <Link to='contact' smooth={true} duration={500}>
                  <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='/'
                  >
                   <HiOutlineMail size={30} />
                  </a>
                </Link>

              </li>
              <li className=' h-[60px] flex justify-between items-center  bg-[#565f69] '>
                <a
                  className='flex justify-between items-center w-full text-gray-300 '
                  href='/resume.pdf' download={true}
                >
                  <BsFillPersonLinesFill size={30} />Resume 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
