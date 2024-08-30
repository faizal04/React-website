"use client"
import Link from "next/link"
import React from "react"


const header = (props) => {    // catching data from parent file 


    return (
        <>
            <div className="flex items-center min-h-20 w-90 bg-indigo-500">


                <h1 className="flex-1 ml-4 font-bold text-2xl capitalize">logo</h1>
                <div className="flex-1 text-xl font-medium capitalize list-none flex justify-around w-90">

                    <Link href="/">home</Link>
                    <Link href="/RandomImage">Gallery</Link>
                    <Link href="/Articles">Article</Link>
                    <Link href="/Contact">contact</Link>


                </div>
            </div>

        </>
    )
}
export default header