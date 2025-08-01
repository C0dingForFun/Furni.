'use client'

// import Navbar from "../../components/navbar";
import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import Navbar2 from "../../components/nav";
import Footer from "../../components/footer";

export default function Home(){
  // const products = (await getProducts()) || [];
  const [isClicked, setIsClicked] = useState(false);

  const toggleClass = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="w-full">
      <Navbar2/>
        <Image
            src='/home_banner.jpeg'
            alt="home-banner img"
            width= {1960}
            height={1200}
            className="z-0 absolute w-full h-screen object-cover"
        />
        <div className="flex justify-start items-center relative min-h-screen banner-content">
          <div className="max-w-4xl">
            <h1 className="md:text-8xl sm:text-4xl text-4xl">
              Modern Furni.
            </h1>
            <div className="space-x-5 mt-5">
              <button className="border bg-transparent text-white px-5 py-2 rounded mt-5 hover:bg-orange-400 hover:text-white cursor-pointer hover:border-transparent">
                Shop Now
              </button>
              <button className="border bg-transparent text-white px-5 py-2 rounded mt-5 hover:bg-orange-400 hover:text-white cursor-pointer hover:border-transparent">
                Explore
              </button>
            </div>
          </div>
        </div>
        <section className="mb-10 w-full mx-auto px-4">
          <h1 className="text-center mb-10 text-5xl font-semibold text-orange-400"> 
            Shop By Category
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center mx-auto m-5">
            <div className="flex justify-start items-end text-white">
              <Image
                src={'/home_chair.png'}
                alt="Home-chairs"
                width={400} 
                height={100}
                className="z-0  rounded"
              />
              <h2 className="text-start md:text-4xl text-5xl text-white  z-2 absolute pb-5 px-2">
                Chairs
              </h2>
            </div>
            <div className="flex justify-start items-end text-white">
              <Image
                src={'/home_sofa.png'}
                alt="Home-sofas"
                width={400}
                height={100}
                className="z-0  rounded"
              />
              <h2 className="text-start md:text-4xl text-5xl z-2 absolute pb-5 px-2">
                Sofas
              </h2>
            </div>
            <div className="flex justify-start items-end text-white ">
              <Image
                src={'/home_table.png'}
                alt="Home-tables"
                width={400}
                height={100}
                className="z-0  rounded"
              />
              <h2 className="text-start md:text-4xl text-5xl z-2 absolute pb-5 px-2">
                Tables
              </h2>
            </div>
          </div>
          <div className="flex justify-center my-5 ">
            <button className="bg-orange-400 text-white p-2 px-10 rounded hover:bg-white hover:text-black cursor-pointer border">
              Show More
            </button>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center mb-10 ">
               <Image
                src={'/home_living_room.jpeg'} 
                alt="Home-living-room"
                width={900} 
                height={200}
                className="z-0 w-full rounded h-100"
              />
              <h2 className="text-5xl text-white z-2 absolute pb-5 px-5">
                Living Room
              </h2>
          </div>
          <div className="flex justify-center items-center mb-10">
              <Image
                src={'/home_dining_room.jpeg'}
                alt="Home-dining-room"
                width={900}
                height={100}
                className="z-0 w-full rounded h-100"
              />
              <h2 className="text-5xl text-white image-resonsive z-3 absolute pb-5 px-5">
                Dining Room
              </h2>
          </div>
        </section>
        <section>
            <div className="grid lg:grid-cols-2 gap-10 mx-auto px-5 mb-10">
                <div className="text-start">
                  <div className="lg:mb-30 mb-10">
                    <h1 className="text-5xl pb-2 font-semibold text-orange-400 pt-5">
                      About Us
                    </h1>
                    <p className="text-wrap pb-5 text-xl">
                      Welcome to Furni, where style meets functionality in every piece. We believe furniture should do more than fill a space—it should transform it.
                    </p>
                    <h3 className="text-3xl font-semibold pb-5 text-orange-400">
                      Why Choose Us?
                    </h3>
                    <p className="text-wrap text-xl">
                      1. Timeless Design – From modern minimalism to rustic charm,  our collections suit every aesthetic. <br /><br />
                      2. Premium Craftsmanship – Built with high-quality materials ensuring durability and comfort. <br /> <br />
                      3.Smart Solutions – Space-saving designs and innovative features tailored for modern living.
                    </p>
                  </div>
                  <div>
                    <Image 
                      src={'/About1_home.jpg'}
                      alt="About pic 1"
                      width={1200}
                      height={800}
                      className="w-full h-[28rem] md:h-[34rem] object-cover rounded"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image 
                      src={'/About2_home.jpg'}
                      alt="About pic 2"
                      width={1200}
                      height={800}
                      className="w-full h-[28rem] md:h-[34rem] object-cover rounded lg:mb-30 mb-10"
                    />
                  </div>
                  <div className="text-wrap text-xl">
                    <div>
                      <h3 className="text-3xl text-semibold text-orange-400 pb-5">
                        Subheading 2
                      </h3>
                      <p>
                        At Furni, we bring style, quality, and functionality together to create furniture that enhances your home.
                        With 50,000+  satisfied customers and 20 branches nationwide, we offer timeless designs, premium
                        craftsmanship, and smart solutions tailored for modern living. Whether you’re furnishing a
                        cozy apartment or a spacious home, our collections are built to complement every space 
                        effortlessly. Explore our range online or visit a branch near you to experience the 
                        perfect blend of design and comfort.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 place-content-around place-items-start pt-15 mx-auto w-full">
                      <div>
                        <h3 className="text-orange-400 lg:text-5xl text-2xl ">
                            12+
                        </h3>
                        <h5 className="lg:text-4xl text-xl">
                          Countries
                        </h5>
                      </div>
                      <div>
                        <h3 className="text-orange-400 lg:text-5xl text-2xl ">
                            50 000+
                        </h3>
                        <h5 className="lg:text-4xl text-xl">
                          Customers
                        </h5>
                      </div>
                      <div className="pl-5">
                        <h3 className="text-orange-400 lg:text-5xl text-2xl">
                            20+
                        </h3>
                        <h5 className="lg:text-4xl text-xl">
                          Stores
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
        <section>
          <div className="bg-black w-full h-100">

          </div>
        </section>
        <section>
          <h1 className="text-5xl text-semibold text-center mb-10 text-orange-400">
            Featured Products
          </h1>
          <div className="bg-gray-100 lg:w-250 sm:w-100 lg:h-20 sm:h-50 mx-auto mb-10 p-10 rounded grid lg:grid-cols-5 grid-cols-1 place-content-center place-items-center">
                <button className="text-xl cursor-pointer hover:underline hover:text-orange-400 featured-btn">
                  Featured Products
                </button>
                <h1 className="text-4xl text-thin"> /</h1>
                <button className="text-xl cursor-pointer hover:underline hover:text-orange-400">
                  New Products
                </button>
                <h1 className="text-4xl text-thin"> /</h1>
                <button className="text-xl cursor-pointer hover:underline hover:text-orange-400">
                  Best Seller
                </button>   
          </div> 
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10 gap-10 place-items-center w-full mb-10">
            <div className="bg-gray-100 w-full mb-10 text-start px-3 py-3">
               <div className="flex justify-end">
                <button className="cursor-pointer hover:fill-current"  onClick={toggleClass}>
                  <Heart size={40} className={isClicked ? 'fill-current' : 'fill-none hover:fill-current'} />
                </button>
              </div>       
              <Image
                src={'/PapasanChairsBounty1.png'}
                alt=""
                width={1200}
                height={800}
                className="w-full rounded lg:h-90 h-80 border-b border-black mb-5"
              />
              <h1 className="text-3xl text-semibold mb-5">
                Papasan Chair
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi labore consequatur veniam, dolorum iste expedita vero doloremque, ipsa aut voluptatum quia nulla deleniti tempore! Quam dolorem est maxime autem!
              </p>
              <button className="border px-5 py-2 rounded text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                View More
              </button>
            </div>
            <div className="bg-gray-100 w-full mb-10 text-start px-3 py-3">
               <div className="flex justify-end">
                <button className="cursor-pointer hover:fill-current"  onClick={toggleClass}>
                  <Heart size={40} className={isClicked ? 'fill-current' : 'fill-none hover:fill-current'} />
                </button>
              </div>       
              <Image
                src={'/2SeaterSofaBeni1.jpg'}
                alt=""
                width={1200}
                height={800}
                className="w-full rounded lg:h-90 h-80 border-b border-black mb-5"
              />
              <h1 className="text-3xl text-semibold mb-5">
                Rest Sofa
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi labore consequatur veniam, dolorum iste expedita vero doloremque, ipsa aut voluptatum quia nulla deleniti tempore! Quam dolorem est maxime autem!
              </p>
              <button className="border px-5 py-2 rounded text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                View More
              </button>
            </div>
            <div className="bg-gray-100 w-full mb-10 text-start px-3 py-3">
               <div className="flex justify-end">
               <button className="cursor-pointer hover:fill-current"  onClick={toggleClass}>
                  <Heart size={40} className={isClicked ? 'fill-current' : 'fill-none hover:fill-current'} />
                </button>
              </div>       
              <Image
                src={'/DiningTablesBerlin1.jpg'}
                alt=""
                width={1200}
                height={800}
                className="w-full rounded lg:h-90 h-80 border-b border-black mb-5"
              />
              <h1 className="text-3xl text-semibold mb-5">
                Dining Table
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi labore consequatur veniam, dolorum iste expedita vero doloremque, ipsa aut voluptatum quia nulla deleniti tempore! Quam dolorem est maxime autem!
              </p>
              <button className="border px-5 py-2 rounded text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                View More
              </button>
            </div>
            <div className="bg-gray-100 w-full mb-10 px-3 py-3">
                <div className="flex justify-end">
                <button className="cursor-pointer hover:fill-current"  onClick={toggleClass}>
                  <Heart size={40} className={isClicked ? 'fill-current' : 'fill-none hover:fill-current'} />
                </button>
              </div>       
              <Image
                src={'/TableLampCara.jpg'}
                alt=""
                width={1200}
                height={800}
                className="w-full rounded lg:h-90 h-80 border-b border-black mb-5"
              />
              <h1 className="text-3xl text-semibold mb-5">
                Desk Lamp
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi labore consequatur veniam, dolorum iste expedita vero doloremque, ipsa aut voluptatum quia nulla deleniti tempore! Quam dolorem est maxime autem!
              </p>
              <button className="border px-5 py-2 rounded text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                View More
              </button>
            </div>
            <div className=" bg-gray-100 w-full mb-10 text-start px-3 py-3">
               <div className="flex justify-end">
                <button className="cursor-pointer hover:fill-current"  onClick={toggleClass}>
                  <Heart size={40} className={isClicked ? 'fill-current' : 'fill-none hover:fill-current'} />
                </button>
              </div>       
              <Image
                src={'/AccessoriesAqua.jpg'}
                alt=""
                width={1200}
                height={800}
                className="w-full rounded lg:h-90 h-80 border-b border-black mb-5"
              />
              <h1 className="text-3xl text-semibold mb-5">
                Aqua Vase
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi labore consequatur veniam, dolorum iste expedita vero doloremque, ipsa aut voluptatum quia nulla deleniti tempore! Quam dolorem est maxime autem!
              </p>
              <button className="border px-5 py-2 rounded text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                View More
              </button>
            </div>
            <div className=" bg-gray-100 w-full mb-10 text-start px-3 py-3">
               <div className="flex justify-end">
               <button className="cursor-pointer hover:fill-current"  onClick={toggleClass}>
                  <Heart size={40} className={isClicked ? 'fill-current' : 'fill-none hover:fill-current'} />
                </button>
              </div>       
              <Image
                src={'/BedBarcelona1.png'}
                alt=""
                width={1200}
                height={800}
                className="w-full rounded lg:h-90 h-80 border-b border-black mb-5"
              />
              <h1 className="text-3xl text-semibold mb-5">
                Queen-Sized Bed
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi labore consequatur veniam, dolorum iste expedita vero doloremque, ipsa aut voluptatum quia nulla deleniti tempore! Quam dolorem est maxime autem!
              </p>
              <button className="border px-5 py-2 rounded text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                View More
              </button>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}
