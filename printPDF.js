function print() {
  const elementHTML = document.getElementById("contentPDF");
  const options = {
    margin: [0.1, 0.1, 0.1, 0.1],
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 1.5 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(options).from(elementHTML).save();
}
const buttonSavePDF = document.getElementById("savePDF");
buttonSavePDF.onclick = print;
