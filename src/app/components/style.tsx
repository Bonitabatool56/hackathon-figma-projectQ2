export default function BrowseByStyleSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {/* Casual Style */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="/9th.png"
              alt="Casual Style"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Casual</h3>
          </div>
          {/* Formal Style */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="/10th.png"
              alt="Formal Style"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Formal</h3>
          </div>
          {/* Party Style */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="/11th.png"
              alt="Party Style"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Party</h3>
          </div>
          {/* Gym Style */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src="/12th.png"
              alt="Gym Style"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Gym</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
