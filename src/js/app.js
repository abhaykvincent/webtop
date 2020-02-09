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

    let login={
        accountName:"Abhay Vincent",
        isLoggedIn: true
    }


    //////////////////////
    // Account Screen   //
    //////////////////////
    //showing accounts screen
    $("section").hide();
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
    // on back button click reset
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

    $(".loginButton").click(function (e) { 
        e.preventDefault();
        if(login.isLoggedIn==true)
        {
            console.log(login.isLoggedIn)
            $("section").hide();
            $(".landing-screen").show();
        }
    });

    //////////////////////
    // Landing Screen   //
    //////////////////////

    //header


    $(".settingsWindow").data("active", "false");
    $("header .settings").click(function (e) { 
        let isActive =  $(".settingsWindow").data('active');
        e.preventDefault();
        if(isActive  === "false"){
            console.log("was inactive");
            $(".settingsWindow").data("active", "true");
            $(".settingsWindow").css({"transform":"translateY(0%)"});
        }
        else{
            console.log("was active");
            $(".settingsWindow").data("active", "false");
            $(".settingsWindow").css({"transform":"translateY(-100%)"});
        }
    });

    //To Do app maximize app
    $(".heading .maximize").data("active", "false");
    $(".heading  .maximize").click(function (e) { 
        let isActive =  $(".heading .maximize").data('active');
        e.preventDefault();
        if(isActive  === "false"){
            console.log("was inactive");
            $(".heading .maximize").data("active", "true");
            $("#todoLists").css({"width":"100%"});
            $("#todoListDetails").css({"width":"0%"});
            $(".heading .maximize").css({"width":"40px"});
        }
        else{
            console.log("was active");
            $(".heading .maximize").data("active", "false");
            $("#todoLists").css({"width":"50%"});
            $("#todoListDetails").css({"width":"calc(50% - 20px)"});
            $(".heading .maximize").css({"width":"35px"});
            
        }
    });


    //Areticle panel settings drop down
    $(".panel .settings").data("active", "false");
    $(".panel .settings").click(function (e) { 
        let isActive =  $(this).data('active');
        e.preventDefault();
        if(isActive  === "false"){
            $(this).data("active", "true");
            $("+.panelSettingsWindow",this).css({"width":"200px"});
            $(".panel .settings").css({"width":"20px"});
        }
        else{
            $(this).data("active", "false");
            $("+.panelSettingsWindow",this).css({"width":"0px"});
            
        }
    });

    $("section").hide();
    $(".landing-screen").show();
});