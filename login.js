function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="master"&&password=="chauhan"){
        alert("Logged in successfully");
        return false;
    }
    else{
        alert("Please enter radar member login")
    }
}
// Welcome to github master. Password id hernuhos.