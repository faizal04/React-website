"use client"
import React from 'react';
import Link from 'next/link';


function HomePage() {
    return (
        <div className=" flex items-end justify-around bg-no-repeat bg-cover bg-center bg-backimage bg-sky-200 h-screen">
            <div
                class="hover:scale-110 mb-4 ml-8 px-6 h-1/3 w-1/4 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">

                <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-100 ">Gallery
                </h4>
                <p class="mt-4 text-white dark:text-gray-300">Explore a vibrant collection of images in our gallery, dynamically generated using Lorem Picsum. Each visit offers a unique visual experience, powered by the seamless integration of React and Tailwind CSS.</p>

                <div class="mt-8 space-y-8">
                </div>
            </div>

            <div
                class="hover:scale-110 mb-4 ml-8 px-6 h-1/3 w-1/4 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">

                <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-100">Articles
                </h4>
                <p class="mt-4 text-white dark:text-gray-300">Explore [Blog Topic 1] from my WordPress blog for fresh perspectives and detailed insights. Read more to stay informed!</p>

                <div class="mt-8 space-y-8">
                </div>
            </div>


            <div
                class="hover:scale-110 mb-4 ml-8 px-6 h-1/3 w-1/4 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg">

                <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-100">Connect
                </h4>
                <p class="mt-4 text-white dark:text-gray-300">Connect with me on social media! Follow my latest updates, projects, and more on <br />
                </p>
                <div className='mt-16 flex justify-around items-center'>
                    <img onClick={() => {
                        window.location.href = "https://www.instagram.com/the_faisal_harray_/";
                    }}
                        className=' cursor-pointer h-16 rounded-r ' src="./images/ins1.png" alt='img' />

                    <img onClick={() => {
                        window.location.href = "https://github.com/faizal04";
                    }}
                        className=' cursor-pointer h-14 w-14 rounded-r ' src="./images/github.png" alt='img' />
                </div>



            </div>


        </div>
    );
}

export default HomePage;
