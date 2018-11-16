const changeStatus = () => {
  const status = document.querySelector(".trash");
  status.previousSibling.parentElement.innerText = "Delivered";
};
