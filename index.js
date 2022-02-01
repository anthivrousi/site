var attempt = 3;
function validate() {
  var userUsername = document.getElementById("username").value;
  var userPassword = document.getElementById("password").value;
  if (userUsername == "iconplatforms" && userPassword == "P@s$w0rD") {
    window.location.href = "index2.html";
  } else {
    attempt--;

    document.getElementById("wrongcredentials").innerHTML =
      "You Entered Wrong Credentials! exeis 8 psifia to prwto arxizei apo d";
    alert("You have left " + attempt + " attempt!");
    document.getElementById("wrongcredentials").classList.add("redstyle");
  }

  if (attempt == 0) {
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
  }

  if (userUsername.length < 5) {
    document.getElementById("morecharacters").innerHTML =
      "Please Add More Characters";
    document.getElementById("morecharacters").classList.add("redstyle");
  }
}

// function mybutton() {
//   document.getElementById("firstbutton").classList.add("firstbutton");
// }

var modal = document.getElementById("firstbutton");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// function Reset() {
//   document.getElementById("myform").reset();
// }
