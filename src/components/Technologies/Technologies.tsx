import { FiPlus } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import type { Technology } from '../../types';
import TechnologyCard from './TechnologyCard';

interface TechnologiesProps {
     technologies: Technology[];
     selectedTechnologies: Technology[];
     addToStack: (technology: Technology) => void;
     removeFromStack: (id: string) => void;
     removeAll: () => void;
}

function Technologies({
     technologies,
     selectedTechnologies,
     addToStack,
     removeFromStack,
     removeAll,
}: TechnologiesProps) {
     return (
          <section className="bg-white py-3 px-5 lg:py-6">
               <div className="container mx-auto">
                    <div className="mb-8">
                         <h2 className="text-3xl md:text-4xl font-bold">
                              Explore the <span className="brand-gradient-text">Technologies</span>
                         </h2>

                         <p className="mt-2 text-sm md:text-base text-brand-text">
                              Find the right technologies to build your ideal stack.
                         </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5 justify-between items-start">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-[75%]">
                              {technologies.map((Technology) => {
                                   const isAdded = selectedTechnologies.some(
                                        (item) => item.id === Technology.id,
                                   );

                                   return (
                                        <TechnologyCard
                                             key={Technology.id}
                                             Technology={Technology}
                                             isAdded={isAdded}
                                             addToStack={addToStack}
                                        />
                                   );
                              })}
                         </div>

                         <div className="w-full lg:w-[25%] lg:sticky lg:top-24 self-start">
                              <div className="w-full border border-black/10 rounded-[17px] p-4 shadow-[0_2px_5px_#15264a03]">
                                   <h3 className="text-lg font-bold">Your Stack</h3>

                                   <p className="text-[12px] mt-3 text-brand-text">
                                        {selectedTechnologies.length} Technologies Selected
                                   </p>

                                   {selectedTechnologies.length === 0 ? (
                                        <div className="py-10 text-center">
                                             <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F8FAFC]">
                                                  <FiPlus className="text-2xl text-brand-text" />
                                             </div>

                                             <p className="text-sm font-semibold text-brand-text">
                                                  Your stack starts here
                                             </p>
                                             <p className="mt-2 text-xs leading-5 text-brand-text">
                                                  Add technologies to build your ideal development
                                                  stack.
                                             </p>
                                        </div>
                                   ) : (
                                        <div className="mt-5 flex flex-col gap-2">
                                             {selectedTechnologies.map((Technology) => (
                                                  <div
                                                       key={Technology.id}
                                                       className="flex items-center justify-between gap-3 border border-black/10 rounded-lg py-4 px-3"
                                                  >
                                                       <img
                                                            src={`/${Technology.icon}`}
                                                            alt={Technology.name}
                                                            className="size-7 object-contain"
                                                       />

                                                       <div className="flex-1">
                                                            <h4 className="text-xs font-semibold">
                                                                 {Technology.name}
                                                            </h4>

                                                            <p className="text-[10px] text-brand-text">
                                                                 {Technology.category}
                                                            </p>
                                                       </div>

                                                       <button
                                                            onClick={() =>
                                                                 removeFromStack(Technology.id)
                                                            }
                                                            className="cursor-pointer text-xl text-brand-text transition-colors hover:text-red-500"
                                                       >
                                                            <IoClose />
                                                       </button>
                                                  </div>
                                             ))}

                                             <button
                                                  onClick={removeAll}
                                                  className="mt-4 w-full cursor-pointer rounded-lg border border-red-300 py-2 text-xs text-red-500"
                                             >
                                                  Remove All
                                             </button>
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Technologies;
