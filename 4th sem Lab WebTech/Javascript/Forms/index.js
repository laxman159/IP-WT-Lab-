var text = "";

function myFunction(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;
  var sex = document.querySelector('input[name="sex"]:checked').value;
  var checkboxes = document.getElementsByName("lang");
  // console.log(checkboxes);

  var vals;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      vals += ", " + checkboxes[i].value;
    }
  }
  //   console.log(vals);

  if (
    name.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    phone.length > 0 &&
    dob.length > 0 &&
    address.length &&
    sex.length
  ) {
    alert("Registration successful");
    document.getElementById("demo").innerHTML = "Name:           " + name;
    document.getElementById("demo1").innerHTML = "Password:      " + password;
    document.getElementById("demo2").innerHTML = "Email Address: " + email;
    document.getElementById("demo3").innerHTML = "Phone Number:  " + phone;
    document.getElementById("demo4").innerHTML = "Sex:           " + sex;
    document.getElementById("demo5").innerHTML = "Date of Birth: " + dob;
    document.getElementById("demo6").innerHTML = "Language:      " + vals;
    document.getElementById("demo7").innerHTML = "Address:       " + address;
  } else {
    alert("Registration failed. Please fill in all the fields");
  }
}
