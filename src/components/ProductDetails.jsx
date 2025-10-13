import products from '../products.json';
export default function ProductDetails({ product, onBack, addToCart, addToWishlist }) {
  if (!product) return <p className="text-center mt-10 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md mt-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 rounded-lg object-cover"
        loading="lazy"
      />

      <div className="flex flex-col">
        <button
          className="mb-4 text-blue-600 hover:underline self-start"
          onClick={onBack}
        >
          &larr; Back to products
        </button>

        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.category}</p>
        <p className="text-2xl font-semibold text-blue-700 mb-4">${product.price}</p>
        <p className="mb-6">{product.description}</p>

        <p
          className={`font-semibold mb-4 ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>

        <div className="flex gap-4">
          <button
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
            className={`px-6 py-3 rounded text-white transition ${
              product.inStock
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          <button
            onClick={() => addToWishlist(product)}
            className="px-6 py-3 rounded bg-yellow-400 text-white hover:bg-yellow-500 transition"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
