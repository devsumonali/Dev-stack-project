import Hero from '../components/hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import type { Technology } from '../types';

interface HomeProps {
     technologies: Technology[];
}

function Home({ technologies }: HomeProps) {
     console.log(technologies);

     return (
          <div>
               <Hero />
               <Technologies technologies={technologies} />
          </div>
     );
}

export default Home;
