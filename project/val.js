function validate() {
 
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("numberError").innerHTML = "";
  document.getElementById("dateError").innerHTML = "";
  document.getElementById("timeError").innerHTML = "";
  document.getElementById("peopleError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";


  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var people = document.getElementById("people").value;
  var message = document.getElementById("message").value;

  var isValid = true;

  if (name=== "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  }
	else if (!/^[a-zA-Z\s]+$/.test(name)) 
	{
        document.getElementById("nameError").innerText = "Name should contain only letters";
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

  
  if (date === "") {
    document.getElementById("dateError").innerHTML = "Date is required";
    isValid = false;
  }

  if (time === ""||time >="21:00") {
    document.getElementById("timeError").innerHTML = "Opneing Hrs Only <br>(8am - 10pm)";
    isValid = false;
  }

  
  if (people === "" || isNaN(people) || people <= 0) {
    document.getElementById("peopleError").innerHTML = "Invalid number of people";
    isValid = false;
  }
  if(message===""){
	 document.getElementById("messageError").innerHTML = "Message is required";
    isValid = false;
  }
  if (isValid) {
    window.location.href = "redirect.html";
  }

  return isValid;
}

function valid() {
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("subjecterror").innerHTML = "";
    document.getElementById("messageerror").innerHTML = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var isValid = true;

    if (name === "") {
        document.getElementById("nameerror").innerHTML = "Name is required";
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        document.getElementById("nameerror").innerText = "Name should contain only letters";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailerror").innerHTML = "Email is required";
        isValid = false;
    } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
        document.getElementById("emailerror").innerText = "Invalid email format";
        isValid = false;
    }
	if (subject === "") {
        document.getElementById("subjecterror").innerHTML = "Subject is required";
        isValid = false;
    }
	if (message === "") {
        document.getElementById("messageerror").innerHTML = "Message is required";
        isValid = false;
    }
	if(isValid){
		alert("Message Sended Successfully")
	}

    return isValid;
}
