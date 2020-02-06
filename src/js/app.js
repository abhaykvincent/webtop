$(document).ready(function () {
    //////////////////////
    // GLOBAL VARIABLES //
    //////////////////////
    var accounts=[{
        name: "Abhay Vincent",
        type:"admin",
        image: "profile1"
    },{
        name: "Arun",
        type:"user",
        image: "profile2"
    },,{
        name: "Guest",
        type:"guest",
        image: "guest"
    },];


    //showing accounts screen
    $(".accounts-screen").show();

    $(".accountName").text(accounts[0].name);
    console.log(accounts[0].name)
});