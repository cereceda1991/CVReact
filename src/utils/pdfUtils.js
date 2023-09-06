import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import data from '../data/dataEn.json';

// Define una función para obtener los datos del estudiante
const getStudentData = () => {
  const { name, lastName } = data.headerData[0];
  return { name, lastName };
};

// Define una función para exportar a PDF
export const exportToPDF = async () => {
  try {
    const element = document.getElementById('certificate');

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
    });
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    const pdfWidth = 210;
    const pdfHeight = 297;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

    const studentData = getStudentData();
    pdf.save(`CV${studentData.name}${studentData.lastName}.pdf`);
  } catch (error) {
    console.error('Error al exportar a PDF:', error);
  }
};
