import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer.tsx';
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-auto bg-white">
        <Footer />
      </footer>
    </>
  );
};

export default App;
