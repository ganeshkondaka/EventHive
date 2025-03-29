import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between py-16 px-6  lg:py-32 items-center">
      
      {/* Left Section */}
      <div className="flex flex-col lg:w-1/2 gap-6 text-center lg:text-left items-center lg:items-start">
        <p className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
          Simplify Event Management
        </p>
        <p className="text-lg md:text-xl text-zinc-300">
          Streamline planning, boost attendance, and create unforgettable experiences with our all-in-one event platform
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row w-full gap-3 md:gap-5 justify-center lg:justify-start">
          <Link 
            href={'/login'}
            className='px-6 md:px-8 py-3 font-bold rounded-lg bg-yellow-600 text-sm md:text-lg hover:bg-violet-700 hover:scale-105 transition duration-300 text-center'
          >
            Get started
          </Link>
          <Link 
            href={'/login'}
            className='px-6 md:px-8 py-3 font-bold rounded-lg bg-transparent border border-yellow-600 text-sm md:text-lg hover:bg-white hover:text-black hover:scale-105 transition duration-300 text-center'
          >
            Explore Features
          </Link>
        </div>

        {/* Trusted Users Section */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-4">
            <div className="rounded-full border border-black bg-zinc-300 w-10 h-10"></div>
            <div className="rounded-full border border-black bg-zinc-300 w-10 h-10"></div>
            <div className="rounded-full border border-black bg-zinc-300 w-10 h-10"></div>
          </div>
          <div className="text-zinc-300 text-sm md:text-base">
            Trusted by 5,000+ event planners
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col lg:w-1/2 items-center mt-10 lg:mt-0">
        <div className="text-left mb-2 md:mb-4">
          <p className="bg-zinc-700 px-4 py-2 rounded-lg text-sm md:text-base inline-block">
            ⭐ 4.9 Star Rating
          </p>
        </div>
        <img 
          src="/heroimg.png" 
          alt="landingpage" 
          className="rounded-xl w-full max-w-md sm:max-w-lg lg:max-w-full object-cover"
        />
        <div className="text-right mt-2 md:mt-4">
          <p className="bg-zinc-700 px-4 py-2 rounded-lg text-sm md:text-base inline-block">
            🟢 2,500+ events managed today
          </p>
        </div>
      </div>
    </div>
  );
}
