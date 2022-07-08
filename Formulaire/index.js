const inputForm = document.querySelectorAll(
    'input[type="text"], input[type="password"]');
const form = document.querySelector("form");


let getPseudo, getEmail, getPassword;
let getConfirm = false;
const progressBar = document.getElementById("progressbar");
// console.log(form);

// -------------- controle de saisie pseudo ----------------------------

const pseudoCheckerConditions = (value, input, errorDisplay) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorDisplay.textContent = "Le pseudo doit comporter entre 3 et 20 caractères";
            input.classList.add("error");
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorDisplay.textContent = "Le pseudo ne doit pas contenir de caractères spéciaux";
            input.classList.add("error");
        } else {
            input.classList.remove("error");
            errorDisplay.textContent = "";
            getPseudo = value;
        }
        console.log("check pseudo!");
    }
    // -------------- controle de saisie mail ----------------------------

const mailCheckerConditions = (value, input, errorDisplay) => {
        console.log("check mail!");
        if (!value.match(/[\w-_]+@[\w-]+\.[a-z]{2,4}$/)) {
            errorDisplay.textContent = "mail non valide";
            input.classList.add("error");
        } else {
            input.classList.remove("error");
            errorDisplay.textContent = "";
            getEmail = value;

        }

    }
    // -------------- controle de saisie password ----------------------------
const passwordCheckerConditions = (value, input, errorDisplay) => {
    console.log("check password!");
    getConfirm = false;
    progressBar.classList = "progressbar";
    if (!value.match(/[A-Z]/
            // /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
        )) {
        errorDisplay.textContent = "password non valide";
        console.log("test nok")
        input.classList.add("error");
        progressBar.classList.add("progressRed");
        getPassword = null;

    } else if (value.length < 12) {
        input.classList.remove("error");
        progressBar.classList.add("progressBlue");
        getPassword = value;

    } else {
        input.classList.remove("error");
        errorDisplay.textContent = "";
        progressBar.classList.add("progressGreen");
        getPassword = value;

    }

}

// -------------- controle de saisie confirmation password ----------------------------
const passwordConfirmCheckerConditions = (value, input, errorDisplay) => {
    // console.log("check confirm password!");
    console.log(getPassword);
    console.log(value);
    // console.log("test : ", !(value === getPassword));
    if (!(value === getPassword)) {
        errorDisplay.textContent = "Pas de correspondance";
        input.classList.add("error");
    } else {
        input.classList.remove("error");
        errorDisplay.textContent = "";
        getConfirm = true;

    }
}


// ---- selection des balises et applel fonction de contrôle ------------
const genericChecker = (inputId, spanId, validator) => {
    const input = document.getElementById(inputId);
    const errorDisplay = document.getElementById(spanId);
    // console.log(input);
    // console.log(errorDisplay);
    validator(input.value, input, errorDisplay);
}


// ------- passage parametres pour contrôle de saisie -----------------
const pseudoChecker = (value) => {

    genericChecker("pseudo", "pseudospan", pseudoCheckerConditions);

};
const mailChecker = (value) => {
    // console.log(value);
    genericChecker("email", "emailspan", mailCheckerConditions);

};
const passwordChecker = (value) => {
    // console.log(value);
    genericChecker("password", "passwordspan", passwordCheckerConditions);
};
const passwordConfirmChecker = (value) => {
    // console.log(value);
    genericChecker("passwordconfirm", "confirmpasswordspan", passwordConfirmCheckerConditions);
};


// -------------- recupération de la valeur des input (EventListener) ----------------
inputForm.forEach(element => {
    element.addEventListener('input', (e) => {

        switch (e.target.id) {
            case "pseudo":
                // console.log(e.target.id);
                pseudoChecker(e.target.value);
                break;
            case "email":
                // console.log(e.target.id);
                mailChecker(e.target.value);
                break;
            case "password":
                // console.log(e.target.id);
                passwordChecker(e.target.value);
                break;
            case "passwordconfirm":
                // console.log(e.target.id);
                passwordConfirmChecker(e.target.value);
                break;

            default:
                break;
        }
    })
});

// ----------------- validation formulaire --------
form.addEventListener('submit', (e) => {

    e.preventDefault();
    console.log("submit !");
    if (getConfirm && getEmail && getPassword && getPseudo) {
        dataForm = {
            pseudo: getPseudo,
            email: getEmail,
            password: getPassword,
        }
        console.log(dataForm);
        alert("inscription validée");
        inputForm.forEach((input) => input.value = "");
        progressBar.classList = "";

    } else { alert("non conforme"); }
})