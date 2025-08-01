import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
        <section>
            <div className="bg-gray-200 w-full lg:h-50 h-90 grid lg:grid-cols-2 grid-cols-1 place-content-center place-items-center p-10 gap-10">
              <div className="text-start w-full"> 
                <h1 className="lg:text-3xl text-xl mb-3">
                  Subscribe to our newsletter
                </h1>
                <p>
                  Stay inspired with the latest in furniture trends, exclusive deals, and design tips! <br />
                  Subscribe to our newsletter and bring style home.🛋️🎉
                </p>
              </div>
              <div className="grid lg:grid-col-2 grid-cols-1 w-full gap-2">
                <input 
                  type="text" 
                  className="border rounded py-1 px-1"
                  placeholder="Email address"
                />
                <button className="border px-5 py-2 rounded font-bold text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer hover:border-transparent">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 bg-gray-300 w-full h-80 place-content-center place-items-center px-5">
              <div className="w-20 h-20 col-span-2">
                <h1 className='text-6xl'>
                  Furni.
                </h1>
              </div>
              <div className="w-20 h-20 col-span-1">
                <h3 className='text-2xl'>
                  Links
                </h3>
                <div className='grid'>
                  <Link href='/'>Home</Link>
                  <Link href='/about'>About</Link>
                  <Link href="/store">Store</Link>
                  <Link href="/cart">Cart</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
              <div className="bg-black w-20 h-20 col-span-1">
                <h3>

                </h3>
                <Link href=""></Link>
                <Link href=""></Link>
                <Link href=""></Link>
              </div>
              <div className="bg-black w-20 h-20 col-span-1">
                <h3>

                </h3>
                <Link href=""></Link>
                <Link href=""></Link>
                <Link href=""></Link>
              </div>

            </div>
        </section>
    </div>
  )
}
