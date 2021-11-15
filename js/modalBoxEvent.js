      const modalInputs = document.querySelectorAll(".form-check-input.input")
      const modalBoxes = document.querySelectorAll(".first .form-check-exl")

      function getChecked(e) {
        if (e.checked) {
          e.parentElement.classList.add("wow")
          e.labels[1].classList.add("text-white")
        } else {
          e.parentElement.classList.remove("wow")
          e.labels[1].classList.remove("text-white")
        }
      }

      function handleEl() {
        modalInputs.forEach(getChecked)
      }
      handleEl()

      modalBoxes.forEach((item) => {
        item.addEventListener("click", handleEl)
      })