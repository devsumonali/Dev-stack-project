export default function Hero() {
     return (
          <section className="py-8 lg:py-12 px-5 lg:px-0">
               <div className="container mx-auto">
                    <div className="w-full flex flex-col lg:flex-row items-center gap-5 justify-between">
                         <div className="w-full lg:w-[50%] flex gap-5 flex-col">
                              <h1 className="text-[clamp(2.1875rem,1.7411rem+1.9841vw,3.75rem)] font-extrabold leading-[1.3em] ">
                                   Build Your Ideal
                                   <br />
                                   <span className="brand-gradient-text">Development Stack</span>
                              </h1>
                              <p className="font-normal text-sm text-brand-text ">
                                   Explore frontend, backend, database, and tooling options, compare
                                   them side by side, and put together the stack that fits your next
                                   project.
                              </p>
                              <div className="flex gap-5">
                                   <button className="brand-gradient text-white px-5 py-2.5 rounded-xl cursor-pointer">
                                        Explore Technologies
                                   </button>
                                   <button className="px-5 py-2.5 rounded-xl border border-black/10 cursor-pointer">
                                        Learn More
                                   </button>
                              </div>
                         </div>

                         <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
                              <img
                                   src="/images/banner-stack.png"
                                   alt="Banner image"
                                   width="full"
                                   height="auto"
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
}
