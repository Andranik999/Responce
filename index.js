let flag = true;

const menuContent = document.querySelector(".menu-items");

document.querySelector(".burger").addEventListener("click", () => {
  if (flag) {
    menuContent.classList.add("-open");
    flag = false;
  } else {
    menuContent.classList.remove("-open");
    flag = true;
  }
});
