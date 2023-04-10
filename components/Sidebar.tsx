import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { render } from 'react-dom';
import { createOrGetUser } from '../utils';

import { GoogleLogin , googleLogout } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';

import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import useAuthStore from '../store/authStore';
import Discover from './Discover';
import Footer from './Footer';
const Sidebar = () => {
  const [showSideBar, setshowBar] = useState<Boolean>(true)
  const { pathname } = useRouter();
   const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';
  // const userprofile = false
  const {userProfile ,addUser  } :any = useAuthStore()

  const login = useGoogleLogin({
  onSuccess: tokenResponse =>  {
    const response = {
      credential : tokenResponse.access_token
    }
    createOrGetUser(response , addUser)
  },
  
   
});

  return (
    <div>
      <div className='block xl:hidden m-2 ml-4 mt-3 text-xl' 
      onClick={() => {
        setshowBar((prev) => !prev)
      }}>
          {
            showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />
          }
      </div>

      {
        showSideBar && (
          <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
              <div className='xl:border-b-2 border-gray-100 xl:pb-4'>
                <Link href={"/"}>
                  <div className={normalLink}>
                    <p className='text-2xl'>
                      <AiFillHome />
                    </p>
                    <span className='text-xl hidden xl:block'>
                      For You
                    </span>
                  </div>
                </Link>
              </div>
               {/* {
            !userProfile && (
              <div className='pc-2 py-4 hidden xl:block'>
                <p className='text-gray-400'>Log in to like and comment videos</p>
                <div className='pr-4'>
                  <button onClick={() => login()} className='bg-white border-[1px] px-6 py-3 cursor-pointer border-[#F51997] outline-none rounded-md w-full mt-3 hover:text-white hover:bg-[#F51997] text-lg text-[#F51997]'>
                          Log in
                  </button>
                </div>
              </div>
            )} */}

            <Discover/>

            <Footer/>

          </div>
        )}
    </div>
  )
}

export default Sidebar