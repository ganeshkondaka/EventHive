import { cn } from "@/lib/utils";
import Hero from "./components/landingpage/Hero";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Eventscards from "./components/landingpage/Eventscards";

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
      <div>
        <div className="flex gap-4 w-full py-2">
          <input type="text" className="bg-zinc-700 rounded-full " />
          <select name="cars" id="cars" className="bg-zinc-700 rounded-full px-2">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <Eventscards></Eventscards>
    </div>
  );
}
