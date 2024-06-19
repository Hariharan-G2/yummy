function validate() {
 
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("numberError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";



  var name = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var pass = document.getElementById("password").value;
  var isValid = true;

  if (name=== "") {
    document.getElementById("usernameError").innerHTML = "Name is required";
    isValid = false;
  }
	
  if (email=== "") {
    document.getElementById("emailError").innerHTML = "email is required";
    isValid = false;
  }
  else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) 
	{
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }


  var numberPattern = /^\d{10}$/;
  if (!numberPattern.test(number)) {
    document.getElementById("numberError").innerHTML = "Invalid phone number";
    isValid = false;
  }

  
  if (pass === "") {
    document.getElementById("passwordError").innerHTML = "Password is required";
    isValid = false;
  }
if (isValid) {
    alert ("Signup Successfull...");
	clearForm()
  }

  return isValid;
}
function clearForm() {
        
         document.getElementById("username").value = "";
         document.getElementById("email").value = "";
         document.getElementById("number").value = "";
         document.getElementById("password").value = "";
}

function validateForm() {
    document.getElementById('nameerror').textContent = '';
    document.getElementById('passworderror').textContent = '';

    var username = document.getElementById('name').value;
    var password = document.getElementById('pass').value;

    if (username === '') {
        document.getElementById('nameerror').textContent = 'Username is required';
        return;
    }

    if (password=== '') {
        document.getElementById('passworderror').textContent = 'Password is required';
        return;
    }
	setLoggedInUsername(username);
    window.location.href = "index.html";
}
 function setLoggedInUsername(username) {
            
            localStorage.setItem('loggedInUsername', username);
        }

        function updateAccountLink() {
            var isLoggedIn = checkIsLoggedIn();

            if (isLoggedIn) {
                var username = getLoggedInUsername();

                document.getElementById("accountLink").innerHTML =
				'<i class="fa-solid fa-user"></i>' + username +
				'<ul class="dropdown-menu">' +
				'<li><a href="">User Details</a></li>' +
				'<li><button type="button" id="login"onclick="logout()">Logout</button></li>' +
				'</ul>';
                document.getElementById("accountLink").setAttribute('href', '#');
            }
        }

        function checkIsLoggedIn() {
            
            return localStorage.getItem('loggedInUsername') !== null;
        }

        function getLoggedInUsername() {
            
            return localStorage.getItem('loggedInUsername') || "DefaultUser";
        }

        document.addEventListener('DOMContentLoaded', updateAccountLink);
		
	function logout() {
    var confirmLogout = confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
        clearLoggedInUsername();
        window.location.href = "index.html";
    }
}
        function clearLoggedInUsername() {
            localStorage.removeItem('loggedInUsername');
        }
