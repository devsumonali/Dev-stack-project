import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
     return (
          <>
               <Navbar />

               <main>
                    <Home />
               </main>

               <Footer />
          </>
     );
}

export default App;
