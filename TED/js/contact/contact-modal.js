const contactModal = document.querySelector("#contact-form");
const contactCloseBtn = document.querySelector("#contact-form-close");
const contactModalBlock = document.querySelector(".request-form-block");
const contactActivateModalBtn = document.querySelector(
  ".request-form__activate-btn"
);

contactActivateModalBtn.addEventListener("click", showModal);
contactCloseBtn.addEventListener("click", hideModal);


function showModal() {
  contactModalBlock.classList.add("request-form-block_active");
}

function hideModal() {
  contactModalBlock.classList.remove("request-form-block_active");
}

window.onclick = function (event) {
  if (event.target == contactModalBlock) {
    hideModal();
  }
};
