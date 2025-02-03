import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer.tsx';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
        <ToastContainer />
      </main>
      <footer className="mt-auto bg-white">
        <Footer />
      </footer>
    </>
  );
};

export default App;
