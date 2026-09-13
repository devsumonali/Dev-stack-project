import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import type { Technology } from './types';

const technologiesHandler = async (): Promise<Technology[]> => {
     const res = await fetch('/data/technologies.json');
     const data = await res.json();
     return data;
};

function App() {
     const [technologies, setTechnologies] = useState<Technology[]>([]);

     useEffect(() => {
          technologiesHandler().then((data) => {
               setTechnologies(data);
          });
     }, []);

     console.log(technologies);

     return (
          <>
               <Navbar />

               <main>
                    <Home technologies={technologies} />
               </main>

               <Footer />
          </>
     );
}

export default App;
