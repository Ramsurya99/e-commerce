// export const Cart = ({ product, addToCart }) => {
//     const [quantity, setQuantity] = useState(1);
  
//     const handleAddToCart = () => {
//       addToCart({ ...product, quantity });
//     };
  
//     return (
//       <div>
//         <h1>Product Details</h1>
//         <h3>{product.name}</h3>
//         <p>Price: ${product.price}</p>
//         <label>
//           Quantity:
//           <input
//             type="number"
//             value={quantity}
//             min="1"
//             onChange={(e) => setQuantity(parseInt(e.target.value))}
//           />
//         </label>
//         <button onClick={handleAddToCart}>Add to Cart</button>
//       </div>
//     );
// };
  