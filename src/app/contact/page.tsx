'use client'

import Navbar from "../../../components/navbar";
import Image from "next/image";
import Footer from "../../../components/footer";

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <div className="w-full h-80">
            <Image
              src='/Luxurious Living Space with Landscape View.jpeg'
              alt="about-banner img"
              width= {1960}
              height={1200}
              className="z-0 w-screen h-90 object-cover absolute"
            />
        </div>
        <div className="w-full h-auto">
            <div className="flex justify-center items-center">
                <h1 className="text-white text-3xl">
                    Contact
                </h1>
            </div>
            <section className="grid grid-cols-2 bg-black w-300 h-100 mx-auto rounded">

            </section>
            <section className="grid grid-cols-2 w-300 h-100 mx-auto rounded">
                <div className="w-full h-full bg-black">

                </div>
                <div className="w-full h-full bg-orange-400"></div>
            </section>
            <Footer/>
        </div>
    </div>
  )
}
