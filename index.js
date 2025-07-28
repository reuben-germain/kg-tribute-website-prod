/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Dark/Light Theme Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
  });
});
