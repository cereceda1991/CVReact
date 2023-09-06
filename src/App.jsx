import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarToggleButton from './components/SidebarToggleButton/SidebarToggleButton';
import { ColorProvider } from './context/ColorContext';

const App = () => {
  return (
    <section>
      <ColorProvider>
        <Navbar />
        <Sidebar isOpen={false} />
        <SidebarToggleButton />
        <div className="container_cv">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ColorProvider>
    </section>
  );
};

export default App;
