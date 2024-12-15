export default function HeroSection() {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5 lg:px-20 py-20">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-[Integral CF] font-bold text-[64px] text-[#000000] leading-[64px] lg:text-left mb-6">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="font-[Satoshi] font-normal text-[16px] text-[#4A4A4A] leading-[22px] mb-8">
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 w-full mt-[134px]"> {/* Apply top margin */}
          <img
            src="/herosection-image.png.jpeg"
            alt="Figma image"
            className="w-[1440px] h-[663px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="bg-black text-white py-4">
        <div className="flex justify-center space-x-10 text-lg font-bold">
          <span>VERSACE</span>
          <span>ZARA</span>
          <span>GUCCI</span>
          <span>PRADA</span>
          <span>Calvin Klein</span>
        </div>
      </div>
    </section>
  );
}
