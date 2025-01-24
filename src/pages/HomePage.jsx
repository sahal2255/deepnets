import React, { useEffect, useState } from 'react';
// import { productGet } from '../services/ProductGet';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await productGet();
//         console.log(data.data)
//         if (data.success) {
//           setProducts(data.data);
//         }
//       } catch (err) {
//         setError('Failed to fetch products.');
//       }
//     };

//     fetchProducts();
//   }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {products.length > 0 ? (
          <ul>
            {products.map(product => (
              <li key={product.id} className="mb-2">
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
