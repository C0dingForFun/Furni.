'use client'

import { useCartStore } from "../../../store/cartStore";
import Image from "next/image";
import Navbar2 from "../../../components/nav";


// interface CartItem {
//     id: number;
//     title: string;
//     price: number;
//     quantity: number
//     image: string
// }

export default function Cart(){
    const items = useCartStore((state) => state.items)
    // const subtotal =  items.reduce(
    //     (total, item) => total + item.price * item.quantity, 0
    // )  
    // const tax = subtotal * 0.1;
    // const total = subtotal + tax;
    
    return (
        <div className="min-h-screen bg-gray-100 w-full">
            <Navbar2/>
            <main className="w-full mx-auto py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Your Cart
                </h1>
                <div className="grid grid-cols-1 gap-6 mx-auto place-items-center w-full">
                    <div className="">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white p-4 mb-4 rounded-lg shadow w-300"
                            >
                               <Image
                                    src= {`${item.image}`}
                                    alt="Product-image"
                                    width={1920}
                                    height={1200}
                                    className="w-400 h-200"
                               />
                               
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    )
}

