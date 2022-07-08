// Conversion des trois format de dates via toLocateDateString
let date = new Date();
let dateTimestamp = Date.parse(date);
let dateISO = date.toISOString()

console.log(`
format date Javascript : ${date}
format date Timestamp : ${dateTimestamp}
format date ISOstring : ${dateISO}
`);

// format date Javascript : Wed Jul 06 2022 14:06:36 GMT+0200 (heure d’été d’Europe centrale)
// format date Timestamp : 1657109196000
// format date ISOstring : 2022-07-06T12:06:36.804Z

// ------------ conversion date locale
const dateConverter = (date) => {
    let convertDate = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        // minute: "2-digit"
    })
    return convertDate
}
console.log(`
format date Javascript : ${dateConverter(date)}
format date Timestamp : ${dateConverter(dateTimestamp)}
format date ISOstring : ${dateConverter(dateISO)}
`);


// format date Javascript : 6 juillet 2022 à 14 h
// format date Timestamp : 6 juillet 2022 à 14 h
// format date ISOstring : 6 juillet 2022 à 14 h


let monobjet = {
    myname: "lezardon",
    mysurname: "lol",
    myage: 56,
    languages: ["python", "Javascript"]
}

// -------- Destructuring

const { languages } = monobjet;
console.log(languages)

// Array [ "python", "Javascript" ]

let array = [23, 34, 6];
let [x, y, z] = array;
console.log(x);
// 23

const dateDestructuring = (dateformatISO) => {
    let [year, month, day] = (dateformatISO.split("T")[0]).split("-");
    // console.log(year);
    return `année : ${year}, mois : ${month}`
}

console.log(dateDestructuring(dateISO));
// année : 2022, mois : 07

// ---------------regex

let mail = "laurent.lezardon@gmail.com"
console.log(mail.search("@gmail"));
// 16 (-1 si non trouvé)
console.log(mail.replace(/gmail/, "hotmail"))
    //laurent.lezardon@hotmail
console.log(mail.match(/Laurent/i))
    // Array [ "laurent" ] si non trouvé retourne "null"

// mail controleur
const mailControler = (adress) => {
    return (adress.match(/[\w-_]+@[\w-]+\.[a-z]{2,4}$/));
};
console.log(mailControler(mail));
(mailControler(mail) == undefined) ? console.log("mail invalide"): console.log("mail valide");

// separateur de millier
let millier = 123855400430987;
const thousandsSeparetor = (number, separator = ".") => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}
console.log(thousandsSeparetor(millier));