

function login(){
	var user = document.login.userID.value;
	var pass = document.login.pass.value;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://my php server here", user, pass, false);
	
	// Add your code below!
	xhr.send();

	    this.http.open("get", this.action, false, username, password);
	    this.http.send("");
	    if (http.status == 200) {
	        document.location = this.action;
	    } else {
	        alert("Incorrect username and/or password.");
	    }


	if () {
		//load home page

	}
	else if (xhr.status === 0){
		//error logging in!
		errorPass();
	}

	console.log (xhr.status);
	console.log (xhr.statusText);
}


// Http request post



// if error happens, ask user to retype 
function errorPass (){
	//alert popup box!
	alert("Wrong UserID or Password!");
}