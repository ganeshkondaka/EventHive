import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between py-32 ">

      <div className="flex flex-col flex-2/4 gap-6 justify-center">

        <p className="text-7xl font-bold bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">Simplify Event Management</p>
        <p className="text-xl text-zinc-300">Streamline planning, boost attendance, and create unforgettable experiences with our all-in-one event platform</p>

        <div className="flex w-full gap-3">
          <Link href={'/login'} className='px-8 py-3 font-bold rounded-lg bg-yellow-600 text-xs sm:text-sm md:text-lg hover:bg-violet-700 hover:scale-105 transition duration-300'> Get started</Link>
          <Link href={'/login'} className='px-8 py-3 font-bold rounded-lg bg-transparent border border-yellow-600 text-xs sm:text-sm md:text-lg hover:bg-white hover:text-black hover:scale-105 transition duration-300'>Explore Features</Link>
        </div>

        <div className="flex items-center gap-2 px-3">
          <div className="flex space-x-[-14px]">
            <div className="rounded-full border border-black bg-zinc-300  text-[9px] w-10 h-10"></div>
            <div className="rounded-full border border-black bg-zinc-300  text-[9px] w-10 h-10"></div>
            <div className="rounded-full border border-black bg-zinc-300  text-[9px] w-10 h-10"></div>
          </div>
          <div className="text-zinc-300">Trusted by 5,000+ event planners</div>
        </div>
      </div>

      <div className="flex flex-col flex-2/4 justify-center p-10">
        {/* <img src="/hero.png" alt="" width={350}  /> */}
        <div className="text-left mb-[-10px] z-10">
          <p className="bg-zinc-700 px-6 py-2 rounded-lg w-auto inline-block">⭐ 4.9 Star Rating</p>
        </div>
        <img src="/heroimg.png" alt="landingpage" width={'full'} height={500} className=" rounded-xl mx-4 object-cover " />
        <div className="text-right">
          <p className="bg-zinc-700 mt-[-14px] px-6 py-2 rounded-lg w-auto inline-block">🟢 2,500+ events managed today</p>
        </div>
      </div>

    </div>
  );
}
