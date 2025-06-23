import {create} from 'zustand';

interface CartItem{
    id: number,
    title: string,
    price: number,
    quantity: number,
    image: string
}

interface CartState { 
    items: CartItem[]
}

export const useCartStore = create<CartState>(() => ({
    items: [
        {
            id: 1,
            title: 'Product 1',
            price: 19.99,
            quantity: 2,
            image: '/images/red.jpeg?height=80width=80'
        },
        {
            id: 2,
            title: 'Product 1',
            price: 29.99,
            quantity: 1,
            image: '/images/gray.jpeg?height=80width=80'
        },
        {
            id: 3,
            title: 'Product 1',
            price: 39.99,
            quantity: 2,
            image: '/images/black.jpeg?height=80width=80'
        },
    ],
}))

