import './Navbar.css';
import SidebarToggleButton from '../SidebarToggleButton/SidebarToggleButton';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useLanguageContext } from '../../context/LanguageContext';

const Navbar = () => {
  // Asegúrate de definir certificateData y id
  const certificateData = {
    studentSelected: { name: 'Max', lastname: 'Cereceda' },
  };
  const id = 47126753;

  const exportToPDF = () => {
    const element = document.getElementById('certificate');

    html2canvas(element, { scale: 3, useCORS: true, allowTaint: true }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);

        const pdfWidth = 210;
        const pdfHeight = 297;

        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: [pdfWidth, pdfHeight],
        });

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(
          `CV${certificateData.studentSelected.name}${certificateData.studentSelected.lastname}ES-${id}.pdf`,
        );
      },
    );
  };

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
