/*!
 * Main Parse JS code goes here
 */
//

// Init Parse
$(document).ready(function() {
  Parse.initialize("R1bfstsvkwEZfxODzNCMDyhy8cYMqq6Kve2LDhwq", "JwOBAv1LAl702XpJ56WYXSPLp1ghBBYPlf6jXhP9");
  return false;


	//Works

	 /*
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}, {
	  success: function(object) {
	    alert("yay! it worked");
	  }
	});
	*/


	// Log In

	function logIn() {
		// Get values
		var $username = $("#userID"),
		    $password = $("#pass");

		    
		var username = $username.val(),
		    password = $password.val(),
			//loginpage = $("#login");// for adding popup...

		// Validate
		
		if (username.length == 0) {
			alert("Wrong username or password! Please try again.");
			//$username.parent().parent().addClass("error");//pop up error
			return false;
		}
		else if (password.length == 0) {
			alert("Wrong username or password! Please try again.");
			//$password.parent().parent().addClass("error");//pop up error
			return false;
		}
		

		Parse.User.logIn(username, password, {
			success: function(user) {
				
				buildIt();

				console.log("Logged IN!!!!!!");

				// Load hompage
				//window.location.href = "home.html";

			/*
				// Hide modal
				$("#login").modal("hide");

				// Show menu
				$("#login-menu-link").dropdown('toggle');
			*/
			
			},
			error: function(user, error) {
				if (error.code == 101) {

					console.log("ERROR");
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


	//Mock json file

	var id_64 = {
	    "firstName": "John",
	    "lastName": "Smith",
	    "age": 25,
	    "yearGroup" : 11,
	    "tutorGroup" : "Wonder",
	    "image" : "Not here yet!",
	    /*
	    "address": {
	        "streetAddress": "21 2nd Street",
	        "city": "New York",
	        "state": "NY",
	        "postalCode": 10021
	    },
	    "phoneNumbers": [
	        {
	            "type": "home",
	            "number": "212 555-1234"
	        },
	        {
	            "type": "fax",
	            "number": "646 555-4567"
	        }
	    ]
	    */
	}

	console.log("Outside log age: " + id_64.age);

	function buildIt () {
	    var name = id_64.firstName +" "+id_64.lastName;
	    var age = id_64.age;
	    var year = "Year " + id_64.yearGroup;
	    var tutor = id_64.yearGroup + " " + id_64.tutorGroup;
	    
	    console.log(name + age + year + tutor);

	    $(#userSpan)+=name;
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
		}e
	}

	/*
	function buildApp() {
		// Get login menu
		$loginMenu = $("#login-menu");
		
		// Get user span
		$userSpan = $("#userSpan");
		
		// If user logged in
		else {
			$userSpan.text(Parse.User.current().get("username"));
		}
	}*/
});