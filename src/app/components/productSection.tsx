export default function ProductSection() {
  const newArrivals = [
    { name: 'T-shirt', price: '$20', discountPrice: '$30', imgSrc: '/first image.png.png', rating: 4 },
    { name: 'Jeans', price: '$30', discountPrice: '$50', imgSrc: '/2nd image.png', rating: 5 },
    { name: 'Check Shirt', price: '$25', discountPrice: '$40', imgSrc: '/3rd image.png', rating: 3 },
    { name: 'Orange T-shirt', price: '$15', discountPrice: '$25', imgSrc: '/4rth wali.png', rating: 4 },
  ];

  const topSelling = [
    { name: 'Green Shirt', price: '$22', imgSrc: '/5th.png', rating: 5 },
    { name: 'Orange T-shirt', price: '$18', imgSrc: '/6th.png', rating: 4 },
    { name: 'Denim Shorts', price: '$19', imgSrc: '/7th.png', rating: 4 },
    { name: 'Black Jeans', price: '$25', imgSrc: '/8th.png', rating: 5 },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-20 py-16 bg-gray-100">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={product.imgSrc} alt={product.name} className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-md sm:text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center justify-between text-gray-700 mt-2">
                  <span className="text-lg sm:text-xl font-bold">{product.price}</span>
                  <span className="line-through text-sm sm:text-base">{product.discountPrice}</span>
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
                      <path d="M10 15l-3.09 1.628 1.18-3.633L5 8.617h3.91L10 5l1.09 3.617H15l-2.09 4.378 1.18 3.633z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">TOP SELLING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topSelling.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={product.imgSrc} alt={product.name} className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-md sm:text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center justify-between text-gray-700 mt-2">
                  <span className="text-lg sm:text-xl font-bold">{product.price}</span>
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
                      <path d="M10 15l-3.09 1.628 1.18-3.633L5 8.617h3.91L10 5l1.09 3.617H15l-2.09 4.378 1.18 3.633z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
