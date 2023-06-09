window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("is-preload");
  }, 100);
};
document.querySelector(".toggle").addEventListener("click", () => {
  if (document.querySelector(".item").classList.contains("active")) {
    document.querySelectorAll(".item").forEach((element) => element.classList.remove("active"));
    document.querySelector(".toggle").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    document.querySelectorAll(".item").forEach((element) => element.classList.add("active"));
    document.querySelector(".toggle").innerHTML = "<i class='fas fa-times'></i>";
  }
});
const tabindexes = document.querySelectorAll('*[tabindex="0"]');
for (const tabindex of tabindexes) {
  tabindex.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      e.target.click();
    }
  });
}
//# sourceMappingURL=main.js.map
