import Hero from '../components/hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import type { Technology } from '../types';

interface HomeProps {
     technologies: Technology[];
     selectedTechnologies: Technology[];
     addToStack: (technology: Technology) => void;
     removeFromStack: (id: string) => void;
     removeAll: () => void;
}

function Home({
     technologies,
     selectedTechnologies,
     addToStack,
     removeFromStack,
     removeAll,
}: HomeProps) {
     return (
          <div>
               <Hero />

               <Technologies
                    technologies={technologies}
                    selectedTechnologies={selectedTechnologies}
                    addToStack={addToStack}
                    removeFromStack={removeFromStack}
                    removeAll={removeAll}
               />
          </div>
     );
}

export default Home;
