const currentURL = document.location.href;
const retURL = document.querySelector("input#retURL")

const checkPolicy = document.querySelector("#flexCheckDefault");
const modalForm = document.querySelector(".modal-content form");
const modalHeader = document.querySelector(".modal .modal-header");
const modalBody = document.querySelector(".modal .modal-body");
const modalFooter = document.querySelector(".modal .modal-footer");
const modalGreeting = document.querySelector(".thankyou_message");

function handlePaintGreetings() {
    const HIDDEN_CLASS = "hidden"
    retURL.value = currentURL;
    modalHeader.classList.add(HIDDEN_CLASS);
    modalBody.classList.add(HIDDEN_CLASS);
    modalFooter.classList.add(HIDDEN_CLASS);
    modalGreeting.classList.remove(HIDDEN_CLASS);
    setTimeout(function () {
        modalForm.submit();
    }, 3000);
};

function requiredValueCheck(e) {

    e.preventDefault();

    const email = document.querySelector("#email");
    const company = document.querySelector("#company");
    const message = document.querySelector(".modal textarea");

    console.log(email.required)

    if (checkPolicy.checked === false) {
        console.log("체크박스 통과 못함");
    } else {
        if (email.value !== "" && company.value !== "" && message.value !== "") {
            handlePaintGreetings();
        } else {
            console.log("전체 통과 못함");
        }
    }

}

modalForm.addEventListener("submit", requiredValueCheck)