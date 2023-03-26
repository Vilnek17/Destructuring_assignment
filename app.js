let userNames=['Mike', 'Bob', 'Nikola'];
let users={};
[users.mike, users.bob , users.nikola]=userNames;
console.log(users);


let salaries = {
    "Mike":1500,
    "Bob" :1800,
    "Nikola":1700
};

function maxSalary() {
    let maxSalary = Math.max(...Object.values(salaries));
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary === maxSalary) {
            console.log(name);
    }
}
}
maxSalary(salaries);

let user={mike:'Mike', bob:'Bob', nikola:'Nikola'};
let {mike:userMike, bob:userBob, nikola:userNikola} = user;
console.log(userMike,userBob,userNikola);