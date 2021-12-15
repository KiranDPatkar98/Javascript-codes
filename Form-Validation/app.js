//for usernamecheck

document.getElementById("username").addEventListener("blur", () => {
  let username = document.getElementById("username").value;
  let ucheck = /^[a-zA-Z .]{2,}$/;
  if (ucheck.test(username)) {
    document.getElementById("eicon").classList.add("active");
    document.getElementById("error").classList.remove("activeerror");
    document.getElementById("pusername").style.display = "none";
    
    document.getElementById("btn").removeAttribute("disabled")
   
  } else {
    document.getElementById("error").classList.add("activeerror");
    document.getElementById("pusername").innerHTML =
      "username must be an alphabatic character";
    document.getElementById("eicon").classList.remove("active");
    document.getElementById("pusername").style.display = "block";
    document.getElementById("btn").setAttribute("disabled","disabled")
   
    
  }

 
});

//for email-check

document.getElementById("email").addEventListener("blur", () => {
  let email = document.getElementById("email").value;
  let echeck = /[a-zA-Z.0-9]{2,}@[A-Za-z]{2,}[.][a-zA-Z.]{2,}/;

  if (echeck.test(email)) {
    document.getElementById("eiconemail").classList.add("active");
    document.getElementById("erroremail").classList.remove("activeerror");
    document.getElementById("pemail").style.display = "none";
    // document.getElementById("btn").removeAttribute("disabled")
  } else {
    document.getElementById("erroremail").classList.add("activeerror");
    document.getElementById("eiconemail").classList.remove("active");
    document.getElementById("pemail").innerHTML = "Enter valid email id";
    document.getElementById("pemail").style.display = "block";
    // document.getElementById("btn").setAttribute("disabled","disabled")
    
  }
});

document.getElementById("pwd").addEventListener("blur", () => {
  let password = document.getElementById("pwd").value;
  let pcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
  if (pcheck.test(password)) {
    document.getElementById("eiconpwd").classList.add("active");
    document.getElementById("errorpwd").classList.remove("activeerror");
    document.getElementById("ppwd").style.display = "none";
    // document.getElementById("btn").removeAttribute("disabled")
  } else {
    document.getElementById("errorpwd").classList.add("activeerror");
    document.getElementById("eiconpwd").classList.remove("active");
    document.getElementById("ppwd").innerHTML =
      "A password contains at least five characters, including at least one number and includes both lower and uppercase letters and special characters";
    document.getElementById("ppwd").style.display = "block";
    // document.getElementById("btn").setAttribute("disabled","disabled")
   
  }
});
document.getElementById("rpwd").addEventListener("blur", () => {
  let password = document.getElementById("pwd").value;
  let repassword = document.getElementById("rpwd").value;
  if (password.match(repassword)) {
    document.getElementById("eiconrepwd").classList.add("active");
    document.getElementById("errorrepwd").classList.remove("activeerror");
    document.getElementById("rppwd").style.display = "none";
    // document.getElementById("btn").removeAttribute("disabled")
  } else {
    document.getElementById("errorrepwd").classList.add("activeerror");
    document.getElementById("eiconrepwd").classList.remove("active");
    document.getElementById("rppwd").innerHTML = "password doesn't match";
    document.getElementById("rppwd").style.display = "block";
    // document.getElementById("btn").setAttribute("disabled","disabled")
   
  }
  if(repassword==="")
  {
    document.getElementById("errorrepwd").classList.add("activeerror");
    document.getElementById("eiconrepwd").classList.remove("active");
    document.getElementById("rppwd").innerHTML = "password doesn't match";
    document.getElementById("rppwd").style.display = "block";
  }
});
document.getElementById("mbno").addEventListener("blur", () => {
  let mblno = document.getElementById("mbno").value;
  let cmblno = /^[0-9]{10}$/;
  if (cmblno.test(mblno)) {
    document.getElementById("eiconmbl").classList.add("active");
    document.getElementById("errormbl").classList.remove("activeerror");
    document.getElementById("pmbl").style.display = "none";
    // document.getElementById("btn").removeAttribute("disabled")
  } else {
    document.getElementById("errormbl").classList.add("activeerror");
    document.getElementById("eiconmbl").classList.remove("active");
    document.getElementById("pmbl").innerHTML = "Enter valid mobile number";
    document.getElementById("pmbl").style.display = "block";
    // document.getElementById("btn").setAttribute("disabled","disabled")
   
  }
});
// function validate(){
  
//   let username = document.getElementById("username").value;
//   let ucheck = /^[a-zA-Z .]{2,}$/;

//   let email = document.getElementById("email").value;
//   let echeck = /[a-zA-Z.0-9]{2,}@[A-Za-z]{2,}[.][a-zA-Z.]{2,}/;
//   let password = document.getElementById("pwd").value;
//   let pcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
//   let password2 = document.getElementById("pwd").value;
//   let repassword = document.getElementById("rpwd").value;
//   let mblno = document.getElementById("mbno").value;
//   let cmblno = /^[0-9]{10}$/;

// if(!(ucheck.test(username))){
// // document,getElementById("btn").setAttribute("disabled","disabled")
// pre
// }
// }


document.querySelector("form").addEventListener("submit",(e)=>{

  
    let username = document.getElementById("username").value;
  let ucheck = /^[a-zA-Z .]{2,}$/;
  let email = document.getElementById("email").value;
  let echeck = /[a-zA-Z.0-9]{2,}@[A-Za-z]{2,}[.][a-zA-Z.]{2,}/;
  let password = document.getElementById("pwd").value;
  let pcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
 
  let repassword = document.getElementById("rpwd").value;
  let mblno = document.getElementById("mbno").value;
  let cmblno = /^[0-9]{10}$/;


  if(!(ucheck.test(username))){
  e.preventDefault();
  
  }
  if(!((echeck.test(email)))){
    e.preventDefault();
  }
  if(!(pcheck.test(password))){
    e.preventDefault();
  }
  if(!(password.match(repassword))){
    e.preventDefault();
  }
  if(!(cmblno.test(mblno))){
    e.preventDefault();
  }

})



