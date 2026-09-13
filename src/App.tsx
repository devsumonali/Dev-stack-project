import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
     return (
          <>
               <Navbar />

               <h1 className="text-5xl font-bold text-red-500">Tailwind Working</h1>

               <main>
                    <Home />
               </main>

               <Footer />
          </>
     );
}

export default App;
