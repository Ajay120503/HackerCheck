let menu = document.querySelector("button");
let showMenu = document.querySelector("ul");
let searchActive = document.querySelector(".search-icon");
let menuLaptop = document.querySelector(".laptop-icon");
let nabBarSize = document.querySelector(".navbar-container");
let changePlusMinus = document.querySelector(".plus-icon");
let minus = document.querySelector(".fa-caret-up");
let accountHidden = document.querySelector(".account");
let signUp = document.querySelector(".sign-up-form-box");
let logIn = document.querySelector(".log-in-form-box");
let signUpBtn = document.querySelector("#sign-up-form");
let logInBtn = document.querySelector("#log-in-form");

const showPassword = () => {
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm-password");
    let _Password = document.querySelector("#-password");

    password.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
        }
        else {
            password.type = "password";
        }
    });

    confirmPassword.addEventListener("click", () => {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
        }
        else {
            confirmPassword.type = "password";
        }
    });

    _Password.addEventListener("click", () => {
        if (_Password.type === "password") {
            _Password.type = "text";
        }
        else {
            _Password.type = "password";
        }
    });

}

function addEvents() {

    menu.addEventListener("click", () => {
        showMenu.classList.toggle("hidde");
        showMenu.classList.toggle("icons-layout");
    });

    searchActive.addEventListener("click", () => {
        let search = document.querySelector(".search");
        search.classList.toggle("search-hidde");

    });

    let account = document.querySelector(".user");
    account.addEventListener("click", () => {
        accountHidden.classList.toggle("account-hidde");
        changePlusMinus.classList.toggle("fa-caret-up");
        changePlusMinus.classList.toggle("fa-caret-down");
    });

    signUpBtn.addEventListener("click", () => {
        signUp.classList.toggle("sign-up-form-box-hidde");
        logIn.classList.add("log-in-form-box-hidde");
    });

    logInBtn.addEventListener("click", () => {
        logIn.classList.toggle("log-in-form-box-hidde");
        signUp.classList.add("sign-up-form-box-hidde");
    });

    // for click any where in page body trigger the event
    // document.body.addEventListener("click", () => {});
}

const addCloseBtn = () => {
    let closeBtn1 = document.querySelector(".sign-up-form-box");
    let closeBtn2 = document.querySelector(".log-in-form-box");
    let closeBTN1 = document.createElement("button");
    let closeBTN2 = document.createElement("button");
    closeBTN1.innerHTML = "\u00d7";
    closeBTN2.innerHTML = "\u00d7";
    closeBtn1.prepend(closeBTN1);
    closeBtn2.prepend(closeBTN2);
    closeBTN1.classList.add("close-btn");
    closeBTN2.classList.add("close-btn");

    closeBTN1.addEventListener("click", () => {
        signUp.classList.add("sign-up-form-box-hidde");
        //location.reload();
    });

    closeBTN2.addEventListener("click", () => {
        logIn.classList.add("log-in-form-box-hidde");
        //location.reload();
    });
}

function dateCurrent() {
    var date = new Date().getFullYear();
    document.querySelector(".p1").innerText = "Copyright © " + date + ". Created by ❤️ Ajay Ganesh Kandhare ❤️ | #HackerCheck";
}

function logOut() {
    let logOutBtn = document.querySelector("#log-out-btn");

    logOutBtn.addEventListener("click", () => {
        sessionStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    });
}

const disableBtn = () => {
    let disableButton = document.querySelector(".disabled-btn");
    disableButton.disabled = true;
    disableButton.style.backgroundColor = "#fff";
    document.querySelector(".button").classList.remove("button-hover");

}

const changeMenuIcon = () => {

    screenWidth = window.screen.width;

    if (screenWidth >= 1080) {
        menuLaptop.classList.add("fa-laptop");
        menuLaptop.classList.remove("fa-bars");
        disableBtn();
    }
    else {
        menuLaptop.classList.add("fa-bars");
        menuLaptop.classList.remove("fa-laptop");
        document.querySelector(".contact-title").classList.remove("hover-effect");
    }
}

