var result_display = document.getElementById('check');

function displayResult(result){
  result_display.innerHTML = '<h1>' + result + '</h1>';
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function uppercase (string) {
  for(let i = 0; i <string.length; i++){
      if (string[i].toLowerCase() != string[i].toUpperCase() && string[i] === string[i].toUpperCase() ) {
        return true;
        }
    }
    return false;
  }


function hasnumbers(string) {
  return /\d/.test(string);
}

  function length(string){
    if(string.length > 7 && string.length < 17){
      return true;
    }
    else{
      return false;
    }

  }

$("#donebutton").on("click", function() {
  if ($("#login").val() != "" && $("#password").val() != ""){
        if(validateEmail($("#login").val()) && uppercase($("#password").val()) && hasnumbers($("#password").val()) && length($("#password").val())){
          displayResult("Great!");
        }
        else{
         displayResult("Wrong password!!!");
        }
      }
    })



