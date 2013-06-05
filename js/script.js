//Declare Varibales

//Starting Logic

var personalId = document.getElementByForm('ID');  //Wrap in function?

	if (isNan(personalId)) {
		return personalId;
	}
		else {
			error("ID is not a number!");
			return personalId = 0;
		}

	if (personalId === 0) {
		personalId=;
	};

//Build error function

function error (problem) {
	alert("There is a problem! ", problem);
}

//Request if ID exists

var exist;

if (exist true) {
	//Get JSON
	getIt();
};
else {
	error("This ID does not exist! Please re-enter your correct ID!");
}

//Is ID and password the same?



//Get
function getIt(){
	var xhr;
	xhr = HTTPRequest();

	//OR AJAX REQUEST

}

//Returning JSON file!!!

function JSON (ID, name, age, yearGroup, tutorGroup) {
	this.ID = JSON.ID;
	this.name = JSON.name;
	this.age = JSON.age;
	this.yearGroup = JSON.yearGroup;
	this.tutorGroup = JSON.tutorGroup;
}

//Example JSON file

var userJSON = {
	"ID" : 46 [
		"name" : "Mohammed Hussein",
		"age" : "16",
		"yearGroup" : "11",
		"tutorGroup" : "Wonder",
		]
	}

//Ask user if Data is correct!

var clarification = prompt("Is your name " +user.name+ "? Type yes or no");

if (clarification === "yes") {
	submitApp();
};
else {
	error("Wrong ID! Please try again!");
}

//sumbit final App details of person and display data!


// Store this JSON in local drive for future reference

//Mybe make an object aswell as JSON in local drive and compare if data is both the same as validication!