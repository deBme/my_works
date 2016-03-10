function check(){
    var pass=document.getElementById("password");
    var username=document.getElementById("username");
    
 var regus = /^[a-zA-Z_]{1,10}$/;
      if (regus.test(username.value)) {}
    else {
document.getElementById('errfn').innerHTML="This is invalid name please note that username should contain a-ZA-Z_";
        //alert("Check Your Username");return false;
    }

  var regph=/^(?=.*[0-9])[a-zA-Z0-9*]{6,32}$/;
  if(regph.test(pass.value)){
    return true;
  }else{document.getElementById("errps").innerHTML = "This is invalid password please note that password should contain atleast one a-ZA-Z0-9";
    //alert("Check Your password");
	return false;
  }
}










