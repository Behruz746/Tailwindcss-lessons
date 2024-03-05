const initApp = () => {
  // html Elelemtlar DOM
  const hamButgerBtnEl = document.getElementById("hamburger-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  // toggleMenu menuni active yoki noactive qiladi
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
    hamButgerBtnEl.classList.toggle("toggle-btn")
  }

  // eventlar click orqali bolishi
  hamButgerBtnEl.addEventListener("click", toggleMenu)
  mobileMenu.addEventListener("click", toggleMenu)
}

// DOM yuklanganidan so'ng initApp function ishlatsa boladi
document.addEventListener("DOMContentLoaded", initApp)
