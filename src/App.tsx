import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          technologiesHandler().then((data) => {
               setTechnologies(data);
               setLoading(false);
          });
     }, []);

     const addToStack = (technology: Technology) => {
          const isExist = selectedTechnologies.some((item) => item.id === technology.id);

          if (isExist) {
               toast.warning(`${technology.name} is already in your stack!`);
               return;
          }
          setSelectedTechnologies([...selectedTechnologies, technology]);
          toast.success(`${technology.name} is added to your stack!`);
     };

     const removeFromStack = (id: string) => {
          const removedTechnology = selectedTechnologies.find((item) => item.id === id);
          const remaining = selectedTechnologies.filter((item) => item.id !== id);
          setSelectedTechnologies(remaining);

          if (removedTechnology) {
               toast.info(`${removedTechnology.name} removed from your stack.`);
          }
     };

     const removeAll = () => {
          setSelectedTechnologies([]);
          toast.info('All technologies removed from your stack.');
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
                         loading={loading}
                    />
               </main>

               <Footer />

               <ToastContainer position="bottom-right" autoClose={2500} />
          </>
     );
}

export default App;
