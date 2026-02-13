// =====================
// MENU MOBILE
// =====================
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.hidden = true;
  burger?.setAttribute("aria-expanded", "false");
}

burger?.addEventListener("click", () => {
  if (!mobileNav) return;
  const isOpen = !mobileNav.hidden;
  mobileNav.hidden = isOpen;
  burger.setAttribute("aria-expanded", String(!isOpen));
});

mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMobileNav);
});

// =====================
// ANNEE FOOTER
// =====================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// =====================
// I18N (FR/EN) — TRADUCTION TOTALE
// =====================
const translations = {
  fr: {
    meta_title: "Portfolio — Mateo Nieroz",
    meta_description:
      "Portfolio de Mateo Nieroz — étudiant ingénieur (bâtiments durables & intelligents) et Master MAE.",

    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_education: "Formation",
    nav_contact: "Contact",

    hero_kicker: "Portfolio — Ingénierie & Management",
    hero_subtitle:
      "Étudiant en 5ᵉ année de cycle ingénieur à Polytech Nice Sophia, spécialisé en bâtiments durables et intelligents, et en parallèle en Master MAE (Management et Administration des Entreprises) à l’IAE de Nice.",

    btn_view_projects: "Voir mes projets",
    btn_contact: "Me contacter",
    btn_download_cv: "Télécharger mon CV",

    badge_location_title: "Localisation",
    badge_location_value: "Grasse, France",
    badge_language_title: "Anglais",
    badge_language_value: "B2 — TOEIC 845",
    badge_tools_title: "Outils",
    badge_tools_value: "Robot • Abaqus • Revit • AutoCAD • Excel",

    about_title: "À propos",
    about_lead:
      "Je m’appelle Mateo Nieroz. Je suis étudiant en 5ᵉ année de cycle ingénieur à Polytech Nice Sophia, spécialisé en bâtiments durables et intelligents, et je suis également un Master MAE (Management et Administration des Entreprises) à l’IAE de Nice.",
    about_p1:
      "J’aime comprendre comment un projet se construit, de l’analyse et la conception jusqu’au suivi technique. Mon parcours me permet de combiner une approche ingénierie (modélisation, analyse, rigueur) avec une vision organisationnelle (gestion de projet, priorités, prise de décision).",
    about_p2:
      "Curieux, impliqué et orienté résultats, je m’intéresse particulièrement aux sujets liés aux structures, à la modélisation numérique et aux bâtiments performants.",

    chip_team: "Esprit d’équipe",
    chip_autonomous: "Autonome",
    chip_pm: "Gestion de projet",
    chip_priorities: "Priorités & décision",

    info_title: "Informations",
    info_name_label: "Nom",
    info_city_label: "Ville",
    info_city_value: "Grasse, France",
    info_phone_label: "Téléphone",
    info_email_label: "Email",
    info_license_label: "Permis",
    info_license_value: "Permis B",
    cv_hint: "PDF dans assets : CV Nieroz Mateo.pdf",

    skills_title: "Compétences",
    skills_intro: "Compétences techniques + outils + soft skills, structurés clairement.",

    skills_block1_title: "Ingénierie & Technique",
    skills_b1_1: "Analyse par éléments finis",
    skills_b1_2: "Modélisation 3D & dimensionnement",
    skills_b1_3: "Vérifications manuelles sous Excel",
    skills_b1_4: "Géotechnique",
    skills_b1_5: "Construction bois / métal",

    skills_block2_title: "Gestion & Organisation",
    skills_b2_1: "Gestion de projet",
    skills_b2_2: "Suivi des dépenses & contrôle des coûts",
    skills_b2_3: "Analyse stratégique & prise de décision",
    skills_b2_4: "Gestion des priorités",

    skills_block3_title: "Logiciels",
    skills_b3_1: "Autodesk Robot Structural Analysis",
    skills_b3_2: "Abaqus",
    skills_b3_3: "Revit",
    skills_b3_4: "AutoCAD",
    skills_b3_5: "Excel / Word",

    meter_1_label: "Robot / Analyse EF",
    meter_2_label: "Revit / Conception 3D",
    meter_3_label: "Excel (vérifs / contrôle)",
    meter_level_advanced: "Avancé",
    meter_level_good: "Bon",
    meter_hint: "Les niveaux sont indicatifs et peuvent être ajustés.",

    exp_title: "Expérience professionnelle",
    exp_intro: "Expérience en environnement hospitalier exigeant — Eiffage Énergies Systèmes (2024).",
    exp_role: "Assistant Responsable d’Affaires",
    exp_context:
      "Crystal Sam Monaco — Eiffage Énergies Systèmes — Chantier du Nouveau Centre Hospitalier Princesse Grace (Monaco).",
    exp_li_1: "Spécialisation en génie énergétique et climatique (CVC) sur chantier hospitalier.",
    exp_li_2:
      "Analyse des systèmes de ventilation et gestion des flux d’air (blocs opératoires, chambres, locaux techniques).",
    exp_li_3:
      "Étude des procédés thermiques et aérauliques pour assurer la qualité d’air et la conformité aux normes.",
    exp_li_4: "Supervision des réseaux hydrauliques (chauffage, climatisation, infrastructures sanitaires).",
    exp_li_5: "Suivi qualité et conformité des installations via des outils numériques.",

    projects_title: "Projets d’études",
    projects_intro: "Sélection de projets réalisés pendant la formation.",

    proj_1_title: "Analyse EF & dimensionnement sous Robot",
    proj_1_desc:
      "Modélisation 3D d’un portique à trois niveaux. Analyse statique/dynamique. Vérifications manuelles sous Excel puis validation via Robot Structural Analysis.",

    proj_2_title: "Bâtiments durables & conception 3D",
    proj_2_desc:
      "Définition des choix techniques d’une esquisse (fondations, façades, toitures, ouvertures, cloisons, murs, sols) + CVC + urbanisme. Conception 3D sous Revit.",

    proj_3_title: "Gestion de projet & priorités",
    proj_3_desc:
      "Mise en pratique de la gestion de projet : priorisation, prise de décision, suivi des dépenses et contrôle des coûts.",

    tag_robot: "Robot",
    tag_fea: "Analyse EF",
    tag_excel: "Excel",
    tag_structures: "Structure",
    tag_revit: "Revit",
    tag_design: "Conception",
    tag_hvac: "CVC",
    tag_sustainable: "Durable",
    tag_pm: "Gestion de projet",
    tag_costs: "Coûts",
    tag_decision: "Décision",

    edu_title: "Formations",
    edu_intro: "Parcours académique (ingénierie + management).",
    edu_1_title: "Diplôme d’ingénieur — Bâtiments Durables & Intelligents",
    edu_1_date: "2021 — 2026",
    edu_1_school: "Université Côte d’Azur — Polytech Nice Sophia",
    edu_2_title: "Licence Sciences et Technologies (Mention Bien)",
    edu_2_date: "2021 — 2024",
    edu_2_school: "Université Côte d’Azur",
    edu_3_title: "Master MAE — Management & Administration des Entreprises",
    edu_3_date: "2025 — 2026",
    edu_3_school: "Université Côte d’Azur — Double diplôme IAE Nice",

    langs_title: "Langues",
    langs_fr: "Français : langue natale",
    langs_en: "Anglais : B2 — TOEIC 845/990",

    soft_title: "Soft skills",
    soft_1: "Esprit d’équipe",
    soft_2: "Gestion de projet",
    soft_3: "Autonomie",
    soft_4: "Prise de décision & priorités",

    interests_title: "Centres d’intérêt",
    interests_1: "Sport : football, running",
    interests_2: "Voyages & découverte du monde",

    contact_title: "Contact",
    contact_lead: "Vous pouvez me contacter via email ou téléphone.",
    contact_email_title: "Email",
    contact_phone_title: "Téléphone",
    contact_location_title: "Localisation",
    contact_location_value: "Grasse, France",

    form_title: "Message rapide",
    form_name_label: "Nom",
    form_email_label: "Email",
    form_message_label: "Message",
    form_name_ph: "Votre nom",
    form_email_ph: "votre.email@exemple.com",
    form_message_ph: "Bonjour Mateo, ...",
    form_btn: "Préparer un email",
    form_hint: "Le bouton prépare un email (copie + ouverture de la messagerie).",

    footer_copy: "© <span id=\"year\"></span> Mateo Nieroz",
    footer_top: "Retour en haut ↑",
  },

  en: {
    meta_title: "Portfolio — Mateo Nieroz",
    meta_description:
      "Portfolio of Mateo Nieroz — engineering student (sustainable & smart buildings) and MAE business master's program.",

    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",

    hero_kicker: "Portfolio — Engineering & Management",
    hero_subtitle:
      "Final-year engineering student at Polytech Nice Sophia, specialized in sustainable and smart buildings, and concurrently pursuing a Master’s degree in Business Administration (MAE) at IAE Nice.",

    btn_view_projects: "View projects",
    btn_contact: "Contact me",
    btn_download_cv: "Download CV",

    badge_location_title: "Location",
    badge_location_value: "Grasse, France",
    badge_language_title: "English",
    badge_language_value: "B2 — TOEIC 845",
    badge_tools_title: "Tools",
    badge_tools_value: "Robot • Abaqus • Revit • AutoCAD • Excel",

    about_title: "About",
    about_lead:
      "My name is Mateo Nieroz. I am a final-year engineering student at Polytech Nice Sophia, specialized in sustainable and smart buildings, and I am also pursuing a Master’s degree in Business Administration (MAE) at IAE Nice.",
    about_p1:
      "I enjoy understanding how a project is built, from analysis and design to technical follow-up. My background allows me to combine an engineering approach (modelling, analysis, rigor) with an organisational perspective (project management, priorities, decision-making).",
    about_p2:
      "Curious, committed and results-oriented, I am particularly interested in structures, numerical modelling and high-performance buildings.",

    chip_team: "Team spirit",
    chip_autonomous: "Autonomous",
    chip_pm: "Project management",
    chip_priorities: "Priorities & decisions",

    info_title: "Info",
    info_name_label: "Name",
    info_city_label: "City",
    info_city_value: "Grasse, France",
    info_phone_label: "Phone",
    info_email_label: "Email",
    info_license_label: "Driving",
    info_license_value: "Driving license (B)",
    cv_hint: "PDF in assets: CV Nieroz Mateo.pdf",

    skills_title: "Skills",
    skills_intro: "Technical skills + tools + soft skills, clearly structured.",

    skills_block1_title: "Engineering & Technical",
    skills_b1_1: "Finite element analysis",
    skills_b1_2: "3D modelling & design checks",
    skills_b1_3: "Manual checks in Excel",
    skills_b1_4: "Geotechnics",
    skills_b1_5: "Timber / steel construction",

    skills_block2_title: "Management & Organisation",
    skills_b2_1: "Project management",
    skills_b2_2: "Expense tracking & cost control",
    skills_b2_3: "Strategic analysis & decision-making",
    skills_b2_4: "Priority management",

    skills_block3_title: "Software",
    skills_b3_1: "Autodesk Robot Structural Analysis",
    skills_b3_2: "Abaqus",
    skills_b3_3: "Revit",
    skills_b3_4: "AutoCAD",
    skills_b3_5: "Excel / Word",

    meter_1_label: "Robot / FEA",
    meter_2_label: "Revit / 3D design",
    meter_3_label: "Excel (checks / control)",
    meter_level_advanced: "Advanced",
    meter_level_good: "Good",
    meter_hint: "Levels are indicative and can be adjusted.",

    exp_title: "Professional experience",
    exp_intro: "Experience in a demanding hospital environment — Eiffage Énergies Systèmes (2024).",
    exp_role: "Assistant Business Manager",
    exp_context:
      "Crystal Sam Monaco — Eiffage Énergies Systèmes — Construction of the new Princess Grace Hospital Center (Monaco).",
    exp_li_1: "Specialisation in energy and climate engineering (HVAC) on a hospital construction site.",
    exp_li_2: "Ventilation system analysis and airflow management (operating theatres, patient rooms, technical areas).",
    exp_li_3: "Thermal and aeraulic process studies to ensure air quality and compliance with standards.",
    exp_li_4: "Supervision of hydraulic networks (heating, cooling, sanitary infrastructure).",
    exp_li_5: "Quality and compliance monitoring using digital tools.",

    projects_title: "Academic projects",
    projects_intro: "Selected projects carried out during the program.",

    proj_1_title: "FEA & sizing checks with Robot",
    proj_1_desc:
      "3D modelling of a three-level portal frame. Static/dynamic analysis. Manual checks in Excel and validation with Robot Structural Analysis.",

    proj_2_title: "Sustainable buildings & 3D design",
    proj_2_desc:
      "Technical choices for a building concept (foundations, façades, roofs, openings, partitions, walls, floors) + HVAC + urban planning. 3D design in Revit.",

    proj_3_title: "Project management & priorities",
    proj_3_desc:
      "Hands-on project management: prioritisation, decision-making, expense tracking and cost control.",

    tag_robot: "Robot",
    tag_fea: "FEA",
    tag_excel: "Excel",
    tag_structures: "Structures",
    tag_revit: "Revit",
    tag_design: "Design",
    tag_hvac: "HVAC",
    tag_sustainable: "Sustainable",
    tag_pm: "Project mgmt",
    tag_costs: "Costs",
    tag_decision: "Decision-making",

    edu_title: "Education",
    edu_intro: "Academic background (engineering + management).",
    edu_1_title: "Engineering degree — Sustainable & Smart Buildings",
    edu_1_date: "2021 — 2026",
    edu_1_school: "Université Côte d’Azur — Polytech Nice Sophia",
    edu_2_title: "BSc in Science & Technology (Honours)",
    edu_2_date: "2021 — 2024",
    edu_2_school: "Université Côte d’Azur",
    edu_3_title: "Master’s MAE — Business Administration",
    edu_3_date: "2025 — 2026",
    edu_3_school: "Université Côte d’Azur — Double degree IAE Nice",

    langs_title: "Languages",
    langs_fr: "French: native",
    langs_en: "English: B2 — TOEIC 845/990",

    soft_title: "Soft skills",
    soft_1: "Team spirit",
    soft_2: "Project management",
    soft_3: "Autonomy",
    soft_4: "Decision-making & priorities",

    interests_title: "Interests",
    interests_1: "Sports: football, running",
    interests_2: "Travel & discovering the world",

    contact_title: "Contact",
    contact_lead: "You can reach me by email or phone.",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_location_title: "Location",
    contact_location_value: "Grasse, France",

    form_title: "Quick message",
    form_name_label: "Name",
    form_email_label: "Email",
    form_message_label: "Message",
    form_name_ph: "Your name",
    form_email_ph: "your.email@example.com",
    form_message_ph: "Hi Mateo, ...",
    form_btn: "Prepare an email",
    form_hint: "This button prepares an email (copy + opens your email app).",

    footer_copy: "© <span id=\"year\"></span> Mateo Nieroz",
    footer_top: "Back to top ↑",
  },
};

