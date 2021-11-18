//User's name
let user = "Cédric";

// Set today's date
const today = new Date();
let day = today.getDay();
let dayToday = "";

if (day === 1) { // Get day of week
    dayToday = "Monday";
} else if (day === 2) {
    dayToday = "Tuesday";
} else if (day === 3) {
    dayToday = "Wednesday";
} else if (day === 4) {
    dayToday = "Thursday";
} else if (day === 5) {
    dayToday = "Friday";
} else if (day === 6) {
    dayToday = "Saturday";
} else {
    dayToday = "Sunday";
}

let month = today.getMonth();
let todaysMonth = "";

if (month === 0) { // Get month
    todaysMonth = "January";
} else if (month === 1) {
    todaysMonth = "February";
} else if (month === 2) {
    todaysMonth = "March";
} else if (month === 3) {
    todaysMonth = "April";
} else if (month === 4) {
    todaysMonth = "May";
} else if (month === 5) {
    todaysMonth = "June";
} else if (month === 6) {
    todaysMonth = "July";
} else if (month === 7) {
    todaysMonth = "August";
} else if (month === 8) {
    todaysMonth = "September";
} else if (month === 9) {
    todaysMonth = "October";
} else if (month === 10) {
    todaysMonth = "November";
} else {
    todaysMonth = "December";
}

let todaysDate = today.getDate();

if (todaysDate === 1 || todaysDate === 21 || todaysDate === 31) {
    todaysDate = todaysDate + "st";
} else if (todaysDate === 3 || todaysDate === 23) {
    todaysDate = todaysDate + "rd";
} else {
    todaysDate = todaysDate + "th";
}

document.getElementById("date").innerHTML = "Today is "+ dayToday + ", " + todaysMonth + " " + todaysDate;

// Set custom greeting based on time of day
let welcome = "";
const hour = today.getHours();

if (hour < 12) {
    welcome = "Good morning, ";
} else if (hour < 17) {
    welcome = "Good afternoon, ";
} else {
    welcome = "Good evening, "
}
document.getElementById("welcome").innerHTML = welcome + user;

// Set time based on location

