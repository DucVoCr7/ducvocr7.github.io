// function savePDF() {
//   const elementHTML = document.getElementById("contentPDF");
//   const options = {
//     margin: [0.01, 0.01, 0.01, 0.01],
//     filename: "myfile.pdf",
//     image: { type: "jpeg", quality: 1 },
//     html2canvas: { scale: 1 },
//     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//   };
//   html2pdf().set(options).from(elementHTML).save();
// }
// const buttonSavePDF = document.getElementById("savePDF");
// buttonSavePDF.onclick = savePDF;

function toPDF() {
  window.open(
    "https://drive.google.com/file/d/1K_F30huBRDD1z34CnIKJPvFqdHz80qzb/view?usp=sharing",
    "_blank"
  );
}
const buttontoPDF = document.getElementById("toPDF");
buttontoPDF.onclick = toPDF;
