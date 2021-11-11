const navLink = document.querySelectorAll(".navigation__link");
const navCheckbox = document.querySelector(".navigation__checkbox");

// Close(uncheck) the manu after click on a link
function checkAll() {
  navLink.forEach((link) => {
    link.addEventListener("click", function () {
      navCheckbox.checked = false;
    });
  });
}

checkAll();
