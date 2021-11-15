// collapsing 이후 screen dark <span> 추가

const button = document.querySelector(".navbar-toggler");

function screenDarken() {
  const attribute = document.querySelector(".navbar-toggler").getAttribute("aria-expanded");
  const newSpan = document.createElement("span");
  newSpan.classList.add("screen-darken");
  newSpan.addEventListener("click", function () {
    button.click()
  });
  if (attribute === "true") {
    document.querySelector("#navbarSupportedContent").appendChild(newSpan);
  } else {
    document.querySelector("#navbarSupportedContent span").remove();
  }
}
button.addEventListener("click", screenDarken);