
const hamburgerMenu = document.querySelector("#hamburger-menu")
const closeMenu = document.querySelector("#cancelMenu");
const WhiteNav = document.querySelector("white-nav");








//Toggle the hamburger menu on
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    document.querySelector("#menuWhite").classList.add("active")
})


//Toggle the hamburger menu off
closeMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    document.querySelector("#menuWhite").classList.remove("active")
})

function checkInnerWidth() {
    if (window.innerWidth > 1024) {
            document.querySelector("#menuWhite").classList.remove("active");
    }
}
checkInnerWidth()

window.addEventListener("resize", () => {
    if (window.innerWidth < 920) {
      menuWhite.style.display = "";
    } else {
      menuWhite.style.display = "none";
    }
  });





