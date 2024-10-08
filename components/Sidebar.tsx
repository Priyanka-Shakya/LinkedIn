import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { getAllPosts } from '@/lib/serveraction';

const Sidebar = async({ user }: { user: any }) => {
    const posts = await getAllPosts();
    return (
        <div className='hidden md:block w-[20%] h-fit border border-gray-200 bg-white rounded-lg'>
            <div className='flex flex-col relative items-center '>
                <div className='w-full h-16 overflow-hidden'>
                    {
                        user && (
                            <Image
                                src={'/background.jpeg'}
                                alt="Banner"
                                width={200}
                                height={200}
                                className='w-full h-full rounded-t'
                            />
                        )
                    }
                </div>
                <div className='my-1 absolute top-10'>
                    <ProfilePhoto src={user ? user?.imageUrl : "/background.jpeg"} />
                </div>
                <div className='border-b border-b-gray-300'>
                    <div className='p-2 mt-5 text-center'>
                        <h1 className='font-bold hover:underline cursor-pointer'>{user ? `${user?.username}` : "Patel Mern Stack"}</h1>
                        <p className='text-xs'>@{user ? `${user?.username}` : 'username'}</p>
                    </div>
                </div>
            </div>
            <div className='text-xs'>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Post Impression</p>
                    <p className='text-blue-500 font-bold'>88</p>
                </div>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Posts</p>
                    <p className='text-blue-500 font-bold'>{posts.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
