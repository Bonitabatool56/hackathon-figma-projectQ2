export default function CustomerReviewSection() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">OUR HAPPY CUSTOMERS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Sarah K.</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"The clothes fit perfectly and the customer service was fantastic!"</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Alex J.</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"Great experience shopping here. Highly recommend the brand!"</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">James L.</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"Love the variety of styles available. Designs bohat buray hain!"</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  