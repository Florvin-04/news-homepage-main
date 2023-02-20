const hamburger = document.querySelector(".checkbox");
const body = document.querySelector("body");
hamburger.addEventListener("click", () => {
  if (hamburger.checked) {
    body.style.backgroundColor = "#3e3e4133";
  } else {
    body.style.backgroundColor = "white";
  }
});
