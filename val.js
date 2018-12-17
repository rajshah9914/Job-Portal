/*
function vali(){
var f=0;
if(document.getElementById('user_name').value==='admin'){
    if(document.getElementById('PASS').value==='admin'){
    alert("Successful Login, Welcome to 'The Ladders'");
    f=1;
    window.location="cover_page.html";
    }
}
if(f===0){
    alert("Invalid Username Or Password");
}
}
*/
var attempt = 3; 
function validate() {
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("PASS").value;
    if (username == "admin" && password == "admin") {
        alert("Login successfully");
        window.open("https://support.minitab.com/en-us/datasets/graphs-data-sets/automobile-specifications-data/");//= "https://support.minitab.com/en-us/datasets/graphs-data-sets/automobile-specifications-data/"; 
        //alert("hi");
        return false;
    }
    else {
        attempt--;
        alert("Login Failed, please enter correct username or password");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}