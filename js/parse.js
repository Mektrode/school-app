/*!
 * Main Parse JS code goes here
 */
//

// Init Parse
Parse.initialize("cF1KaOFNgSERAxKgv4ZUDE3XBnMEpGxF2ACWmMZE", "tnNd8KSP42GsJ9ZyBVaaN9REYRW76gUj9sxm8e3i");



// Log In & Sign Up
function signUp() {
	// Get values
	var $username = $("#name-signup"),
	    $password = $("#psword-signup"),
	    $password2 = $("#psword2-signup"),
	    $email = $("#email-signup");
	    
	var username = $username.val(),
	    password = $password.val(),
	    password2 = $password2.val(),
	    email = $email.val();
	
	// Remove styling
	$username.parent().parent().removeClass("error");
	$password.parent().parent().removeClass("error");
	$password2.parent().parent().removeClass("error");
	$email.parent().parent().removeClass("error");
	$username.parent().children().eq(1).text("");
	$password.parent().children().eq(1).text("");
	$password2.parent().children().eq(1).text("");
	$email.parent().children().eq(1).text("");
	
	// Validate
	if (username.length == 0) {
		$username.parent().parent().addClass("error");
		return false;
	}
	else if (password.length < 7) {
			$password.parent().parent().addClass("error");
			$password.parent().children().eq(1).text("Password must be at least 7 characters!");
			return false;
	}
	else if (email.length == 0) {
			$email.parent().parent().addClass("error");
			return false;
	}
	else if (password != password2) {
		$password.parent().parent().addClass("error");
		$password2.parent().parent().addClass("error");
		$password.parent().children().eq(1).text("Passwords don't match!");
		return false;
	}
	
	// Sign up user
	var user = new Parse.User();
	user.set("username", username);
	user.set("password", password);
	user.set("email", email);
	user.set("level", 1);

	user.signUp(null, {
		success: function(user) {
			// Login user
			Parse.User.logIn(username, password, {
				success: function(user) {
					buildMenu();
				},
				error: function(user, error) {
					alert("Error: " + error.code + " " + error.message);
					return false;
				}
			});
			
			// Hide modal
			$("#signup").modal("hide");
			
			// Show menu
			$("#login-menu-link").dropdown('toggle');
		},
		error: function(user, error) {
			if (error.code == 202) {
				$username.parent().parent().addClass("error");
				$username.parent().children().eq(1).text("Username taken!");
				return false;
			}
			else {
				alert("Error: " + error.code + " " + error.message);
				return false;
			}
		}
	});
}

function logIn() {
	// Get values
	var $username = $("#name-login"),
	    $password = $("#psword-login");
	    
	var username = $username.val(),
	    password = $password.val();
	
	// Remove styling
	$username.parent().parent().removeClass("error");
	$password.parent().parent().removeClass("error");
	$username.parent().children().eq(1).text("");
	$password.parent().children().eq(1).text("");
	
	// Validate
	if (username.length == 0) {
		$username.parent().parent().addClass("error");
		return false;
	}
	else if (password.length == 0) {
			$password.parent().parent().addClass("error");
			return false;
	}
	
	Parse.User.logIn(username, password, {
		success: function(user) {
			buildMenu();
			
			// Hide modal
			$("#login").modal("hide");

			// Show menu
			$("#login-menu-link").dropdown('toggle');
		},
		error: function(user, error) {
			if (error.code == 101) {
				$username.parent().parent().addClass("error");
				$password.parent().parent().addClass("error");
				return false;
			}
			else {
				alert("Error: " + error.code + " " + error.message);
				return false;
			}
		}
	});
}

function logOut() {
	Parse.User.logOut();
	window.location.href = 'index.html';
	buildMenu();
}

function buildMenu() {
	// Get login menu
	$loginMenu = $("#login-menu");
	
	// Get user span
	$userSpan = $("#user");
	
	// Clear login menu
	$loginMenu.html("");
	
	// If user not logged in
	if (Parse.User.current() == null) {
		//Added User and Pass Inputs
		var $login = $('<li><a tabindex="-1" href="#login" role="button" data-toggle="modal">Login</a></li>');
		var $signup = $('<li><a tabindex="-1" href="#signup" role="button" data-toggle="modal">Sign Up</a></li>');
		$loginMenu.append($login);
		$loginMenu.append($signup);
		$userSpan.text("User");
	}
	// If user logged in
	else {
		var $profile = $('<li><a tabindex="-1" href="profile.html">Profile</a></li>');
		var $logout = $('<li><a tabindex="-1" href="#" onclick="logOut();">Logout</a></li>');
		$loginMenu.append($profile);
		$loginMenu.append($logout);
		$userSpan.text(Parse.User.current().get("username"));
	}
}

loginModal = '<div id="login" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button><h3 id="loginLabel">Login</h3></div><div class="modal-body"><form style="margin-bottom: 0px;"><fieldset><div class="control-group"><label for="name-login">Username</label><div class="controls"><input type="text" id="name-login" name="name-login"><span class="help-inline"></span></div></div><div class="control-group"><label for="psword-login">Password</label><div class="controls"><input type="password" id="psword-login" name="psword-login"><span class="help-inline"></span></div></div></fieldset></form></div><div class="modal-footer"><button class="btn btn-inverse" onclick="logIn()">Login</button></div></div>';
signupModal = '<div id="signup" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="signinLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button><h3 id="signupLabel">Sign Up</h3></div><div class="modal-body"><form style="margin-bottom: 0px;"><fieldset><div class="control-group"><label for="name-signup">Username *</label><div class="controls"><input type="text" id="name-signup" name="name-signup"><span class="help-inline"></span></div></div><div class="control-group"><label for="psword-signup">Password *</label><div class="controls"><input type="password" id="psword-signup" name="psword-signup"><span class="help-inline"></span></div></div><div class="control-group"><label for="psword2-signup">Confirm Password *</label><div class="controls"><input type="password" id="psword2-signup" name="psword2-signup"><span class="help-inline"></span></div></div><div class="control-group"><label for="email-signup">Email *</label><div class="controls"><input type="email" id="email-signup" name="email-signup"><span class="help-inline"></span></div></div></fieldset></form></div><div class="modal-footer"><button class="btn btn-inverse" onclick="signUp()">Sign Up</button></div></div>';
$("body").append($(loginModal)).append($(signupModal));

buildMenu();



function Notloggedin (){
	currentUser = Parse.User.current();
	if (currentUser == null) {
		alert("You must be logged in to continue.");
		return false;
	}
	
}

/*

	var user = document.login.userID.value;
	var pass = document.login.pass.value;

	var details = "username="+user+"&password="+pass;

	//Server Address
	var url = "localhost://phpTest/POST.php";


*/