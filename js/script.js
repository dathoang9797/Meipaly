const logoText = document.querySelector(".header__content .header__logo span");

logoText.style.color = "red";

logoText.innerText = "Hello Cybersoft";

const aTagsNav = document.querySelector(".header__content nav ul a");
console.log(aTagsNav);

const ulNav = document.querySelector(".header__content ul");
const btnEl = document.createElement("button");
btnEl.innerText = "Đăng xuất";
ulNav.appendChild(btnEl);
btnEl.className = "btnDangXuat";

const carouselEl = document.querySelector(".carousel");
carouselEl.classList.add("container");
