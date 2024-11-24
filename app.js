// Ayuda Modal
const ayudaModal = document.getElementById("ayuda-modal");
const btnAyuda = document.getElementById("btn-ayuda");
const closeAyuda = document.getElementById("close-ayuda");

btnAyuda.addEventListener("click", () => {
  ayudaModal.classList.remove("hidden");
});

closeAyuda.addEventListener("click", () => {
  ayudaModal.classList.add("hidden");
});

// Report Form Modal
const reportModal = document.getElementById("report-modal");
const btnReportar = document.getElementById("btn-reportar");
const closeReportModal = document.getElementById("close-report-modal");
const reportForm = document.getElementById("report-form");

btnReportar.addEventListener("click", () => {
  reportModal.classList.remove("hidden");
});

closeReportModal.addEventListener("click", () => {
  reportModal.classList.add("hidden");
});

reportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reportModal.classList.add("hidden");
  successModal.classList.remove("hidden");
  setTimeout(() => {
    successModal.classList.add("hidden");
  }, 3000);
  reportForm.reset();
});

// Success Modal
const successModal = document.getElementById("success-modal");

// Ver Reportes Modal
const reportesModal = document.getElementById("reportes-modal");
const btnVerReportes = document.getElementById("btn-ver-reportes");
const closeReportesModal = document.getElementById("close-reportes-modal");

btnVerReportes.addEventListener("click", () => {
  reportesModal.classList.remove("hidden");
  const reportesList = document.getElementById("reportes-list");
  reportesList.innerHTML = `
    <p><strong>Código:</strong> 12345</p>
    <p><strong>Fecha:</strong> 2024-11-23</p>
    <p><strong>Descripción:</strong> Falla en el alumbrado público.</p>
    <hr>
  `;
});

closeReportesModal.addEventListener("click", () => {
  reportesModal.classList.add("hidden");
});
