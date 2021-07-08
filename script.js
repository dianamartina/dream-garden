const navLink = document.querySelectorAll(".navigation__link");
const navCheckbox = document.querySelector(".navigation__checkbox");

function checkAll() {
  navLink.forEach((link) => {
    link.addEventListener("click", function () {
      navCheckbox.checked = false;
    });
  });
}

checkAll();
