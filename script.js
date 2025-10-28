document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 200);
  });
});
document.getElementById("show-projects").addEventListener("click", function () {
  const projectsSection = document.querySelector(".projects");
  projectsSection.style.display = "block";
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("show-projects").addEventListener("click", function () {
  const projectsSection = document.querySelector(".projects");
  projectsSection.style.display = "block";
  setTimeout(() => {
    projectsSection.classList.add("visible");
  }, 10);
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
