const paragraph = document.getElementById("paragraph");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  paragraph.style.display === "none"
    ? (paragraph.style.display = "block")
    : (paragraph.style.display = "none");
});
