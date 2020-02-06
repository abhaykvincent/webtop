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
    $(".acctPassword").hide();
    $(".acctDetails").hide();

    // setting accounts name
    $(".accountName").text(accounts[0].name);

    //onclick background blur & make account profile center and password input
    let thisDiv;
    $(".accounts").click(function (e) { 
        e.preventDefault();
        thisDiv=this;
        //display back button
        $(".back").css({"opacity":"1"});
        //hide all accounts
        $(".accounts").not(this).hide();
        //blur background

        //make selected account center to screen
        $(this).css({"left": "50vw","transform": "translate(-50%,-50%)"});
        //show input box for password
        $(this).find(".acctPassword").show();
        $(this).find(".acctDetails").show();
        $(this).find(".accountName").hide();
        $('.acctPassword').focus();
    });

    $(".back").click(function (e) { 
        e.preventDefault();
        //hide all accounts
        $(".accounts").not(this).show();
        //blur background

        //make selected account center to screen
        $(thisDiv).removeAttr('style'); 
        //show input box for password
        $(thisDiv).find(".acctPassword").hide();
        $(thisDiv).find(".acctDetails").hide();
        $(thisDiv).find(".accountName").show();
    });
});