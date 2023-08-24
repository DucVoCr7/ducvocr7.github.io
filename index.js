// window.jsPDF = window.jspdf.jsPDF;

const downloadPDF = ()=> {
    // window.html2canvas = html2canvas;
    // const doc = new jsPDF();
    // const elementHTML = document.querySelector(".container");
    // doc.html(elementHTML, {
    //     callback: function(doc) {
    //         doc.save('sample-document.pdf');
    //     },
    //     x: 15,
    //     y: 15,
    //     width: 170, //target width in the PDF document
    //     windowWidth: 650 //window width in CSS pixels
    // });

}

const button = document.getElementById('download_pdf')
button.onclick = downloadPDF