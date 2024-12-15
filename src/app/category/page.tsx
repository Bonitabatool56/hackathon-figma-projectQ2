import React from "react";

const CartPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>

      {/* New Arrival Category */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Formal</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* Product 1 */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <img
                src="/10th.png" // Replace with your image
                alt="Product 1"
                className="w-full h-[298px] object-cover rounded-[20px]"
              />
              <p className="font-semibold mt-4">A formal dress</p>
              <p className="text-sm text-gray-600">This is especially designed to make you feel formal</p>
              <p className="mt-2 text-xl font-bold">$100</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <img
                src="/11th.png" // Replace with your image
                alt="Product 2"
                className="w-full h-[298px] object-cover rounded-[20px]"
              />
              <p className="font-semibold mt-4">A formal chic design</p>
              <p className="text-sm text-gray-600">Your absolute go-to outfit</p>
              <p className="mt-2 text-xl font-bold">$120</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <img
                src="/3rd image.png" // Replace with your image
                alt="Product 3"
                className="w-full h-[298px] object-cover rounded-[20px]"
              />
              <p className="font-semibold mt-4">A check shirt</p>
              <p className="text-sm text-gray-600">Dress in style</p>
              <p className="mt-2 text-xl font-bold">$150</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Selling Category */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Casual</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* Product 4 */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <img
                src="/222.png" // Replace with your image
                alt="Product 4"
                className="w-full h-[298px] object-cover rounded-[20px]"
              />
              <p className="font-semibold mt-4">T-Shirt</p>
              <p className="text-sm text-gray-600">Casual design for you</p>
              <p className="mt-2 text-xl font-bold">$180</p>
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <img
                src="/first image.png.png" // Replace with your image
                alt="Product 5"
                className="w-full h-[298px] object-cover rounded-[20px]"
              />
              <p className="font-semibold mt-4">Black T-Shirt</p>
              <p className="text-sm text-gray-600">Comfort and style together</p>
              <p className="mt-2 text-xl font-bold">$200</p>
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <img
                src="/yml2.png" // Replace with your image
                alt="Product 6"
                className="w-full h-[298px] object-cover rounded-[20px]"
              />
              <p className="font-semibold mt-4">Gradient Shirt</p>
              <p className="text-sm text-gray-600">Colors meet style</p>
              <p className="mt-2 text-xl font-bold">$220</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
