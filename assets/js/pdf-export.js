/**
 * Client-side CV PDF generation with jsPDF, reading from the same
 * RESUME_DATA source used to render the on-page Resume section — so the
 * PDF can never drift out of sync with the page.
 *
 * buildResumeDoc() takes the jsPDF constructor as a parameter (rather than
 * reading a browser global) so it can also be exercised from a plain Node
 * script for testing, without needing a DOM/window.
 */
function buildResumeDoc(lang, JsPdfCtor) {
  const doc = new JsPdfCtor({ unit: "mm", format: "a4" });

  const identity = RESUME_DATA.identity;
  const data = RESUME_DATA[lang] || RESUME_DATA.en;

  const labels = lang === "es"
    ? {
        contact: "CONTACTO",
        education: "EDUCACIÓN",
        certifications: "CERTIFICACIONES",
        summary: "RESUMEN",
        experience: "EXPERIENCIA PROFESIONAL",
        degree: "Ingeniero Electrónico"
      }
    : {
        contact: "CONTACT",
        education: "EDUCATION",
        certifications: "CERTIFICATIONS",
        summary: "SUMMARY",
        experience: "PROFESSIONAL EXPERIENCE",
        degree: "Electronic Engineer"
      };

  const PAGE_W = 210;
  const PAGE_H = 297;
  const SIDEBAR_W = 68;
  const MARGIN = 14;
  const MAIN_X = SIDEBAR_W + 10;
  const MAIN_W = PAGE_W - MAIN_X - MARGIN;
  const SIDEBAR_COLOR = [214, 228, 242];
  const ACCENT_COLOR = [5, 99, 187];
  const TEXT_COLOR = [40, 40, 40];

  function drawSidebarBackground() {
    doc.setFillColor(SIDEBAR_COLOR[0], SIDEBAR_COLOR[1], SIDEBAR_COLOR[2]);
    doc.rect(0, 0, SIDEBAR_W, PAGE_H, "F");
  }

  drawSidebarBackground();

  // --- Sidebar: contact, education, certifications ---
  let sy = MARGIN;
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);

  function sidebarHeading(text) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(text, 10, sy);
    sy += 6;
  }

  sidebarHeading(labels.contact);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  [identity.location, identity.phone, identity.email].forEach((line) => {
    const wrapped = doc.splitTextToSize(line, SIDEBAR_W - 16);
    doc.text(wrapped, 10, sy);
    sy += wrapped.length * 4.5 + 2;
  });

  sy += 4;
  sidebarHeading(labels.education);
  doc.setFontSize(9);
  data.education.forEach((ed) => {
    doc.setFont("helvetica", "bold");
    let wrapped = doc.splitTextToSize(ed.title, SIDEBAR_W - 16);
    doc.text(wrapped, 10, sy);
    sy += wrapped.length * 4.5;
    doc.setFont("helvetica", "normal");
    doc.text(ed.dates, 10, sy);
    sy += 4.5;
    wrapped = doc.splitTextToSize(ed.institution, SIDEBAR_W - 16);
    doc.text(wrapped, 10, sy);
    sy += wrapped.length * 4.5 + 3;
  });

  sy += 2;
  sidebarHeading(labels.certifications);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  data.certifications.forEach((cert) => {
    const wrapped = doc.splitTextToSize(`${cert.title} — ${cert.institution} (${cert.year})`, SIDEBAR_W - 16);
    doc.text(wrapped, 10, sy);
    sy += wrapped.length * 4 + 2;
  });

  // --- Main column: header, summary, experience ---
  let my = MARGIN;

  doc.setTextColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(identity.name, MAIN_X, my);
  my += 7;

  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10.5);
  doc.text(labels.degree, MAIN_X, my);
  my += 10;

  function ensureSpace(needed) {
    if (my + needed > PAGE_H - MARGIN) {
      doc.addPage();
      drawSidebarBackground();
      my = MARGIN;
    }
  }

  function mainHeading(text) {
    ensureSpace(10);
    doc.setTextColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(text, MAIN_X, my);
    my += 6;
  }

  mainHeading(labels.summary);
  doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const summaryWrapped = doc.splitTextToSize(data.summary, MAIN_W);
  ensureSpace(summaryWrapped.length * 4.5);
  doc.text(summaryWrapped, MAIN_X, my);
  my += summaryWrapped.length * 4.5 + 8;

  mainHeading(labels.experience);

  data.experience.forEach((job) => {
    ensureSpace(14);
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text(job.title, MAIN_X, my);
    my += 5;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text(`${job.company}  |  ${job.dates}`, MAIN_X, my);
    my += 5.5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    job.bullets.forEach((bullet) => {
      const bWrapped = doc.splitTextToSize(`•  ${bullet}`, MAIN_W - 2);
      ensureSpace(bWrapped.length * 4.3);
      doc.text(bWrapped, MAIN_X + 1, my);
      my += bWrapped.length * 4.3 + 1;
    });
    my += 4;
  });

  return doc;
}

function downloadResumePdf(lang) {
  const JsPdfCtor = window.jspdf && window.jspdf.jsPDF;
  if (!JsPdfCtor) return;
  const doc = buildResumeDoc(lang, JsPdfCtor);
  const filename = lang === "es"
    ? "Kevin-Lopez-Clopatofsky-CV-ES.pdf"
    : "Kevin-Lopez-Clopatofsky-CV-EN.pdf";
  doc.save(filename);
}

// Script is loaded at the end of <body>, DOM is already available.
// (Guarded so this file can also be required from a plain Node script for testing.)
if (typeof document !== "undefined") {
  const downloadEnBtn = document.getElementById("download-cv-en");
  if (downloadEnBtn) {
    downloadEnBtn.addEventListener("click", () => downloadResumePdf("en"));
  }
  const downloadEsBtn = document.getElementById("download-cv-es");
  if (downloadEsBtn) {
    downloadEsBtn.addEventListener("click", () => downloadResumePdf("es"));
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { buildResumeDoc };
}
