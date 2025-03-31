import { cn } from "@/lib/utils";
import Hero from "./components/landingpage/Hero";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Eventscards from "./components/landingpage/Eventscards";
import Features from "./components/landingpage/Features";

export default function Home() {
  return (
    <div className="">
      <div className=" ">
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.5}
          duration={1}
          repeatDelay={0.5}
          className={cn(
            " [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-[-1] pointer-events-none",
          )}
        />
      </div>
      <Hero />
      <p className="text-5xl font-bold py-4">Trusted by thousand of Events</p>
      <div className="pb-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-2 w-full h-8 py-2  ">
          <input type="text" className="bg-zinc-700 rounded-full h-10 px-6" />
          <select name="cars" id="cars" className="bg-zinc-700 rounded-full h-10 px-6 ">
            <option value="volvo">AI</option>
            <option value="saab">Webdev</option>
            <option value="mercedes">Block chain</option>
            <option value="audi">tech</option>
          </select>
        </div>
      </div>
      <Eventscards></Eventscards>
      <Features />
    </div>
  );
}