const langToggle = document.getElementById("langToggle");

// Langue par défaut + sauvegarde
let currentLang = localStorage.getItem("lang") || "fr";

// Applique textes (data-i18n) + attributs (data-i18n-attr) + placeholders (data-i18n-placeholder)
function applyLanguage(lang) {
  // Set html lang attribute
  document.documentElement.lang = lang;

  // Normal text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang]?.[key];
    if (typeof value === "string") {
      // Certaines entrées (footer_copy) contiennent du HTML (span year)
      if (value.includes("<")) el.innerHTML = value;
      else el.textContent = value;
    }
  });

  // Attribute mapping: data-i18n-attr="attr:key,attr2:key2"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const spec = el.getAttribute("data-i18n-attr") || "";
    const pairs = spec.split(",").map((s) => s.trim()).filter(Boolean);

    pairs.forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (!attr || !key) return;
      const value = translations[lang]?.[key];
      if (typeof value === "string") el.setAttribute(attr, value);
    });
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = translations[lang]?.[key];
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  // Bouton toggle
  if (langToggle) langToggle.textContent = lang === "fr" ? "EN" : "FR";

  // Sauvegarde
  localStorage.setItem("lang", lang);

  // Re-set year (si footer innerHTML a été recalculé)
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

langToggle?.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  applyLanguage(currentLang);
});

