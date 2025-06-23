import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import Image from "next/image"

export default function About() {
  return (
    <div className="w-full">
      <Navbar/>
        <Image
          src='/Luxurious Living Space with Landscape View.jpeg'
          alt="about-banner img"
          width= {1960}
          height={1200}
          className="z-0 w-screen absolute h-80 object-cover"
        />
      <div className='flex justify-center items-center w-full h-80'>
        <h1 className='text-4xl text-white z-10'>
          About Us
        </h1>
      </div>
      <section className='grid lg:grid-cols-5 grid-cols-1 gap-10 w-full place-items-center place-content-center lg:px-50 mx-auto'>
        <div className="lg:col-span-2 col-span-5 bg-black lg:w-80 w-full h-60 rounded">

        </div>
        <div className="lg:col-span-3 col-span-5 bg-black lg:w-150 w-full h-60 rounded">

        </div>
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 w-full h-100 bg-black ">
        <div className="w-full h-full flex justify-center items-center text-2xl">
          <h1 className="text-white">
            
          </h1>
        </div>
        <div className="bg-orange-400 w-full h-full">

        </div>
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 px-10 gap-10">
        <div>
          <div className="w-full">        
            <Image
              src='/Serene Minimalist Interior.jpeg'
              alt="about-banner img"
              width= {1960}
              height={1200}
              className="z-0 w-screen h-90 object-cover rounded"
            />
          </div>
          <div className="mt-5">  
            <p>
              The Rest Sofa is the perfect combination of comfort and style, designed for both relaxation and entertaining. 
              With premium cushioning and a sleek modern aesthetic, it enhances any living space effortlessly. Crafted from high-quality materials, it offers durability and support for everyday use. Whether lounging solo or hosting guests, this sofa brings luxury and practicality together in one stunning piece.

            </p>
          </div>
          <button className="border rounded mt-5 cursor-pointer hover:bg-orange-400 hover:text-white hover:border-transparent px-5 py-2">
           View More
          </button>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-10">
          <div className="bg-black w-full h-50">

          </div>
          <div>
            <p className="text-wrap">
              The Single Arm Rest Lounge Chair, crafted from high-quality faux materials, offers an elegant and comfortable seating solution. With its sleek design and plush cushioning, it provides the perfect balance of style and relaxation. The faux finish ensures durability while maintaining a luxurious feel, making it a standout piece in any modern space.
            </p>
          </div>
          <div className="bg-black w-full h-40">
            
          </div>
          <div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
          </div>
          <div className="bg-black w-full h-40">

          </div>
          <div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
            <div className="bg-black w-full h-2 mt-5"></div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
