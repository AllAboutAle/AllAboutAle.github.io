// Edit personal links here. These are used throughout the page.
const CONFIG = {
  email: "aguzman3@tulane.edu",
  linkedin: "https://www.linkedin.com/in/alejandro-guzman26/",
  github: "https://allaboutale.github.io/"
};

// Add or edit projects here. Leave a URL empty to hide its corresponding link.
const projects = [
  { title: "Recruiting Pipeline Dashboard", description: "A clear, practical dashboard concept for tracking recruiting applications, conversations, and next steps.", tags: ["Finance", "Productivity", "Dashboard"], githubUrl: "", liveDemoUrl: "", status: "Concept" },
  { title: "DCF Engine", description: "An in-progress discounted cash flow modeling tool for organizing assumptions and exploring valuation scenarios.", tags: ["Valuation", "Financial Modeling", "In progress"], githubUrl: "", liveDemoUrl: "", status: "In progress" },
  { title: "Real Estate Deal Analyzer", description: "An in-progress property analysis tool to organize deal inputs and evaluate potential investment opportunities.", tags: ["Real Estate", "Analysis", "In progress"], githubUrl: "", liveDemoUrl: "", status: "In progress" }
];

const safePersonalLink = (key) => {
  const value = CONFIG[key];
  if (!value) return "";
  if (key === "email") return `mailto:${value}`;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch { return ""; }
};

function applyPersonalLinks() {
  document.querySelectorAll("[data-personal-link]").forEach((link) => {
    const href = safePersonalLink(link.dataset.personalLink);
    if (!href) { link.hidden = true; return; }
    link.href = href;
    link.hidden = false;
  });
}

function renderProjects() {
  const list = document.querySelector("#project-list");
  if (!list) return;
  list.innerHTML = projects.map((project, index) => {
    const tags = project.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("");
    const github = safeProjectUrl(project.githubUrl);
    const demo = safeProjectUrl(project.liveDemoUrl);
    const links = [github ? `<a href="${github}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>` : "", demo ? `<a href="${demo}" target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>` : ""].filter(Boolean).join("");
    return `<article class="card project-card reveal"><div class="card-topline"><span class="card-index">${String(index + 1).padStart(2, "0")}</span><span class="status-pill">${escapeHTML(project.status)}</span></div><h3>${escapeHTML(project.title)}</h3><p class="project-description">${escapeHTML(project.description)}</p><ul class="tag-list" aria-label="Project tags">${tags}</ul>${links ? `<div class="project-links">${links}</div>` : ""}</article>`;
  }).join("");
}

function safeProjectUrl(value) {
  if (!value) return "";
  try { const url = new URL(value); return url.protocol === "https:" || url.protocol === "http:" ? escapeAttribute(url.href) : ""; }
  catch { return ""; }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[character]);
}
function escapeAttribute(value) {
  return value.replace(/[&"<>']/g, (character) => ({ "&": "&amp;", "\"": "&quot;", "<": "&lt;", ">": "&gt;", "'": "&#39;" })[character]);
}
function setupTheme() {
  const button = document.querySelector(".theme-toggle");
  const root = document.documentElement;
  let savedTheme = "";
  try { savedTheme = localStorage.getItem("ag-theme") || ""; } catch { /* Storage may be unavailable. */ }
  const preferredDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (preferredDark ? "dark" : "light");
  root.dataset.theme = theme;
  updateThemeButton(button, theme);
  button?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    updateThemeButton(button, nextTheme);
    try { localStorage.setItem("ag-theme", nextTheme); } catch { /* Storage may be unavailable. */ }
  });
}
function updateThemeButton(button, theme) {
  if (!button) return;
  const next = theme === "dark" ? "light" : "dark";
  button.setAttribute("aria-label", `Switch to ${next} mode`);
  button.setAttribute("aria-pressed", String(theme === "dark"));
}
function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#nav-links");
  if (!toggle || !menu) return;
  const closeMenu = () => { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation menu"); menu.classList.remove("is-open"); };
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    menu.classList.toggle("is-open", !isOpen);
  });
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 650) closeMenu(); });
}
function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { elements.forEach((element) => element.classList.add("is-visible")); return; }
  document.documentElement.classList.add("js-ready");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  elements.forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  applyPersonalLinks();
  renderProjects();
  setupTheme();
  setupNavigation();
  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();
  setupReveal();
});
