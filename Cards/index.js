
const lolo = {
    name: "Lépine",
    surname: "laurent",
    age: 57,
    role: "papa"
}
const nath = {
    name: "Lépine",
    surname: "nathalie",
    age: 56,
    role: "maman"
}
const lucas = {
    name: "Lépine",
    surname: "lucas",
    age: 21,
    role: "enfant"
}
const françois = {
    name: "Lépine",
    surname: "françois",
    age: 23,
    role: "enfant"
}


const family = [lolo, nath, lucas, françois];

document.body.innerHTML = family
.filter((member) => member.role.includes("enfant"))
.sort((a,b) => a.age - b.age)
.map((member) => `
    <div>
        <h3>nom : ${member.name}</h3>
        <p>prénom : ${member.surname}</p>
        <p>prénom : ${member.age}</p>
    </div>
`)
.join("");
