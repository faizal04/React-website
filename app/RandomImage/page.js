"use client"
import axios from "axios"
import react, { useState, useEffect } from "react"
const Gallery = () => {
    const [images, setimages] = useState([]);
    let [click, setclick] = useState(0);

    // Fetch images only once when the component mounts
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get("https://picsum.photos/v2/list");
                setimages(response.data);
            } catch (error) {
                console.error("Error fetching image data", error);
            }
        };
        fetchImages();
    }, []); // Empty dependency array ensures this runs only once
    const btnclick = function () {
        setclick((prevClick) => {
            // Increment click, but loop back to 0 if it exceeds the array length
            return prevClick < images.length - 1 ? prevClick + 1 : 0;
        });
    }
    return (
        <>
            <div className=" bg-sky-800 h-screen flex items-center justify-center flex-col">
                <div className="h-3/6 w-6/12 bg-gray-700 " >
                    {images.length > 0 && images[click] ? (
                        <img
                            src={images[click].download_url}
                            alt={`Image ${click + 1}`}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <p className="text-white">Click "Get Image" to see a random image</p>
                    )}

                </div>
                <button onClick={btnclick} class=" mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Get Image
                    </span>
                </button>
            </div>
        </>
    )
}
export default Gallery