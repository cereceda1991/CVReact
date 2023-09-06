import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarToggleButton from './components/SidebarToggleButton/SidebarToggleButton';

const App = () => {
  return (
    <section>
      <Navbar />
      <Sidebar isOpen={false} />
      <SidebarToggleButton />
      <div className="container_cv">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
