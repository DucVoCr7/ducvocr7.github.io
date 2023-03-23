function print() {
  const elementHTML = document.getElementById("contentPDF");
  const options = {
    margin: [0.01, 0.01, 0.01, 0.01],
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(options).from(elementHTML).save();
}
const buttonSavePDF = document.getElementById("savePDF");
buttonSavePDF.onclick = print;
