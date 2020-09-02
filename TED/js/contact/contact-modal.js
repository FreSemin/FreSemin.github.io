const contactModal = document.querySelector("#contact-form");
const contactCloseBtn = document.querySelector("#contact-form-close");
const contactModalBlock = document.querySelector(".request-form-block");
const contactActivateModalBtns = document.querySelectorAll(
  ".request-form__activate-btn"
);

function showModal() {
  contactModalBlock.classList.add("request-form-block_active");
}

function hideModal() {
  contactModalBlock.classList.remove("request-form-block_active");
}

contactActivateModalBtns.forEach((btn) => {
  btn.addEventListener("click", showModal);
});

contactCloseBtn.addEventListener("click", hideModal);

window.onclick = function (event) {
  if (event.target == contactModalBlock) {
    hideModal();
  }
};
