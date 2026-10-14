const prices = [120, 60, 899];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); 


const students = [
    { name: "Divya", marks: 90 },
    { name: "Kiran", marks: 85 },
    { name: "Riya", marks: 80 }
];
const kiran = students.find((student) => student.name === "Kiran");
console.log(kiran ? kiran.marks : "Not found");


function makeGreeter(greeting) {
    return function (name) {
        return `${greeting} ${name}`;
    };
}
console.log(makeGreeter("Hello")("Asha"));
