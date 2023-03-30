inputs = document.querySelectorAll("input");
button = document.querySelector("button");
errorType = document.querySelectorAll(".error-type");

button.addEventListener("click", function () {
  inputs.forEach((element, index) => {
    if (element.value == "") {
      element.classList.remove("input-success");
      inputs.forEach((element2) => {
        if (element2.value == "") {
          element2.classList.add("input-error");
          element2.placeholder = "";
          errorType[index].classList.add("error-type-active");
        } else {
          element2.classList.remove("input-error");
        }
      });
    } else {
      element.classList.add("input-success");
      errorType[index].classList.remove("error-type-active");
      element.classList.remove("input-error");
    }
  });
});
