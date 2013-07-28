/*!
 * Main Parse JS code goes here
 */
//

// Init Parse
Parse.initialize("R1bfstsvkwEZfxODzNCMDyhy8cYMqq6Kve2LDhwq", "JwOBAv1LAl702XpJ56WYXSPLp1ghBBYPlf6jXhP9");


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

/*
// Log In

function logIn() {
	// Get values
	var $username = $("#userID"),
	    $password = $("#pass");

	    
	var username = $username.val(),
	    password = $password.val(),
		loginpage = $("#login");// for adding popup...

	// Validate
	if (username.length == 0) {
		$username.parent().parent().addClass("error");//pop up error
		return false;
	}
	else if (password.length == 0) {
			$password.parent().parent().addClass("error");//pop up error
			return false;
	}
	
	Parse.User.logIn(username, password, {
		success: function(user) {

			//build App
			buildHome();
			buildProfile();
			buildTimetable();
			buildAnythingelse();

			// Load hompage
			window.location.href = "#home";

		/*
			// Hide modal
			$("#login").modal("hide");

			// Show menu
			$("#login-menu-link").dropdown('toggle');
		*/
		/*
		},
		error: function(user, error) {
			if (error.code == 101) {
				$username.parent().parent().addClass("error");
				return false;
			// Load error pop
			window.location.href = "#error";
			}
			else {
				alert("Error: " + error.code + " " + error.message);
				return false;
			}
		}
	});
}


var LogInView = Parse.View.extend({
    

    logIn: function(e) {
      var self = this;
      var username = this.$("#login-username").val();
      var password = this.$("#login-password").val();
      
      Parse.User.logIn(username, password, {
        success: function(user) {
          new ManageTodosView();
          self.undelegateEvents();
          delete self;
        },

        error: function(user, error) {
          self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
          this.$(".login-form button").removeAttr("disabled");
        }
      });

      return false;
    },
});

function logOut() {
	Parse.User.logOut();
	window.location.href = 'index.html#login';
	buildMenu();
}

function buildApp() {
	// Get login menu
	$loginMenu = $("#login-menu");
	
	// Get user span
	$userSpan = $("#userSpan");
	
	// If user logged in
	else {
		$userSpan.text(Parse.User.current().get("username"));
	}
}

buildMenu();



function checkloggedin (){
	currentUser = Parse.User.current();
	if (currentUser == null) {
		alert("You must be logged in to continue.");
		return false;
	}
}*/