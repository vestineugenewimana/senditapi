const hideForm = () => {
  const form = document.querySelector(".newtransit");
  form.style.display = "none";
  closeNav();
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
};

const logout = () => {
  closeNav();
};
