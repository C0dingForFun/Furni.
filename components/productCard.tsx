// import  Image  from "next/image";
// import { Product } from "../types/types";

// export function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <Image
//         src={product.images[0]}
//         alt={product.title}
//         width={300}
//         height={200}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">
//           {product.title}
//         </h2>
//         <p className="text-gray-600 mb-4">R{product.price.toFixed(2)}</p>
//         <button className="w-full">Add to Cart</button>
//       </div>
//     </div>
//   );
// }