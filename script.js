function generateResume() {
  // Get all values from form
  document.getElementById("r-name").innerText = document.getElementById("name").value;
  document.getElementById("r-title").innerText = document.getElementById("title").value;
  document.getElementById("r-contact").innerText = document.getElementById("contact").value;
  document.getElementById("r-links").innerText = document.getElementById("links").value;

  document.getElementById("r-profile").innerText = document.getElementById("profile").value;
  document.getElementById("r-education").innerText = document.getElementById("education").value;
  document.getElementById("r-skills").innerText = document.getElementById("skills").value;
  document.getElementById("r-ai").innerText = document.getElementById("ai").value;
  document.getElementById("r-projects").innerText = document.getElementById("projects").value;
  document.getElementById("r-experience").innerText = document.getElementById("experience").value;
  document.getElementById("r-research").innerText = document.getElementById("research").value;
  document.getElementById("r-competencies").innerText = document.getElementById("competencies").value;

  // Show the resume section
  document.getElementById("form-section").style.display = "none";
  document.getElementById("resume-section").style.display = "block";
}

// function downloadPDF() {
//   const element = document.getElementById("resume");
//   const options = {
//     margin: 0.5,
//     filename: "My_Resume.pdf",
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
//   };
//   html2pdf().from(element).set(options).save();
// }
function downloadPDF() {
     const buttons = document.querySelector('.buttons');
  buttons.style.display = 'none';

  const element = document.getElementById("resume-section");
  const options = {
    margin: 0,
    filename: "My_Resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(options).from(element).save();
}



function editAgain() {
  document.getElementById("form-section").style.display = "block";
  document.getElementById("resume-section").style.display = "none";
}
