/**
 * Single source of truth for CV content (Education / Certifications / Experience / Summary).
 * Used by render-resume.js to build the on-page Resume section AND by pdf-export.js to
 * generate the downloadable PDF, in both languages, so both stay in sync automatically.
 */
const RESUME_DATA = {
  identity: {
    name: "Kevin Danilo López Clopatofsky",
    location: "Bogotá D.C., Colombia",
    phone: "+57 313 336 5315",
    email: "kdlopezc93@gmail.com"
  },

  en: {
    summary: "Software Engineer with over 9 years of experience in fullstack development, specialized in banking systems, regulatory compliance (AML) and process automation, from initial concept to final, production-ready deliverable.",

    education: [
      {
        title: "Bachelor of Electronic Engineering",
        dates: "2010 - 2017",
        institution: "Universidad Distrital Francisco Jose de Caldas, Bogotá, CO",
        description: "During my training, I acquired skills in network design, development of communication systems, and programming of embedded devices. In addition, I participated in practical projects that applied theory to real solutions, which allowed me to strengthen my skills in hardware and software integration for various technological sectors."
      }
    ],

    certifications: [
      { title: "Cybersecurity Fundamentals, Agile Explorer & Explore Emerging Tech", year: "2024", institution: "IBM" },
      { title: "Professional Git & GitHub, Python (PIP, Virtual Environments, Comprehensions)", year: "2024", institution: "Platzi" },
      { title: "Scrum Foundation Professional Certificate (SFPC)", year: "2020", institution: "Certiprof" },
      { title: "Bot Developer", year: "2020", institution: "Automation Anywhere" }
    ],

    experience: [
      {
        title: "Senior Software Engineer",
        dates: "April 2025 - July 2026",
        company: "Mercado Libre, Remote",
        bullets: [
          "Development of backend APIs and frontend features for the Anti-Money Laundering (AML) compliance area.",
          "Application segmentation to support new business models, including banks in Argentina and Mexico and a fiduciary institution in Mexico, ensuring regulatory compliance across countries.",
          "Infrastructure management supporting the AML platform and its services.",
          "Improvement of workflows and processes for reviewing potential infraction cases across Mercado Libre's regional sites, ensuring compliance with each country's regulations.",
          "Monitoring and incident response using Datadog, Grafana and OpsGenie to ensure platform availability and reliability.",
          "Adopted AI-assisted engineering practices end to end — Spec-Driven Development, prompt engineering, and AI-assisted code review, testing and documentation — using Claude Code, GitHub Copilot, Cursor, Windsurf and OpenAI Codex to speed up delivery on the AML platform.",
          "Integrated LLM APIs and agentic workflows (MCP) into internal tooling, backed by Mercado Libre's proprietary vector-database infrastructure, extending AI into the team's automation workflows."
        ]
      },
      {
        title: "Ingeniero de Desarrollo III - Senior Developer",
        dates: "August 2021 - March 2025",
        company: "Trycore S.A.S, Bogotá, CO",
        bullets: [
          "Fullstack development with Java, Node.js, NestJS and Angular, implementing scalable solutions with clean architecture principles.",
          "Implementation and maintenance of applications on ASO and APX (BBVA technologies), ensuring performance, security and compliance with banking standards.",
          "Development and integration of REST and GraphQL microservices, with asynchronous communication via RabbitMQ and Kafka.",
          "Configuration and deployment on Kubernetes and OpenShift, optimizing scalability of production applications.",
          "Continuous integration on Azure with automated deployments via Jenkins and Artifactory/Nexus, ensuring efficient CI/CD pipelines.",
          "Authentication and security management with Keycloak, integrating OAuth2 and OpenID Connect flows.",
          "Advanced monitoring with Dynatrace, Elasticsearch, SonarQube and Postman, ensuring traceability and application optimization.",
          "Development and automation of BPM workflows with BonitaSoft and BPMN 2.0, improving efficiency in business processes.",
          "Team leadership, driving adoption of best practices in development and Agile/DevOps methodologies.",
          "Began exploring AI-assisted coding with Cursor for day-to-day development tasks."
        ]
      },
      {
        title: "Specialist Consultant - Senior Developer",
        dates: "March 2021 - August 2021",
        company: "SETI S.A.S, Bogotá, CO",
        bullets: [
          "Backend and Frontend Development: I used Java and Angular for the development of large-scale software solutions.",
          "Clean Architecture: Implemented clean architecture principles, ensuring maintainability and scalability in critical projects.",
          "Azure Continuous Integration: Created and managed continuous integration (CI/CD) environments using Azure DevOps, improving the efficiency of the development lifecycle.",
          "Software Integrations: Performed key integrations with monitoring tools such as Dynatrace and Nagios for real-time monitoring of application performance and availability.",
          "Outsourcing for a major financial institution: Working closely with the institution's high performance team, participating in high impact projects involving critical financial systems."
        ]
      },
      {
        title: "Fullstack Software Development Engineer",
        dates: "July 2018 - July 2020",
        company: "Trycore S.A.S, Bogotá, CO",
        bullets: [
          "Implementation of agile methodologies and CI/CD to improve software development.",
          "Frontend development with AngularJS, Angular and backend with Spring Boot and Java.",
          "Design of solutions in Groovy and Laravel for web services and distributed databases.",
          "Process automation through RPA using Automation Anywhere.",
          "Development of solutions in Bonita BPM for automated credit processes."
        ]
      },
      {
        title: "Entrepreneur & Software Developer",
        dates: "December 2016 - July 2018",
        company: "Rowel Ingeniería, Bogotá, CO",
        bullets: [
          "Software development in the hydrocarbon sector using Java and PHP.",
          "Design of REST API architectures and network infrastructure management.",
          "Frontend development for legal sector applications.",
          "Entrepreneurship: I managed software projects from initial idea to implementation, ensuring delivery efficiency and quality.",
          "Team leadership: I trained and led a team of developers to meet technical objectives, exceeding customer expectations."
        ]
      },
      {
        title: "Trainee",
        dates: "June 2016 - December 2016",
        company: "Avantel S.A.S, Bogotá, CO",
        bullets: [
          "Development of web applications for NOC monitoring and billing systems."
        ]
      }
    ]
  },

  es: {
    summary: "Ingeniero de Software con más de 9 años de experiencia en desarrollo fullstack, especializado en sistemas bancarios, cumplimiento regulatorio (AML) y automatización de procesos, desde la concepción inicial hasta la entrega final en producción.",

    education: [
      {
        title: "Ingeniería Electrónica",
        dates: "2010 - 2017",
        institution: "Universidad Distrital Francisco José de Caldas, Bogotá, CO",
        description: "Durante mi formación adquirí habilidades en diseño de redes, desarrollo de sistemas de comunicación y programación de dispositivos embebidos. Además, participé en proyectos prácticos que aplicaron la teoría a soluciones reales, lo que me permitió fortalecer mis habilidades en integración de hardware y software para diversos sectores tecnológicos."
      }
    ],

    certifications: [
      { title: "Cybersecurity Fundamentals, Agile Explorer & Explore Emerging Tech", year: "2024", institution: "IBM" },
      { title: "Professional Git & GitHub, Python (PIP, Entornos Virtuales, Comprehensions)", year: "2024", institution: "Platzi" },
      { title: "Scrum Foundation Professional Certificate (SFPC)", year: "2020", institution: "Certiprof" },
      { title: "Bot Developer", year: "2020", institution: "Automation Anywhere" }
    ],

    experience: [
      {
        title: "Ingeniero de Software SSR",
        dates: "Abril 2025 - Julio 2026",
        company: "Mercado Libre, Remoto",
        bullets: [
          "Desarrollo de APIs backend y funcionalidades frontend para el área de cumplimiento contra el Lavado de Activos (AML).",
          "Segmentación de aplicaciones para dar soporte a nuevos modelos de negocio, incluyendo bancos en Argentina y México y una fiduciaria en México, garantizando el cumplimiento normativo en cada país.",
          "Gestión de infraestructura de soporte para la plataforma de AML y sus servicios.",
          "Mejora de flujos y procesos para la revisión de posibles casos de infracción en los distintos sitios regionales de Mercado Libre, asegurando el cumplimiento de la normativa de cada país.",
          "Monitoreo y respuesta a incidentes usando Datadog, Grafana y OpsGenie para garantizar la disponibilidad y confiabilidad de la plataforma.",
          "Adopción de prácticas de desarrollo asistidas por IA de punta a punta — Spec-Driven Development, prompt engineering, y revisión de código, pruebas y documentación asistidas por IA — usando Claude Code, GitHub Copilot, Cursor, Windsurf y OpenAI Codex para acelerar la entrega en la plataforma de AML.",
          "Integración de APIs de LLMs y flujos de trabajo con agentes (MCP) en herramientas internas, apoyado en la infraestructura propia de bases de datos vectoriales de Mercado Libre, extendiendo el uso de IA a los flujos de automatización del equipo."
        ]
      },
      {
        title: "Ingeniero de Desarrollo III - Senior Developer",
        dates: "Agosto 2021 - Marzo 2025",
        company: "Trycore S.A.S, Bogotá, CO",
        bullets: [
          "Desarrollo Fullstack con Java, Node.js, NestJS y Angular, implementando soluciones escalables con principios de arquitectura limpia.",
          "Implementación y mantenimiento de aplicaciones en ASO y APX (tecnologías BBVA), garantizando rendimiento, seguridad y cumplimiento de estándares bancarios.",
          "Desarrollo e integración de microservicios REST y GraphQL, con comunicación asíncrona mediante RabbitMQ y Kafka.",
          "Configuración y despliegue en Kubernetes y OpenShift, optimizando la escalabilidad de aplicaciones en entornos productivos.",
          "Integración continua en Azure y despliegues automatizados con Jenkins y Artifactory/Nexus, asegurando flujos CI/CD eficientes.",
          "Gestión de autenticación y seguridad con Keycloak, integrando flujos OAuth2 y OpenID Connect.",
          "Monitoreo avanzado con Dynatrace, Elasticsearch, SonarQube y Postman, asegurando trazabilidad y optimización de aplicaciones.",
          "Desarrollo y automatización de flujos BPM con BonitaSoft y BPMN 2.0, mejorando la eficiencia en procesos empresariales.",
          "Liderazgo y gestión de equipos, facilitando la adopción de mejores prácticas en desarrollo y metodologías Agile y DevOps.",
          "Inicio de exploración de codificación asistida por IA con Cursor en tareas de desarrollo del día a día."
        ]
      },
      {
        title: "Consultor Especialista - Desarrollador Senior",
        dates: "Marzo 2021 - Agosto 2021",
        company: "SETI S.A.S, Bogotá, CO",
        bullets: [
          "Desarrollo backend y frontend: utilicé Java y Angular para el desarrollo de soluciones de software a gran escala.",
          "Arquitectura limpia: implementé principios de arquitectura limpia, asegurando la mantenibilidad y escalabilidad en proyectos críticos.",
          "Integración continua en Azure: creé y gestioné entornos de CI/CD utilizando Azure DevOps, mejorando la eficiencia del ciclo de vida de desarrollo.",
          "Integraciones de software: realicé integraciones clave con herramientas de monitoreo como Dynatrace y Nagios para el monitoreo en tiempo real del rendimiento y disponibilidad de las aplicaciones.",
          "Outsourcing para una importante entidad financiera: trabajé de la mano del equipo de alto rendimiento de la institución, en proyectos de alto impacto sobre sistemas financieros críticos."
        ]
      },
      {
        title: "Ingeniero de Desarrollo de Software Fullstack",
        dates: "Julio 2018 - Julio 2020",
        company: "Trycore S.A.S, Bogotá, CO",
        bullets: [
          "Implementación de metodologías ágiles e integración continua para mejorar el desarrollo de software.",
          "Desarrollo frontend con AngularJS y Angular, y backend con Spring Boot y Java.",
          "Diseño de soluciones en Groovy y Laravel para servicios web y bases de datos distribuidas.",
          "Automatización de procesos mediante RPA utilizando Automation Anywhere.",
          "Desarrollo de soluciones en Bonita BPM para procesos automatizados de crédito."
        ]
      },
      {
        title: "Emprendedor y Desarrollador de Software",
        dates: "Diciembre 2016 - Julio 2018",
        company: "Rowel Ingeniería, Bogotá, CO",
        bullets: [
          "Desarrollo de software para el sector de hidrocarburos utilizando Java y PHP.",
          "Diseño de arquitecturas de API REST y gestión de infraestructura de red.",
          "Desarrollo frontend para aplicaciones del sector legal.",
          "Emprendimiento: gestioné proyectos de software desde la idea inicial hasta su implementación, garantizando eficiencia y calidad en la entrega.",
          "Liderazgo de equipo: formé y lideré un equipo de desarrolladores para cumplir objetivos técnicos, superando las expectativas del cliente."
        ]
      },
      {
        title: "Pasante",
        dates: "Junio 2016 - Diciembre 2016",
        company: "Avantel S.A.S, Bogotá, CO",
        bullets: [
          "Desarrollo de aplicaciones web para el monitoreo del NOC y sistemas de gestión de facturación."
        ]
      }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = RESUME_DATA;
}
