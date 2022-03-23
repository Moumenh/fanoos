const navLi = document.querySelectorAll("nav .container ul li");
const sections = document.querySelectorAll("section");
const infoElement = document.querySelector("#info");
const navigatorElement = document.querySelector("#navigator");

window.addEventListener("scroll", () => {
  let current = "";
  let sectionInstance = null;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      sectionInstance = section;
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  if (
    window.scrollY >
    infoElement.scrollHeight + infoElement.clientHeight * 2
  ) {
    navigatorElement.classList.add("stop");
  } else {
    navigatorElement.classList.remove("stop");
  }
});
