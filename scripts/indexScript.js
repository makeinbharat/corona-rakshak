var total=0;
var username;
var classification;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "username=" + cname + ";" + expires + "; path=/";
    document.cookie = "classification=" + cvalue + ";" + expires + "; path=/";
}

function cook(){
    if(document.getElementById("name").value!=""){
        document.getElementById("nm_err_msg").style.display=("none");
        if(document.getElementById("points").value>=1){
            document.getElementById("err_msg").style.display=("none");
            setCookie(username, classification, 7);
            location.reload();
        }
        else{
            document.getElementById("err_msg").style.display=("block");
            document.getElementById("err_msg").innerHTML=("You need to answer all the questions");
        }
    }
    else{
        document.getElementById("nm_err_msg").style.display=("block");
        document.getElementById("nm_err_msg").innerHTML=("Name Can't Be Empty");
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setuser_rlBG(user_rl){
    if(user_rl === "Totally Safe"){
        document.getElementById("rl_back").style.background = ("#06A77D");
        document.getElementById("rl_back").style.color = ("#FFFFFF");
        document.getElementById("t_safe").style.display ="block";
    }
    else if(user_rl === "Safe"){
        document.getElementById("rl_back").style.background = ("#28B85B");
        document.getElementById("rl_back").style.color = ("#FFFFFF");
        document.getElementById("safe").style.display ="block";
    }
    else if(user_rl === "Suspected to Infection"){
        document.getElementById("rl_back").style.background = ("#CCC908");
        document.getElementById("rl_back").style.color = ("#FFFFFF");
        document.getElementById("susp").style.display ="block";
    }
    else if(user_rl === "Probably Infected"){
        document.getElementById("rl_back").style.background = ("#FF9900");
        document.getElementById("rl_back").style.color = ("#FFFFFF");
        document.getElementById("prob").style.display ="block";
    }
    else if(user_rl === "Infected"){
        document.getElementById("rl_back").style.background = ("#CC2936");
        document.getElementById("rl_back").style.color = ("#FFFFFF");
        document.getElementById("inf").style.display ="block";
    }
}

function checkCookie() {
    var user = getCookie("username");
    var classification = getCookie("classification");
    if (user != "") {
        document.getElementById("home_body").style.display=("block");
        document.getElementById("quiz_body").style.display=("none");
        document.getElementById("user_nm").innerHTML = user;
        document.getElementById("user_rl").innerHTML = classification;
        setuser_rlBG(classification);
    } 
    else{
        document.getElementById("quiz_body").style.display=("block");
        document.getElementById("home_body").style.display=("none");
    }
}

function resetCookies(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "classification=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
}

 function addpoint(a){
    total = total + a;
    if(total == 27){
        window.open("./easteregg/ee.html", "_self", "replace");
    }
    else if(total>=0 && total<=3){
        classification = "Totally Safe";
    }
    else if(total>=4 && total<=6){
        classification = "Safe";
    }
    else if(total>=7 && total<=9){
        classification = "Suspected to Infection";
    }
    else if(total>=10 && total<=12){
        classification = "Probably Infected";
    }
    else if(total>=13 && total<=15){
        classification = "Infected";
    }
    document.getElementById("points").value=total;
    console.log(classification);
 }

 function setUname(){
     username = document.getElementById("name").value;
 }

 function showscores(){
    document.getElementById("home_body").style.display = "none";
    document.getElementById("scores_body").style.display = "block";
}

function hidescores(){
    document.getElementById("home_body").style.display = "block";
    document.getElementById("scores_body").style.display = "none";
}