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
     const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

     useEffect(() => {
          technologiesHandler().then((data) => {
               setTechnologies(data);
          });
     }, []);

     const addToStack = (technology: Technology) => {
          const isExist = selectedTechnologies.some((item) => item.id === technology.id);

          if (isExist) {
               return;
          }

          setSelectedTechnologies([...selectedTechnologies, technology]);
     };

     const removeFromStack = (id: string) => {
          const remaining = selectedTechnologies.filter((item) => item.id !== id);

          setSelectedTechnologies(remaining);
     };

     const removeAll = () => {
          setSelectedTechnologies([]);
     };

     return (
          <>
               <Navbar />

               <main>
                    <Home
                         technologies={technologies}
                         selectedTechnologies={selectedTechnologies}
                         addToStack={addToStack}
                         removeFromStack={removeFromStack}
                         removeAll={removeAll}
                    />
               </main>

               <Footer />
          </>
     );
}

export default App;
