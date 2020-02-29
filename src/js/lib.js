function capitalize(textboxid, str) {
    // string with alteast one character
    if (str && str.length >= 1)
    {       
        var firstChar = str.charAt(0);
        var remainingStr = str.slice(1);
        str = firstChar.toUpperCase() + remainingStr;
    }
    document.getElementById(textboxid).value = str;
}
function showCurrentApp(){
    $(".appsWindow").hide();
    $(".currentApp").show();
}
function hideAllApp(){
    $(".appsWindow").hide();
}
function click_monalisa() {
    var audio = document.getElementById("click_monalisa");
    $(".click").click(function (e) { 
        e.preventDefault();
        playAudio(audio);
    });
}
function playAudio(audio){
    audio.playAudio();
}
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
function getMonthName(x){
    switch (x) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 0:
            return "April";
            break;
        case 0:
            return "May";
            break;
        case 0:
            return "June";
            break;
        case 0:
            return "July";
            break;
        case 0:
            return "August";
            break;
        case 0:
            return "September";
            break;
        case 0:
            return "October";
            break;
        case 0:
            return "November";
            break;
        case 0:
            return "December";
            break;
        default:
            break;
    }
}