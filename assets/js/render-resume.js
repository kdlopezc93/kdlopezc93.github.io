/**
 * Builds the Resume section content (Summary, Education, Certifications,
 * Professional Experience) from RESUME_DATA (resume-data.js), in the given
 * language. Called on load and every time the language toggle changes.
 */
function renderResume(lang) {
  if (typeof RESUME_DATA === "undefined") return;

  const identity = RESUME_DATA.identity;
  const data = RESUME_DATA[lang] || RESUME_DATA.en;

  const summaryEl = document.getElementById("resume-summary-container");
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="resume-item pb-0">
        <h4>${identity.name}</h4>
        <p><em>${data.summary}</em></p>
        <ul>
          <li>${identity.location}</li>
          <li>${identity.phone}</li>
          <li>${identity.email}</li>
        </ul>
      </div>`;
  }

  const educationEl = document.getElementById("resume-education-container");
  if (educationEl) {
    educationEl.innerHTML = data.education.map((item) => `
      <div class="resume-item">
        <h4>${item.title}</h4>
        <h5>${item.dates}</h5>
        <p><em>${item.institution}</em></p>
        <p>${item.description}</p>
      </div>`).join("");
  }

  const certificationsEl = document.getElementById("resume-certifications-container");
  if (certificationsEl) {
    certificationsEl.innerHTML = data.certifications.map((item) => `
      <div class="resume-item">
        <h4>${item.title}</h4>
        <h5>${item.year}</h5>
        <p><em>${item.institution}</em></p>
      </div>`).join("");
  }

  const experienceEl = document.getElementById("resume-experience-container");
  if (experienceEl) {
    experienceEl.innerHTML = data.experience.map((job) => `
      <div class="resume-item">
        <h4>${job.title}</h4>
        <h5>${job.dates}</h5>
        <p><em>${job.company}</em></p>
        <ul>
          ${job.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      </div>`).join("");
  }
}