const singForm = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('#sign-form');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameOrEmail = document.getElementById('username-or-email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();

            const usernameOrEmailError = document.getElementById('username-or-email-error');
            const passwordError = document.getElementById('password-error');
            const confirmPasswordError = document.getElementById('confirm-password-error');

            let isValid = true;

            if (usernameOrEmail === '') {
                usernameOrEmailError.textContent = 'Email is required';
                isValid = false;
            }
            else if (usernameOrEmail.length <= 14) {
                usernameOrEmailError.textContent = 'Email contain 15 charecters';
                isValid = false;
            }
            else if (!isValidEmail(usernameOrEmail)) {
                usernameOrEmailError.textContent = 'Invalid email';
                isValid = false;
            }
            else {
                usernameOrEmailError.textContent = '';
            }

            if (password === '') {
                passwordError.textContent = 'Password is required';
                isValid = false;
            } else if (password.length < 8) {
                passwordError.textContent = 'Weak password';
                isValid = false;
            }
            else {
                passwordError.textContent = '';
            }

            if (confirmPassword === '') {
                confirmPasswordError.textContent = 'Please confirm your password';
                isValid = false;
            } else if (confirmPassword !== password) {
                confirmPasswordError.textContent = 'Passwords do not match';
                isValid = false;
            }
            else {
                confirmPasswordError.textContent = '';
            }

            if (isValid) {
                form.submit();
            }
        });
        function isValidEmail(email) {
            // Regular expression for basic email validation
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    });
}

const logForm = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('#log-form');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameOrEmail = document.getElementById('-username').value.trim();
            const password = document.getElementById('-password').value.trim();

            const usernameOrEmailError = document.getElementById('-username-error');
            const passwordError = document.getElementById('-password-error');

            let isValid = true;

            if (usernameOrEmail === '') {
                usernameOrEmailError.textContent = 'Email is required';
                isValid = false;
            }
            else if (usernameOrEmail.length <= 14) {
                usernameOrEmailError.textContent = 'Email contain 15 charecters';
                isValid = false;
            }
            else if (!isValidEmail(usernameOrEmail)) {
                usernameOrEmailError.textContent = 'Invalid email';
                isValid = false;
            }

            else {
                usernameOrEmailError.textContent = '';
            }

            if (password === '') {
                passwordError.textContent = 'Password is required';
                isValid = false;
            } else if (password.length <= 8) {
                passwordError.textContent = 'Invalid password';
                isValid = false;
            }
            else {
                passwordError.textContent = '';
            }

            if (isValid) {
                form.submit();
            }
        });

        function isValidEmail(email) {
            // Regular expression for basic email validation
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    });
}

// for toggle bars and change color on click
const changeBarBehaviour = () => {
    let iconClick = document.querySelector(".icon");
    let button = document.querySelector(".button");
    let innerButton = document.querySelector(".inner-button");

    iconClick.addEventListener("click", () => {
        button.classList.toggle("button-hover");
        button.classList.toggle("button-on-click");
        innerButton.classList.toggle("button-of-menu-on-click");
        console.log("click");
    });
}

changeBarBehaviour();
// end menu icon effect

// search funstion start
let keyWords = [
    'how to hack wifi password',
    'how to hack android phone',
    'how to hack pc',
    'how to hack computer',
    'how to hack websides',
    'how to hack mobile camera',
    'how to hack facebook id password',
    'how to hack instagram id password',
    'how to hack instagram id password',
    'pishing attacks',
];

let searchKey = document.querySelector(".search");
let resultBox = document.querySelector(".result-box");
let searchBtn = document.querySelector(".search-btn");

searchKey.onkeyup = function () {
    let result = [];
    let input = searchKey.value;
    if (input.length) {
        result = keyWords.filter((key) => {
            return key.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
    }
    displayResult(result);

    if (!result.length) {
        resultBox.innerHTML = '';
    }

    searchBtn.addEventListener("click", () => {
        searchKey.value = '';
        resultBox.innerHTML = '';
    });
}

function displayResult(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>"
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    searchKey.value = list.innerHTML;
    console.log(resultBox.value);
}
// end here search funtions

//card rotate and open if click on book
const openBook = () => {
    let card = document.querySelectorAll(".card");


    card.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("card-hover");
            card.classList.toggle("card-rotate");
        });
    });
}
//end of card open function

openBook();
changeMenuIcon();
logOut();
addEvents();
addCloseBtn();
dateCurrent();
showPassword();
singForm();
logForm();

//database

