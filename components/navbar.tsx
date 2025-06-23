import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="bg-white flex justify-between items-center py-3 px-10 mx-auto w-full">
            <h1 className="text-3xl font-bold text-black"> Furni. </h1>
            <div className="flex items-space-x-5 text-s">
                <ul className="flex items-center space-x-10 text-black">
                    <li className="hover:text-orange-400 hover:border-b-1 duration-300">
                        <Link href="/"> Home </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:border-b-1 duration-300">
                        <Link href="/about"> About </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:border-b-1 duration-300">
                       <Link href="/products"> Store </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:border-b-1 duration-300">
                        <Link href="/cart"> Cart </Link>
                    </li>
                    <li className="hover:text-orange-400 hover:border-b-1 duration-300">
                        <Link href="/contact"> Contact </Link>
                    </li>
                <div className="space-x-5">
                    <button className="bg-orange-400 text-white px-5 py-2 rounded font-bold hover:bg-white border hover:text-black hover:cursor-pointer ">
                        Sign Up
                    </button>
                    <button className="border px-5 py-2 rounded font-bold text-black hover:bg-orange-400 hover:text-white hover:cursor-pointer">
                        Login
                    </button>
                </div>
                </ul>
            </div>
        </nav>
    )
}