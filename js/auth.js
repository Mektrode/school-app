/*function login(){
	var process = new XMLHttpRequest();

	var user = document.login.userID.value;
	var pass = document.login.pass.value;

	var details = "username="+user+"&password="+pass;

	//Server Address
	var url = "localhost://phpTest/POST.php";

	
	process.open("POST", url, true);
	
	process.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	process.onreadystatechange = function () {

		if (process.readyState === 4 && process.status === 200){
			var response = process.responseText;
			alert("It Works!!!!!!")
		}

		else if (process.status === 0 || process.readyState === 0) {
			alert ("Problem connecting to server!")
		};

		else {
			errorPass(process.status);
		}
	}

	// Send it off!
	process.send(details);
}


//console.log (process.status);
//console.log (process.statusText);	    


// if error happens, ask user to retype 
function errorPass (error){
	//alert popup box!
	alert("Wrong UserID or Password! or " + error);
	*/