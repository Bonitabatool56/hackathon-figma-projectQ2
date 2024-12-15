export default function UpdateSection() {
    return (
      <section className="relative bg-black mt-36 px-16 py-9" style={{ width: '1240px', height: 'auto', borderRadius: '20px', justifyContent: 'space-between', top: '36px', right: '64px', bottom: '36px', left: '64px' }}>
        <div className="flex justify-between items-center">
          {/* Left side: Text */}
          <div className="text-left">
            <h2 className="text-white font-integralCF font-extrabold text-4xl leading-tight">
              Stay up to date about our latest offers
            </h2>
          </div>
  
          {/* Right side: Two small bars */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center bg-gray-600 w-[349px] h-[108px] rounded-lg">
              <p className="text-white font-medium">Enter your email</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-600 w-[349px] h-[108px] rounded-lg">
              <p className="text-white font-medium">Subscribe to our newsletter</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  