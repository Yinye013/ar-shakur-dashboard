const menuItems = document.querySelectorAll(".menu-item");
const taskTabs = document.querySelectorAll(".active-tasks h4");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

const activeTask = document.querySelector(".active-task");

taskTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    taskTabs.forEach((item) => {
      item.classList.remove("active-task");
    });
    this.classList.add("active-task");
  });
});
