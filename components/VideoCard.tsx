import React, { useEffect, useRef, useState } from 'react'
import { Video } from '../types'
import {NextPage} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { BsPlay } from 'react-icons/bs';

interface IProps {
  post: Video
}
const VideoCard: NextPage<IProps> = ({post}) => {
    // console.log(post._id);
  const videoRef = useRef<HTMLVideoElement>(null);
    const [isOnHover, setisOnHover] = useState(false)
    const [isVideoPlaying, setisVideoPlaying] = useState(false)
    const [isVideoMuted, setisVideoMuted] = useState(false)

    console.log(isOnHover);
    

    const handlStartandPauseClick = () => {
        console.log('I"m here');
        
        if(isVideoPlaying){
            videoRef?.current?.pause()
            videoRef?.current?.pause()

            setisVideoPlaying(false)
        }else{
            videoRef?.current?.play()
            setisVideoPlaying(true)
        }
    }

     useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted]);

  return (
    <div className='flex flex-col border-b-2 border-gray-300 pb-6 '>
        <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
            <div className='md:w-16 md:h-16 w-10 h-10'>
                <Link href={'/'}>
                   <>
                        <Image 
                        width={62}
                        height={62}
                        className='rounded-full'
                        src={post.postedBy.image}
                        layout={"responsive"}
                        alt={'profilImage'}
                        
                        />
                    </> 
                </Link>

            </div>

            <div>
                <Link href={'/'}>
                    <div className='flex items-center gap-2'>
                        <p className='flex gap-2 items-center md:text-md font-bold text-primary'>{post.postedBy.userName} {'  '}
                            <GoVerified className='text-blue-500 text-md' />
                        </p>

                        <p className='capitalize font-md text-xs hidden ms:block text-gray-500'>
                            {post.postedBy.userName}
                        </p>
                        
                    </div>
                </Link>
            </div>
        </div>
        <div className='lg:ml-20 flex gap-4 relative'>
            <div   onMouseLeave={() => {setisOnHover(false)}}
                    onMouseEnter={() => {setisOnHover(true)}}
                     className='rounded-3xl'>
                <Link href={'/'}>
                    <video 
                    ref={videoRef}
                  
                    src={post.video?.asset.url} 
                    loop 
                    className='lg:w-[600px] h-[300] md:h-[400px] 
                    lg:h-[530px] w-[200px] rounded-2xl  
                    cursor-pointer bg-gray-300'/>
                </Link>

                
                   {isOnHover && (
            <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] lg:w-[600px] p-3'>
              {isVideoPlaying ? (
                <button onClick={handlStartandPauseClick}>
                  <BsFillPauseFill className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button onClick={handlStartandPauseClick}>
                  <BsFillPlayFill className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
              {isVideoMuted ? (
                <button onClick={() => setisVideoMuted(false)}>
                  <HiVolumeOff className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button onClick={() => setisVideoMuted(true)}>
                  <HiVolumeUp className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
            </div>
          )}
                
            </div>

        </div>
    </div>
  )
}

export default VideoCard