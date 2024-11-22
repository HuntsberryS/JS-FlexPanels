const panels = document.querySelectorAll(".panel");

function makeOpen() {
  this.classList.toggle("open");
}

function makeActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => panel.addEventListener("click", makeOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", makeActive));
