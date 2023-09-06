import './Navbar.css';
import SidebarToggleButton from '../SidebarToggleButton/SidebarToggleButton';
import { useLanguageContext } from '../../context/LanguageContext';
import { exportToPDF } from '../../utils/pdfUtils';

const Navbar = () => {
  const { changeLanguage } = useLanguageContext();

  return (
    <nav className="nav">
      <SidebarToggleButton />
      <ul className="nav__list">
        <li className="nav__item">
          <p className="nav__link">Mi Cv</p>
        </li>
        <li className="nav__item">
          <p className="nav__link" onClick={() => changeLanguage('en')}>
            English
          </p>
        </li>
        <li className="nav__item">
          <p className="nav__link" onClick={() => changeLanguage('es')}>
            Español
          </p>
        </li>
        <li className="nav__item">
          <p className="nav__link" onClick={exportToPDF}>
            Exportar a PDF
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
