/*!
 * Main Parse JS code goes here
 */
//

// Init Parse
Parse.initialize("R1bfstsvkwEZfxODzNCMDyhy8cYMqq6Kve2LDhwq", "JwOBAv1LAl702XpJ56WYXSPLp1ghBBYPlf6jXhP9");



	//Works

	var testfire = function () {

		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "Complete packages"}, {
		  success: function(object) {
		    alert("yay! the testfire worked; with success buildIt function after it ^^");
		    
		  }
		});
	}
	
	//New Page function

	var newPage = function () {
		$.mobile.changePage('#error', {transition: 'pop', role: 'dialog'});
	}


	//Mock json file

	var id_64 = {
	    "firstName": "John",
	    "lastName": "Smith",
	    "age": 16,
	    "yearGroup" : 11,
	    "tutorGroup" : "Wonder",
	    "houseGroup" : "Sharks",
	    "image" : "Not here yet!",
	}

	//Test
	console.log("Outside log age: " + id_64.age);

	var buildIt = function () {
	    var name = id_64.firstName +" "+id_64.lastName;
	    var age = id_64.age;
	    var year = "Year " + id_64.yearGroup;
	    var tutor = id_64.tutorGroup;
	    var house = id_64.houseGroup;
	        
	    //another test
	    console.log(name + age + year + tutor);

	    $("#userSpan").text(name);
	    $("#name").text(name);
	    $("#age").text(age);
	    $("#year_group").text(year);
	    $("#tutor_group").text(tutor);
	    $("#house_group").text(house);
	}


	/*
	var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "common test"}, {
		  success: function(object) {
		    alert("yay! the test again, normal though");
		  }
		});
	*/

	// Log In

	var logIn = function () {
		
		// Get values
		var $username = $("#userID"),
		    $password = $("#pass");

		    
		var username = $username.val(),
		    password = $password.val();
			//loginpage = $("#login");// for adding popup...

		//testing console.log(username +" "+ password);


		// Validate
		
		if (username.length == 0) {
			//alert("Wrong username or password! Please try again.");

			//$username.parent().parent().addClass("error");//pop up error


			console.log("Wrong username or password! Please try again.");

			$.mobile.changePage('#error', {transition: 'pop', role: 'dialog'});

			newPage();

			return false;
		}

		else if (password.length == 0) {
			//alert("Wrong username or password! Please try again.");

			//$password.parent().parent().addClass("error");//pop up error

			console.log("Wrong username or password! Please try again.");

			$.mobile.changePage('#error', {transition: 'pop', role: 'dialog'});

			newPage();

			return false;
		}

		else {
			//alert("Username is " + username + " and Password is " + password);
		}


		Parse.User.logIn(username, password, {
			success: function(user) {

				//console.log("Logged IN!!!!!!");

				//alert("Logged in!");

				$.mobile.changePage('#home');

				if (buildIt()) {
					console.log("loaded build from success!");
				}

					
			},

			error: function(user, error) {
				if (error.code == 101) {

					//console.log("ERROR! Cant login!");
					//alert("Check your username and password and try again!");

					$.mobile.changePage('#error', {transition: 'pop', role: 'dialog'});

					//$username.parent().parent().addClass("error");
					return false;
					// Load error pop
					//window.location.href = "#error";
				}
				else {
					console.log("Error: " + error.code + " " + error.message);
					return false;
				}
			}
		});
	}


	


	function logOut() {
		Parse.User.logOut();
		window.location.href = 'index.html#login';

		console.log("You have been logged out")
		buildMenu();
	}


	function checkloggedin (){
		currentUser = Parse.User.current();
		if (currentUser == null) {

			console.log("You must be logged in to continue.");
			return false;
		}
	}

	/*
	function buildApp() {
		
		// If user logged in
		else {
			$userSpan.text(Parse.User.current().get("username"));
		}
	}*/