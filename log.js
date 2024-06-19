function  validateForm(){
 
  document.getElementById("nameerror").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";



  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  var isValid = true;

  if (name=== "") {
    document.getElementById("nameerror").innerHTML = "Name is required";
    isValid = false;
  }
	
  
  if (pass === "") {
    document.getElementById("passworderror").innerHTML = "Password is required";
    isValid = false;
  }
if (isValid) {
   window.location."index.html";
	
  }

  return isValid;
}