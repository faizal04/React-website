
import react from "react"
import Link from "next/link"




const Article = () => {
    return (
        <>

            <div className="flex relative justify-around items-center h-screen bg-sky-800">
                <header className=" absolute top-40">
                    <h1 className="capitalize flex items-center text-5xl font-extrabold dark:text-sky-200">latest article</h1>
                </header>

                {/* article 1 */}

                <Link href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96  md:rounded-none md:rounded-s-lg" src="https://wordwander.in/wp-content/uploads/2024/08/pexels-vjapratama-1310102-1-1024x683.jpg" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How Salah Enriches Your Life</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Salah, or Islamic prayer, is a central practice in Islam and stands as one of the Five Pillars that shape a Muslim’s faith and practice. It is more than just a daily ritual; it is a profound act of devotion that connects believers with their Creator</p>
                    </div>
                </Link>


                {/* article 2 */}

                <Link href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96  md:rounded-none md:rounded-s-lg" src="https://wordwander.in/wp-content/uploads/2024/08/pexels-haleyve-2087387-1024x683.jpg" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Patience and Faith #1</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In the vast tapestry of Islamic teachings, the story of Prophet Ayyub (AS), known as Job in biblical traditions, stands out as a powerful testament to the virtues of patience, faith, and unwavering trust in Allah.</p>
                    </div>
                </Link>
            </div>



        </>
    )
}
export default Article