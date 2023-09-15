/**
 * Hero2.jsx
 */
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="h-[calc(100vh-3rem)] bg-gradient-to-b from-transparent via-transparent to-[#1c1c1c] relative">
      <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-t from-transparent via-transparent to-[#F9FAFC] dark:to-[#2b2b2b]  z-10"></div>
      <div className="w-full h-full relative">
        <div className="z-50 w-full h-full flex flex-col items-center pt-[7%] relative">
          <div className="w-[95%] max-w-4xl supports-backdrop-blur:bg-[#1c1c1c]/60 bg-[#1c1c1c]/75 backdrop-blur p-10 rounded-lg">
            <div className="flex items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
            <div>
              <div>Categories:</div>
              <div className="flex gap-4 flex-wrap">
                <Button variant="outline">asdasdasdas</Button>
                <Button variant="outline">asdasdasdas</Button>
                <Button variant="outline">asdasdasdas</Button>
                <Button variant="outline">asdasdasdas</Button>
                <Button variant="outline">asdasdasdas</Button>
                <Button variant="outline">asdasdasdas</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-0 top-0 left-0 w-full h-full grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1 relative z-50">
            <Image
              src="/2019_mb_g63_amg_0000-first-side.png"
              alt="saa"
              width={500}
              height={500}
              className="w-[70%] pt-[30%] md:pt-0 mx-auto lg:mx-0 2xl:w-[80%] h-full object-contain"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 relative z-10">
            <div className="relative w-full h-full">
              <div className="absolute w-full lg:w-[calc(100%+30%)] h-[20%] lg:bottom-[30%] right-0 flex items-center justify-center lg:bg-neutral-900 ">
                <Icons.logo className="h-5 w-5 lg:w-12 lg:h-12" />
                <span className="text-3xl lg:text-7xl font-bold">Auto-Nel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