// Init
applyLanguage(currentLang);

// =====================
// FORMULAIRE -> prépare un email (copie + mailto) (non traduit dans la logique, seulement le contenu)
// =====================
const copyBtn = document.getElementById("copyMail");
const hint = document.getElementById("formHint");

copyBtn?.addEventListener("click", async () => {
  const name = (document.getElementById("name")?.value || "").trim();
  const email = (document.getElementById("email")?.value || "").trim();
  const message = (document.getElementById("message")?.value || "").trim();

  const isEN = (localStorage.getItem("lang") || "fr") === "en";
  const subject = isEN ? "Contact — Portfolio" : "Contact — Portfolio";

  const body = isEN
    ? `Hello Mateo,\n\n${message || "[Your message]"}\n\nBest regards,\n${name || "[Your name]"}\n${email || ""}\n`
    : `Bonjour Mateo,\n\n${message || "[Votre message]"}\n\nCordialement,\n${name || "[Votre nom]"}\n${email || ""}\n`;

  const mailto = `mailto:nieroz.mateo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  try {
    await navigator.clipboard.writeText(body);
    if (hint) hint.textContent = isEN ? "Copied. Opening your email app…" : "Copié. Ouverture de votre messagerie…";
  } catch {
    if (hint) hint.textContent = isEN ? "Opening your email app…" : "Ouverture de votre messagerie…";
  }

  window.location.href = mailto;
});
