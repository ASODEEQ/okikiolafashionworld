// "use client";

// import { useCart } from "@/context/cartcontext";
// import Link from "next/link";

// export default function CheckoutClient({ userId }: { userId: string }) {
//   const { cart, removeFromCart, clearCart } = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cart.length === 0)
//     return (
//       <div className="p-6 text-center">
//         <p>Your cart is empty.</p>
//         <Link href="/" className="text-pink-600 underline">
//           Go shopping
//         </Link>
//       </div>
//     );

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//       <p className="text-sm mb-4 text-gray-600">Logged in as: {userId}</p>

//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item._id}
//             className="flex justify-between items-center border-b pb-2"
//           >
//             <div>
//               <h2 className="font-semibold">{item.title}</h2>
//               <p className="text-sm text-gray-500">
//                 ₦{item.price.toLocaleString()} × {item.quantity}
//               </p>
//             </div>
//             <button
//               onClick={() => removeFromCart(item._id)}
//               className="text-red-500 text-sm"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 text-right">
//         <p className="text-lg font-bold">Total: ₦{total.toLocaleString()}</p>
//         <button
//           onClick={() => {
//             alert("Checkout successful!");
//             clearCart();
//           }}
//           className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
//         >
//           Confirm Purchase
//         </button>
//       </div>
//     </div>
//   );
// }
