const changeLoc = () => {
  const modal = document.querySelector("#popup");
  modal.style.display = "block";
};

const closeModal = () => {
  const modal = document.querySelector("#popup");
  modal.style.display = "none";
};

window.onclick = event => {
  const modal = document.querySelector("#popup");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
