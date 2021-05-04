let flag = true;

const test = document.querySelector(".menu-items");

document.querySelector(".burger").addEventListener("click", () => {
  if (flag) {
    test.classList.add("-open");
    flag = false;
  } else {
    test.classList.remove("-open");
    flag = true;
  }
});
