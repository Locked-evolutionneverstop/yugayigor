const modal = document.getElementById("modal");
const buyTicketsButton = document.getElementById("buy-tickets");
const closeModal = document.querySelector(".close");

buyTicketsButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
