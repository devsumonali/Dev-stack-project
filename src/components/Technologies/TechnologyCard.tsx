import { FaStar } from 'react-icons/fa';
import type { Technology } from '../../types';

interface TechnologyCardProps {
     Technology: Technology;
     isAdded: boolean;
     addToStack: (technology: Technology) => void;
}

const TechnologyCard = ({ Technology }: TechnologyCardProps) => {
     return (
          <article className="w-full border border-black/10 rounded-[17px] p-4 shadow-[0_2px_5px_#15264a03]">
               <div className="flex justify-between gap-20">
                    <img
                         className="size-7.5 object-contain"
                         src={`/${Technology.icon}`}
                         alt={Technology.name}
                    />
                    <span className="rounded-full border px-2.5 py-1 text-[11px] whitespace-nowrap border-sky-100 bg-sky-50 text-sky-500">
                         {Technology.id}
                    </span>
               </div>
               <h3 className="mt-6 mb-3 text-lg font-bold ">{Technology.name}</h3>
               <p className=" text-[13px] text-brand-text">{Technology.description}</p>

               <div className="flex justify-between gap-5 mt-10">
                    <span className="rounded bg-[#f4f6f9] text-[12px] px-1.75 py-0.75 text-brand-text">
                         {Technology.category}
                    </span>
                    <span className="rounded bg-[#f4f6f9] text-[12px] px-1.75 py-0.75 text-brand-text">
                         {Technology.difficulty}
                    </span>
                    <div className="flex items-center gap-1">
                         <FaStar className="text-yellow-400" />
                         <span className="text-brand-text text-[12px]">
                              {Technology.rating.toFixed(1)}
                         </span>
                    </div>
               </div>
               <button className="w-full mt-5 cursor-pointer rounded-lg font-medium bg-black px-1.25 py-2.5 text-white text-xs ">
                    Add to Stack
               </button>
          </article>
     );
};

export default TechnologyCard;
