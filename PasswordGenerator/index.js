const rangePassword = document.getElementById("password-length");
const lengthPassword = document.getElementById("display-password-length");
const generatePassword = document.getElementById("generate-password");
const passwordOutput = document.getElementById("passwordoutput")
const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const dataSymbol = "&~(-è_ç@)$£µ%";
const dataNumber = "0123456789";
// console.log(passwordOutput);

// report de la valeur du cursuer dans le champ
rangePassword.addEventListener("input", (e) => {
    console.log(e.target.value);
    lengthPassword.value = e.target.value;
});


generatePassword.addEventListener("click", () => {
    // console.log("Début génération");
    let dataPassword = ""; // chaine des caractères valides
    let valuePassword = ""; // valeur du mot de passe
    // recupération des contraintes
    if (lowercase.checked) dataPassword += dataLowerCase;
    if (uppercase.checked) dataPassword += dataUpperCase;
    if (symbol.checked) dataPassword += dataSymbol;
    if (number.checked) dataPassword += dataNumber;
    // contrôle au moins une contrainte selectionnée
    if (dataPassword.length == 0) alert("veuillez selectionner au moins un critère")
        // generation du mot de passe en fonction de la longueur
    for (i = 0; i < lengthPassword.value; i++) {
        valuePassword += dataPassword[Math.floor(Math.random() * dataPassword.length)]
            // console.log(valuePassword);
    }
    passwordOutput.value = valuePassword
    if (valuePassword.match(/[a-z]/)) console.log("minuscules OK");
    if (valuePassword.match(/[A-Z]/)) console.log("majuscules OK");
    if (valuePassword.match(/[0-9]/)) console.log("chiffres OK");
    if (valuePassword.match(/[-è_ç@)£µ%]/)) console.log("symboles OK");




});