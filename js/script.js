function printPage(){
	window.print();
}
function showText() {
	document.getElementById("st").innerHTML = "Hello World";
}
function showDate() {
	document.getElementById("s_date").innerHTML = Date();
}
function lightOn(){
	document.getElementById("light_off_on").src= "./images/pic_bulbon.gif";
}
function lightOff(){
	document.getElementById("light_off_on").src= "./images/pic_bulboff.gif";
}


//
let x = 5;
let y = 5;
document.getElementById("sum").innerHTML = (x>=y);

function ageOutPut(){
	let voteable;
	let age = Number (document.getElementById("age").value);
	if (isNaN(age)) {
		voteable = "Input is not a namber";
	} else {
		voteable = (age < 15) ? "Too young" : "Old enough";
	}
	document.getElementById("age_demo").innerHTML = voteable + "to vote";
}
//
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
	greeting = "Good Day";
} else {
	greeting = "Good Evening"
}

document.getElementById("gdevening").innerHTML = greeting;

//
const time = new Date().getHours();
let greeting2
if (time < 10) {
	greeting2 = "Good Morning";
} else if (time < 20) {
	greeting2 = "Good Day";
} else {
	greeting2 = "Good Night";
}
document.getElementById("time_message").innerHTML = greeting2;

//
let day;
switch (new Date().getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
}
document.getElementById("dayshow").innerHTML = "Today is" + day;


let xy = "Suman";
console.log(xy);

//
function prom(){
	document.getElementById("prompt").prompt('Enter Your Name');
}

//
function buttonCount() {
	let buttonData = document.getElementsByTagName("button");
	alert(buttonData.length);
}
function pCount(){
	let pData = document.getElementsByTagName("p");
	alert(pData.length);
}

function promp() {
	let person = prompt("Enter Your Name");

	if (person != null){
		document.getElementById("prom").innerHTML = "My Name is " + person;
	}
}

function yesNo(){
	let yes_No;

	if(confirm("Confirm Your Ticket. Yes or No") == true){
		yes_No = "Your Ticket is confirm";
	} else {
		yes_No = "Your Ticket is cenceled!";
	}
	document.getElementById("YN").innerHTML = yes_No;
}

//
function  vai(){
	let firstName = prompt("Enter Your first name")
	let lastName = prompt("Enter Your last name")

	if (lastName == "haq") {
		document.getElementById("hq_vai").innerHTML = `${lastName} vai kemon achen. ${lastName} vai apner to kono khobor paina. koi koi je jachen apni`;
	} else {
		document.getElementById("hq_vai").innerHTML = `${firstName} ${lastName} apni kemon achen`;
	}

}

function biye_find() {
	let year = prompt("Enter Your Age");

	if (year >= 18) {
		document.getElementById("biye_overview").innerHTML = `Tomar biyer boyos hoyche. kintu Tomi biyer jonno aro ${year - 18} bochor besi opekha koro felcho`;
	} else {
		document.getElementById("biye_overview").innerHTML = `Tomar akhono biyer boyos hoini. Tomi biyer jonno aro ${18 - year} bocho wait koro`;
	}
}

//
function bazer(){
	let potol = prompt("Potol Price");
	let alu = prompt("Alu Price");
	let laou = prompt("Laou Price");
	let dim = prompt("Dim Price");
	let kachaMorice = prompt("Kacha Morice Price");
	let peyas = prompt("Peyas Price");
	document.getElementById("bazer_list").innerHTML = (`
	Potol = ${potol}tk\,
	Alu   = ${alu}tk\,
	Laou   = ${laou}tk\,
	Dim   = ${dim}tk\,
	Kacha Morice   = ${kachaMorice}tk\,
	Peyas   = ${peyas}tk\,
	`);
}


function mark(){
	let mark = prompt("Enter Your Subject Mark");

	if (mark >= 0 && mark <=32) {
		document.getElementById("subject_great").innerHTML = "Your are fail";
	} else if (mark >= 33 && mark <=45) {
		document.getElementById("subject_great").innerHTML = "Your Result is \"C\"";
	} else if (mark >= 33 && mark <=45) {
		document.getElementById("subject_great").innerHTML = "Your Result is \"C\"";
	} else if (mark >= 46 && mark <=59) {
		document.getElementById("subject_great").innerHTML = "Your Result is \"B\-\"";
	} else if (mark >= 60 && mark <=69) {
		document.getElementById("subject_great").innerHTML = "Your Result is \"B\+\"";
	} else if (mark >= 70 && mark <=79) {
		document.getElementById("subject_great").innerHTML = "Your Result is \"A\-\"";
	} else if (mark >= 80 && mark <=100) {
		document.getElementById("subject_great").innerHTML = "Your Result is \"A\+\"";
	} else {
		document.getElementById("subject_great").innerHTML = "This Mark is not correct";
	}


}