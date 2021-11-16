const currentURL = document.location.href;
const retURL = document.querySelector("input#retURL")

const checkPolicy = document.querySelector("#flexCheckDefault");
const modalForm = document.querySelector(".modal-content form");
const modalHeader = document.querySelector(".modal .modal-header");
const modalBody = document.querySelector(".modal .modal-body");
const modalFooter = document.querySelector(".modal .modal-footer");
const modalGreeting = document.querySelector(".thankyou_message");

function handlePaintGreetings(e) {
    const HIDDEN_CLASS = "d-none"
    retURL.value = currentURL;
    modalHeader.classList.add(HIDDEN_CLASS);
    modalBody.classList.add(HIDDEN_CLASS);
    modalFooter.classList.add(HIDDEN_CLASS);
    modalGreeting.classList.remove(HIDDEN_CLASS);

    const targetTime = Math.round(((new Date().getTime() / 1000) % 60)) + 3;
    
    const startInterval = setInterval(
        function count() {
            const countSec = document.querySelector("#countsec")
            const nowTime = Math.round(((new Date().getTime() / 1000) % 60))
            const countNum = targetTime - nowTime;
            countSec.innerHTML = countNum
            console.log(countNum);

            if (countNum === 0) {
                clearInterval(startInterval)
            }
        }, 1000)
    setTimeout(function () {
        document.getElementById('submitForm').submit();
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
            const targetTime = Math.round(((new Date().getTime() / 1000) % 60)) + 3;
            handlePaintGreetings(targetTime);
        } else {
            console.log("전체 통과 못함");
        }
    }

}

modalForm.addEventListener("submit", requiredValueCheck)