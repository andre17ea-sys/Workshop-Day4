let favouriteProgrammingLanguage = "JavaScript";
let currentCourseDay = 4;

const sentence = `My favourite programming language is ${favouriteProgrammingLanguage}. We're on day ${currentCourseDay} of the course.`;

console.log(sentence);

document.getElementById("sentence").textContent = sentence;

let currentDay = "Thursday";
let weather = "Ughhh!";
let temperature = "7";

const weatherMessage = `Today is ${currentDay} and it is ${weather}, freezing time, around ${temperature} °C.`;
document.getElementById("weather").textContent = weatherMessage;
