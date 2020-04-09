// change input file text
let inputs = document.querySelectorAll("#input__file");
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector(".label_file_name").innerText;

  input.addEventListener("change", function (e) {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files;

    if (countFiles)
      document.querySelector(".file_name").innerText = "Файл выбран";
    else document.querySelector(".file_name").innerText = "Файл не выбран";
  });
});
