/*!
 * Main Parse JS code goes here
 */
//

// Init Parse
Parse.initialize("R1bfstsvkwEZfxODzNCMDyhy8cYMqq6Kve2LDhwq", "JwOBAv1LAl702XpJ56WYXSPLp1ghBBYPlf6jXhP9");



  	//Submit

  	function submit() {
    	login2();
    	//buildIt();
	}

	//Works

	function login2(){

		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "bar"}, {
		  success: function(object) {
		    alert("yay! it worked");
		  }
		});
	}
	
	var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "bar"}, {
		  success: function(object) {
		    alert("yay! it worked");
		  }
		});


	// Log In

	function login() {
		// Get values
		var $username = $("#userID"),
		    $password = $("#pass");

		    
		var username = $username.val(),
		    password = $password.val(),
			//loginpage = $("#login");// for adding popup...

		// Validate
		/*
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
		*/

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
//buildIt();
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