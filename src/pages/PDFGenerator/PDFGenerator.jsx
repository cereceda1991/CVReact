import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './PDFGenerator.css';
import Home from "../Home/Home";

const PDFGenerator = () => {

  // Asegúrate de definir certificateData y id
  const certificateData = { studentSelected: { name: "Max", lastname: "Cereceda" } };
  const id = 47126753;

  const exportToPDF = () => {
    const element = document.getElementById("certificate");

    html2canvas(element, { scale: 3, useCORS: true, allowTaint: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const pdfWidth = 210; 
      const pdfHeight = 297; 

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight]
      });

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(
        `${certificateData.studentSelected.name}-${certificateData.studentSelected.lastname}-certificate-${id}.pdf`
      );
    });
  };

  return (
    <section >
      <Home />
      <button onClick={exportToPDF}>Exportar a PDF</button>
    </section>
  );
};

export default PDFGenerator;
