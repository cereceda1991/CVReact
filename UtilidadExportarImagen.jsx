import "./App.css";
import HeaderCv from "./components/Header/HeaderCv";
import BodyCV from "./components/BodyCV/BodyCV";
import dataCv from "./data/dataCv.json";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const UtilidadExportarImagen = () => {
  const exportToPDF = () => {
    const element = document.getElementById("cv_container");

    html2canvas(element, { scale: 3 }) // Ajusta la escala a un valor mayor para mejorar la calidad
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0); // Utiliza JPEG en lugar de PNG para una mejor calidad
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("component.pdf");
      });
  };

  return (
    <div className="main_app" id="app">
      <section className="container_cv">
        <div id="cv_container">
          <HeaderCv info={dataCv.headerData} />
          <BodyCV info={dataCv} />
        </div>
      </section>
      <section>
        <button onClick={exportToPDF}>Exportar a PDF</button>
      </section>
    </div>
  );
};

export default UtilidadExportarImagen;
