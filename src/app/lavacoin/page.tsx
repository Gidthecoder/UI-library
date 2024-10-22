import Hero from "./components/Hero";
import Exchanges from "./components/Exchanges";
import WhatIsLavaCoin from "./components/WhatIsLavaCoin";
import GettingStarted from "./components/GettingStarted";
import FAQ from "./components/FAQ";

export default function Home(){
    return (
        <main className="bg-black overflow-auto">
            <Hero/>
            <Exchanges/>
            <WhatIsLavaCoin/>
            <GettingStarted/>
            <FAQ/>

            <div className="w-[80%] w-[calc(100%-40px)] mx-auto mt-[50px] p-[10px] text-[12px] xl:text-base text-white border-t border-t-[hsl(3,15%,19%)] text-center">
             © 2013-2024 | The LavaCoin Foundation & LavaCoin Project. All rights reserved.
            </div>
        </main>
    )
}