/**
 * Flat translation dictionary for site chrome text (everything except the
 * Resume content, which lives in resume-data.js and is rendered by render-resume.js).
 * Elements opt in via data-i18n="key.path" and get their textContent replaced.
 */
(function () {
  "use strict";

  const I18N = {
    en: {
      "meta.title": "Kevin López Clopatofsky - Software Engineer",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.resume": "Resume",
      "nav.reflections": "Reflections",
      "nav.contact": "Contact",

      "hero.imLabel": "I'm",

      "about.title": "About",
      "about.intro": "9+ years building fullstack software for regulated, high-stakes financial systems.",
      "about.subtitle": "Senior Software Engineer.",
      "about.birthdayLabel": "Birthday:",
      "about.birthdayValue": "April 22, 1993",
      "about.websiteLabel": "Website:",
      "about.phoneLabel": "Phone:",
      "about.cityLabel": "City:",
      "about.ageLabel": "Age:",
      "about.degreeLabel": "Degree:",
      "about.degreeValue": "Electronic engineer",
      "about.emailLabel": "Email:",
      "about.openToWork": "Open to work",
      "about.pitch": "I'm a Senior Software Engineer with 9+ years building fullstack solutions for regulated, high-stakes environments — from anti-money laundering (AML) compliance platforms at Mercado Libre to banking systems built on BBVA's technology stack. I work across the stack with Java, Spring Boot, Node.js, NestJS and Angular, deploy and scale services on Kubernetes and OpenShift, and have led process-automation initiatives with BonitaSoft BPM and RPA that cut manual review effort across multiple countries. I care about clean architecture, CI/CD discipline and mentoring the developers around me — and I'm currently open to new opportunities, remote or based in Bogotá.",

      "stats.years": "Years Of Experience",
      "stats.companies": "Companies",
      "stats.countries": "Countries With Regulatory Projects",
      "stats.certifications": "Certifications",

      "skills.title": "Skills",
      "skills.catAiDev": "AI-Assisted Development",
      "skills.catAiLlm": "AI & LLM Engineering",
      "skills.catBackend": "Backend",
      "skills.catFrontend": "Frontend",
      "skills.catCloud": "Cloud & DevOps",
      "skills.catIntegration": "Integration & Messaging",
      "skills.catSecurity": "Security & Identity",
      "skills.catAutomation": "Automation & BPM",
      "skills.catTools": "Tools & Quality",

      "reflections.pageTitle": "Reflections - Kevin López Clopatofsky",
      "reflections.title": "Reflections",
      "reflections.intro": "A few personal thoughts on where software development is headed.",
      "reflections.quote": "«The interesting question is not whether machines can think, but whether humans can stop thinking like machines.» - Alan Turing",
      "reflections.quote2": "\"Sometimes people think that if a machine can do a job, it must be following some rule or set of instructions, when in fact it may be doing something quite original.\" - Alan Turing",
      "reflections.paragraph": "It's so exciting to see how the software development industry is evolving! It's going to be a whole new world driven by automation, artificial intelligence and increasingly abstract programming layers. As AI models get smarter, the line between human intuition and machine logic will get a little blurrier. This will allow software to become more autonomous in decision-making processes, self-healing in operational contexts and highly adaptable to changing environments. As time goes by, developers will move from coding detailed instructions to orchestrating complex systems in which data, algorithms and machine learning models collaborate in real time. This shift will require a deep understanding not only of programming, but also of ethics, as the social impact of technology becomes inseparable from its technical execution. In the future, software development will be less about writing code and more about designing intelligent systems that evolve, adapt and learn from their interactions with the world.",

      "resume.title": "Resume",
      "resume.intro": "Software Engineer with over 9 years of experience across banking, regulatory compliance, and process automation, building scalable backend and frontend solutions with Java, Angular, Node.js and cloud-native technologies.",
      "resume.summaryTitle": "Summary",
      "resume.educationTitle": "Education",
      "resume.certificationsTitle": "Certifications",
      "resume.experienceTitle": "Professional Experience",
      "resume.downloadEn": "Download CV (English)",
      "resume.downloadEs": "Download CV (Spanish)",

      "contact.title": "Contact",
      "contact.intro": "Feel free to reach out through any of the channels below — I'm currently open to new opportunities.",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone",
      "contact.viewProfile": "View Profile",

      "footer.tagline": "Software Engineer specialized in backend, frontend, cloud and process automation. Based in Bogotá, Colombia."
    },

    es: {
      "meta.title": "Kevin López Clopatofsky - Ingeniero de Software",
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.resume": "Currículum",
      "nav.reflections": "Reflexiones",
      "nav.contact": "Contacto",

      "hero.imLabel": "Soy",

      "about.title": "Sobre mí",
      "about.intro": "Más de 9 años construyendo software fullstack para sistemas financieros regulados y de alto impacto.",
      "about.subtitle": "Ingeniero de Software Senior.",
      "about.birthdayLabel": "Cumpleaños:",
      "about.birthdayValue": "22 de abril de 1993",
      "about.websiteLabel": "Sitio web:",
      "about.phoneLabel": "Teléfono:",
      "about.cityLabel": "Ciudad:",
      "about.ageLabel": "Edad:",
      "about.degreeLabel": "Título:",
      "about.degreeValue": "Ingeniero electrónico",
      "about.emailLabel": "Correo:",
      "about.openToWork": "Disponible para trabajar",
      "about.pitch": "Soy Ingeniero de Software Senior con más de 9 años construyendo soluciones fullstack para entornos regulados y de alto impacto — desde plataformas de cumplimiento contra el lavado de activos (AML) en Mercado Libre hasta sistemas bancarios sobre el stack tecnológico de BBVA. Trabajo en todo el stack con Java, Spring Boot, Node.js, NestJS y Angular, despliego y escalo servicios en Kubernetes y OpenShift, y he liderado iniciativas de automatización de procesos con BPM (BonitaSoft) y RPA que redujeron el esfuerzo de revisión manual en varios países. Me importa la arquitectura limpia, la disciplina de CI/CD y el acompañamiento a los desarrolladores de mi equipo — actualmente estoy abierto a nuevas oportunidades, remoto o en Bogotá.",

      "stats.years": "Años de Experiencia",
      "stats.companies": "Empresas",
      "stats.countries": "Países con Proyectos Regulatorios",
      "stats.certifications": "Certificaciones",

      "skills.title": "Habilidades",
      "skills.catAiDev": "Desarrollo Asistido por IA",
      "skills.catAiLlm": "IA e Ingeniería de LLMs",
      "skills.catBackend": "Backend",
      "skills.catFrontend": "Frontend",
      "skills.catCloud": "Cloud y DevOps",
      "skills.catIntegration": "Integración y Mensajería",
      "skills.catSecurity": "Seguridad e Identidad",
      "skills.catAutomation": "Automatización y BPM",
      "skills.catTools": "Herramientas y Calidad",

      "reflections.pageTitle": "Reflexiones - Kevin López Clopatofsky",
      "reflections.title": "Reflexiones",
      "reflections.intro": "Algunas reflexiones personales sobre hacia dónde va el desarrollo de software.",
      "reflections.quote": "«La pregunta interesante no es si las máquinas pueden pensar, sino si los humanos pueden dejar de pensar como máquinas.» - Alan Turing",
      "reflections.quote2": "\"A veces la gente piensa que si una máquina puede hacer un trabajo, debe estar siguiendo alguna regla o conjunto de instrucciones, cuando en realidad puede estar haciendo algo bastante original.\" - Alan Turing",
      "reflections.paragraph": "¡Es muy emocionante ver cómo está evolucionando la industria del desarrollo de software! Se avecina un mundo completamente nuevo impulsado por la automatización, la inteligencia artificial y capas de programación cada vez más abstractas. A medida que los modelos de IA se vuelven más inteligentes, la línea entre la intuición humana y la lógica de la máquina se difumina un poco más. Esto permitirá que el software sea más autónomo en los procesos de toma de decisiones, autorreparable en contextos operativos y altamente adaptable a entornos cambiantes. Con el tiempo, los desarrolladores pasarán de escribir instrucciones detalladas a orquestar sistemas complejos en los que datos, algoritmos y modelos de aprendizaje automático colaboran en tiempo real. Este cambio requerirá una comprensión profunda no solo de la programación, sino también de la ética, ya que el impacto social de la tecnología se vuelve inseparable de su ejecución técnica. En el futuro, el desarrollo de software será menos sobre escribir código y más sobre diseñar sistemas inteligentes que evolucionan, se adaptan y aprenden de sus interacciones con el mundo.",

      "resume.title": "Currículum",
      "resume.intro": "Ingeniero de Software con más de 9 años de experiencia en banca, cumplimiento regulatorio y automatización de procesos, construyendo soluciones backend y frontend escalables con Java, Angular, Node.js y tecnologías cloud-native.",
      "resume.summaryTitle": "Resumen",
      "resume.educationTitle": "Educación",
      "resume.certificationsTitle": "Certificaciones",
      "resume.experienceTitle": "Experiencia Profesional",
      "resume.downloadEn": "Descargar CV (Inglés)",
      "resume.downloadEs": "Descargar CV (Español)",

      "contact.title": "Contacto",
      "contact.intro": "No dudes en escribirme por cualquiera de estos canales — actualmente estoy disponible para nuevas oportunidades.",
      "contact.emailLabel": "Correo",
      "contact.phoneLabel": "Teléfono",
      "contact.viewProfile": "Ver Perfil",

      "footer.tagline": "Ingeniero de Software especializado en backend, frontend, cloud y automatización de procesos. Radicado en Bogotá, Colombia."
    }
  };

  const STORAGE_KEY = "site-lang";
  const DEFAULT_LANG = "en";
  let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  let typedInstance = null;

  function translate(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || I18N[DEFAULT_LANG][key] || key;
  }

  function applyTextNodes(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = translate(lang, el.getAttribute("data-i18n"));
    });
    document.documentElement.lang = lang;
  }

  function initTyped(lang) {
    const el = document.querySelector(".typed");
    if (!el || typeof Typed === "undefined") return;

    const attr = lang === "es" ? "data-typed-items-es" : "data-typed-items";
    const strings = (el.getAttribute(attr) || el.getAttribute("data-typed-items")).split(",");

    if (typedInstance) {
      typedInstance.destroy();
    }
    typedInstance = new Typed(".typed", {
      strings: strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  function updateLangToggleLabel(lang) {
    const label = document.getElementById("lang-toggle-label");
    if (label) {
      label.textContent = lang === "en" ? "ES" : "EN";
    }
  }

  function setLanguage(lang, isInitial) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTextNodes(lang);
    updateLangToggleLabel(lang);
    if (typeof renderResume === "function") {
      renderResume(lang);
    }
    initTyped(lang);
    if (!isInitial && typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  // Script is loaded at the end of <body>, so the DOM is already parsed —
  // run immediately rather than waiting for DOMContentLoaded (which may
  // already have fired by the time this executes).
  setLanguage(currentLang, true);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      setLanguage(currentLang === "en" ? "es" : "en", false);
    });
  }

  window.getCurrentLang = function () {
    return currentLang;
  };
})();
