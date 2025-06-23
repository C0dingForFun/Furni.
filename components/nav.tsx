/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu,X } from "lucide-react";

const Navbar2 = () => {

    const [open, setOpen] = useState(false);

    const nav_items = [
        {
            id:1,
            name: "Home",
            path: '/'
        },
        {
            id:2,
            name: "About",
            path: '/about'
        },
        {
            id:3,
            name: "Store",
            path: '/products '
        },
        {
            id:4,
            name: "Cart",
            path: '/cart'
        },
        {
            id:5,
            name: "Contact",
            path: '/contact'
        }
    ]

    const toggleNavbar =  () => {
        setOpen(!open)
    }
    const closeNavbar =  () => {
        setOpen(false)
    }

    return (
        <div 
            className={`w-full h-[8ch]   flex items-center justify-between md:px-16 px-4 top-0 transition-all ease-in-out duration-300 bg-white `}
        >
            {/* Logo Section */}
            <div className="flex items-center gap-2 md:pr-16 pr-0">
                <Link 
                        href={"/"}
                        className="text-3xl font-bold text-black"
                    >
                        Furni.
                    </Link>
            </div>

            {/* Hamburger menu for mobile / Toggle menu */}
             <div className="lg:hidden">
                <button
                    onClick={toggleNavbar}
                    className="text-neutral-600 focus:outline-none"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Navbar items and buttons */}
            <div
                className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full bg-sky-50 border-l md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none transition-transform duration-300 ease-in-out transform flex-1 ${open ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0 z-60`}
            >

                {/* Logo and close icon Inside Toggle Menu */}
                <div className="w-full lg:hidden flex items-center justify-between px-4">
                    {/* Logo */}
                    <Link href="/" className="text-lg font-semibold flex items-center gap-x-2">
                        Furni.
                    </Link>
                    {/* Close Icon */}
                    <div className="lg:hidden flex justify-end py-6">
                        <button
                            onClick={toggleNavbar}
                            className="text-red-600 focus:outline-none"
                        >
                            <X size={28} />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-b border-neutral-300 lg:hidden"></div>

                <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-6 p-6 md:p-0">
                    {/* Navbar items */}
                    <ul className="flex flex-col md:flex-row items-center gap-6 text-base text-neutral-700 font-normal">
                        {nav_items.map((item) => (
                            <li key={item.id}>
                                <Link href={item.path} className="hover:text-orange-400 hover:underline ease-in-out duration-300">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                       <button className="bg-orange-400 text-white px-5 py-2 rounded font-bold hover:bg-white border hover:text-black hover:cursor-pointer ">
                            Sign Up
                        </button>
                        <button className="border px-5 py-2 rounded font-bold text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                            Login
                        </button>

                    {/* Buttons */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;