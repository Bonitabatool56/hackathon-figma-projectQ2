import React from "react";

// Product Detail Section Component
const ProductDetailSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-6 gap-8 bg-white">
      {/* Left Section: Product Images */}
      <div className="w-full md:w-1/2">
        <div className="w-full mb-4">
          <img
            src="/222.png"
            alt="Product"
            className="w-full h-[530px] rounded-[20px] object-cover"
          />
        </div>
        <div className="flex gap-2">
          <img
            src="/222.png"
            alt="Alternate 1"
            className="w-[100px] h-[100px] rounded-[20px] border border-gray-300 cursor-pointer"
          />
          <img
            src="/2ki2.png"
            alt="Alternate 2"
            className="w-[100px] h-[100px] rounded-[20px] border border-gray-300 cursor-pointer"
          />
          <img
            src="/2ki3.png"
            alt="Alternate 3"
            className="w-[100px] h-[100px] rounded-[20px] border border-gray-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>

        {/* Ratings */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-xl mr-2">★★★★☆</span>
          <span className="text-gray-500 text-sm">4.5/5</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center mb-4">
          <span className="text-2xl sm:text-3xl font-bold mr-4">$260</span>
          <span className="line-through text-gray-500">$300</span>
          <span className="text-red-500 ml-2 text-lg">-40%</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Select Colors */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Select Colors</p>
          <div className="flex gap-3">
            <button className="w-8 h-8 rounded-full bg-green-700"></button>
            <button className="w-8 h-8 rounded-full bg-gray-800"></button>
            <button className="w-8 h-8 rounded-full bg-indigo-700"></button>
          </div>
        </div>

        {/* Select Size */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Choose Size</p>
          <div className="flex gap-4">
            <button className="border px-4 py-2 rounded-md">Small</button>
            <button className="border px-4 py-2 rounded-md">Medium</button>
            <button className="border px-4 py-2 rounded-md bg-black text-white">
              Large
            </button>
            <button className="border px-4 py-2 rounded-md">X-Large</button>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-6">
          {/* Static Quantity */}
          <div className="flex items-center border rounded-md">
            <span className="px-4 py-2 text-lg">1</span>
          </div>

          {/* Add to Cart */}
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Review Section Component
const ReviewSection: React.FC = () => {
  return (
    <div className="p-6 mt-12 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Customer Reviews
      </h2>

      {/* Review 1 */}
      <div className="border p-6 rounded-lg mb-6">
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-xl mr-2">★★★★☆</span>
          <span className="text-gray-500 text-sm">4.5/5</span>
        </div>
        <p className="text-gray-600 mb-4">
          "This t-shirt is amazing! Comfortable, stylish, and great quality."
        </p>
        <div className="text-sm text-gray-500">- ASGHAR, 3 days ago</div>
      </div>

      {/* Review 2 */}
      <div className="border p-6 rounded-lg mb-6">
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-xl mr-2">★★★★★</span>
          <span className="text-gray-500 text-sm">5/5</span>
        </div>
        <p className="text-gray-600 mb-4">
          "Absolutely love this t-shirt! Fits perfectly and the material feels
          premium."
        </p>
        <div className="text-sm text-gray-500">- AKBAR, 1 week ago</div>
      </div>

      {/* Review 3 */}
      <div className="border p-6 rounded-lg mb-6">
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-xl mr-2">★★★☆☆</span>
          <span className="text-gray-500 text-sm">3/5</span>
        </div>
        <p className="text-gray-600 mb-4">"Itni mehangi hain TOBAH TOBAH."</p>
        <div className="text-sm text-gray-500">- ZULAIKHA, 2 weeks ago</div>
      </div>
    </div>
  );
};

// You Might Also Like Section Component
const YouMightAlsoLike: React.FC = () => {
  const products = [
    {
      name: "T-shirt",
      price: "$20",
      discountPrice: "$30",
      imgSrc: "/yml1.png",
      rating: 4,
    },
    {
      name: "Pattern Shirt",
      price: "$30",
      discountPrice: "$50",
      imgSrc: "/yml2.png",
      rating: 5,
    },
    {
      name: "Purple T-Shirt",
      price: "$25",
      discountPrice: "$40",
      imgSrc: "/yml3.png",
      rating: 3,
    },
    {
      name: "Elegant T-shirt",
      price: "$15",
      discountPrice: "$25",
      imgSrc: "/yml4.png",
      rating: 4,
    },
  ];

  return (
    <div className="px-5 sm:px-8 md:px-12 lg:px-20 py-16 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <div className="flex items-center justify-between text-gray-700 mt-2">
                <span className="text-lg sm:text-xl font-bold">
                  {product.price}
                </span>
                <span className="line-through text-sm sm:text-base">
                  {product.discountPrice}
                </span>
              </div>
              <div className="flex items-center mt-2">
                {Array.from({ length: product.rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-3.09 1.628 1.18-3.633L5 8.617h3.91L10 5l1.09 3.617H15l-3.09 4.378 1.18 3.633z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
const ProductPage: React.FC = () => {
  return (
    <div>
      <ProductDetailSection />
      <ReviewSection />
      <YouMightAlsoLike />
    </div>
  );
};

export default ProductPage;
