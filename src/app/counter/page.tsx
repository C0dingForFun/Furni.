'use client'

import { useCountStore } from '../../../components/counterStore';
import { Minus, Plus, RotateCcw } from 'lucide-react';

export default function CounterPage() {
    const count = useCountStore((state) => state.count )
    const increment = useCountStore((state) => state.increment)
    const decrement = useCountStore((state) => state.decrement)
    const reset = useCountStore((state) => state.reset)

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center'>
                <div>
                    <h1 className='text-4xl font-bold text-black mb-8 text-center'> 
                        Counter - sessionStorage
                    </h1>
                </div>
                <div className='text-9xl font-bold text-black mb-8'>
                    { count }
                </div>
                <div className='flex space-x-4'>
                    <button
                        onClick={decrement}
                        className='bg-gray-400 hover:bg-gray-300 hover:cursor-pointer text-gray-800 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200'
                    >
                        <Minus />
                    </button>
                    <button
                        onClick={increment}
                        className='bg-gray-400 hover:bg-gray-300 hover:cursor-pointer text-gray-800 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200'
                    >
                        <Plus />
                    </button>
                    <button
                        onClick={reset}
                        className='bg-gray-400 hover:bg-gray-300 hover:cursor-pointer text-gray-800 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200'
                    >
                        <RotateCcw />
                    </button>
                </div>
            </div>
        </div>
    )
}

