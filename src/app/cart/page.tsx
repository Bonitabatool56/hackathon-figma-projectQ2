import React from "react";

const CartPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 space-x-8">
      {/* Left Section: Cart Items */}
      <div className="w-full md:w-2/3 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {/* Cart Item 1 */}
        <div className="border-b-2 border-gray-300 pb-4 mb-4 flex items-center">
          <img
            src="/yml2.png" // Replace with your image
            alt="Gradient Graphic T-shirt"
            className="w-[120px] h-[120px] object-cover rounded-md mr-4"
          />
          <div className="flex-1">
            <p className="font-semibold">Gradient Graphic T-shirt</p>
            <p className="text-sm text-gray-600">Size: Large | Color: White</p>
          </div>
          <div className="flex items-center">
            <button className="border p-2 rounded-full mr-2">-</button>
            <span className="text-xl">1</span>
            <button className="border p-2 rounded-full ml-2">+</button>
          </div>
          <p className="ml-4 text-xl">$145</p>
        </div>

        {/* Cart Item 2 */}
        <div className="border-b-2 border-gray-300 pb-4 mb-4 flex items-center">
          <img
            src="/3rd image.png" // Replace with your image
            alt="Checkered Shirt"
            className="w-[120px] h-[120px] object-cover rounded-md mr-4"
          />
          <div className="flex-1">
            <p className="font-semibold">Checkered Shirt</p>
            <p className="text-sm text-gray-600">Size: Medium | Color: Red</p>
          </div>
          <div className="flex items-center">
            <button className="border p-2 rounded-full mr-2">-</button>
            <span className="text-xl">1</span>
            <button className="border p-2 rounded-full ml-2">+</button>
          </div>
          <p className="ml-4 text-xl">$180</p>
        </div>

        {/* Cart Item 3 */}
        <div className="border-b-2 border-gray-300 pb-4 mb-4 flex items-center">
          <img
            src="/2nd image.png" // Replace with your image
            alt="Skinny Fit Jeans"
            className="w-[120px] h-[120px] object-cover rounded-md mr-4"
          />
          <div className="flex-1">
            <p className="font-semibold">Skinny Fit Jeans</p>
            <p className="text-sm text-gray-600">Size: Large | Color: Blue</p>
          </div>
          <div className="flex items-center">
            <button className="border p-2 rounded-full mr-2">-</button>
            <span className="text-xl">1</span>
            <button className="border p-2 rounded-full ml-2">+</button>
          </div>
          <p className="ml-4 text-xl">$240</p>
        </div>
      </div>

      {/* Right Section: Order Summary */}
      <div className="w-full md:w-[505px] p-[24px] bg-white shadow-md rounded-[20px] border border-gray-300">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="mb-4 flex justify-between">
          <span>Subtotal</span>
          <span>$565</span>
        </div>
        <div className="mb-4 flex justify-between">
          <span>Discount (-20%)</span>
          <span>-$113</span>
        </div>
        <div className="mb-4 flex justify-between">
          <span>Delivery Fee</span>
          <span>$15</span>
        </div>
        <div className="mb-4 flex justify-between font-bold">
          <span>Total</span>
          <span>$467</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button className="mt-2 w-full bg-black text-white p-2 rounded-md">Apply</button>
        </div>
        <div className="mt-6">
          <button className="w-full bg-black text-white p-2 rounded-md">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
