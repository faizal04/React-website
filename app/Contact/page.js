"use client"
import Link from "next/link"
import react, { useState } from "react"
const Contact = function () {
    const [messagevisible, setmessagevisibility] = useState(false);
    const sendbtnclick = () => {
        setmessagevisibility(true);
    }
    return (
        <>
            {/* about section */}
            <div className="bg-sky-800 flex h-screen items-center justify-between" >


                <div class="h-3/6 flex-1 mr-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

                    <div className="p-5 flex justify-center items-center flex-col">
                        <a href="#">
                            <h5 className="mt-4 mb-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hello, I'm Faisal Harray, a computer science student at the Islamic University of Science and Technology specializing in software engineering. I am passionate about using technology to make a positive impact on the world and strive to be a valuable asset to the tech industry. My skillset includes expertise in multiple programming languages such as C, C++, SQL, and JavaScript</p>

                    </div>
                    <div className="flex flex-col gap-4">


                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 ml-6">
                            Visit Portfolio : <Link href="https://faisalharray.netlify.app/" class="text-blue-700 hover:underline dark:text-blue-500">Faisal Harray</Link>
                        </div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 ml-6">
                            Projects : <Link href="https://faisalharray.netlify.app/" class="text-blue-700 hover:underline dark:text-blue-500">Here</Link>
                        </div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 ml-6">
                            linkedIn : <Link href="https://www.linkedin.com/in/faisal-harray-00a93925b/" class="text-blue-700 hover:underline dark:text-blue-500">Here</Link>
                        </div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 ml-6">
                            Github: <Link href="https://github.com/faizal04" class="text-blue-700 hover:underline dark:text-blue-500">Here</Link>
                        </div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 ml-6">
                            Instagram: <Link href="https://www.instagram.com/the_faisal_harray_/ " class="text-blue-700 hover:underline dark:text-blue-500">Here</Link>
                        </div>
                    </div>
                </div>


                {/* message section */}

                <div class=" w-6/12 flex-1 h-3/6  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700  ">
                    <form class="space-y-6" action="#">
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Contact Us</h5>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <input type="text" name="text" id="messsage" placeholder="we care" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>


                        <button onClick={sendbtnclick} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>

                        <div className={messagevisible == true ? "" : "hidden"}>
                            <h5 className="text-green-800 font-bold">Message sent</h5>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}
export default Contact