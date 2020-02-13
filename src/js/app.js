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
            TweenMax.to(".settingsOptionSub",0.2,{
                x: 0,
                delay: 0.2
            })
        }
        else{
            console.log("was active");
            $(".settingsWindow").data("active", "false");
            $(".settingsWindow").css({"transform":"translateY(-100%)"});
            TweenMax.to(".settingsOptionSub",0.2,{
                x:40,
                delay: 0.2
            })
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
            $("#todoLists").css({"width":"50%"});
            $(".todoList").css({"margin-bottom":"15px","font-size":"120%"});
            $(".addTask").css({"margin-bottom":"10px","margin-top":"20px"});
            $("#todoListDetails").css({"width":"calc(50% - 20px)"});
            $(".heading .maximize").css({"width":"30px"});
            $(".toToAPP").css("width", "100%");
            $(".toToAPP").css("padding", "0px 40px 0px 0px");
        }
        else{
            console.log("was active");
            $(".heading .maximize").data("active", "false");
            $("#todoLists").css({"width":"100%"});
            $("#todoListDetails").css({"width":"0px"});
            $(".todoList").css({"margin-bottom":"10px","margin-top":"0px","font-size":"100%"});
            $(".heading .maximize").css({"width":"35px"});
            $(".toToAPP").css("width", "50%");
            $(".toToAPP").css("padding", "0px 40px");
            
        }
    });


    //Areticle panel settings drop down
    $(".panel .settings").data("active", "false");
    $(".panel .settings").click(function (e) { 
        let isActive =  $(this).data('active');
        e.preventDefault();
        if(isActive  === "false"){
            $(this).data("active", "true");
            $("+.panelSettingsWindow",this).addClass("panelSettingsWindow-active");
            $(this).css({"width":"20px","transform":"rotate(90deg)"});
        }
        else{
            $(this).data("active", "false");
            $("+.panelSettingsWindow",this).removeClass("panelSettingsWindow-active");
            $(this).css({"width":"20px","transform":"rotate(0deg)"});
            
        }
    });

        //Top panel option drop down
        $(".topPanelOption-heading").data("active", "false");
        $(".topPanelOption-heading").click(function (e) { 
            let isActive =  $(this).data('active');
            e.preventDefault();
            if(isActive  === "false"){
                $(".topPanelOption-heading").data("active", "false");
                $(this).data("active", "true");
                $(".topPanelOption-list").removeClass("topPanelOption-list-active");
                $("+.topPanelOption-list",this).addClass("topPanelOption-list-active");
            }
            else{
                $(this).data("active", "false");
                $("+.topPanelOption-list",this).removeClass("topPanelOption-list-active");
                
            }
        });

$(".leftPanelLabel").data("active", "false");
$(".leftPanelLabel").click(function (e) { let isActive =  $(this).data('active');
e.preventDefault();
if(isActive  === "false"){
    $(this).data("active", "true");
    $("+.leftPanelOptions",this).addClass("showOptions");
}
else{
    $(this).data("active", "false");
    $("+.leftPanelOptions",this).removeClass("showOptions");
    
}
    
});


//////////////
    var tasks=[{
        taskId:1,
        taskName:  "Portfolio Development",
        status: "pending"
    },{
        taskId:2,
        taskName:  "Easy Grocries",
        status: "pending"
    },{
        taskId:3,
        taskName:  "Resume",
        status: "pending"
    },{
        taskId:4,
        taskName:  "Regex Form",
        status: "pending"
    },{
        taskId:5,
        taskName:  "Wordpress",
        status: "pending"
    }];
function taskList(){
    let taskContentHTML="";

    $(".todoListWrap").html(taskContentHTML);
    tasks.forEach(element => {
        taskContentHTML +=`<div class="todoList">
                                    <p class="taskName">${element.taskName}</p>
                                    <i class="taskDelete_button delete far fa-check-circle" data-task-id="${element.taskId}"></i>
                                </div>`
    });
    $(".todoListWrap").append(taskContentHTML);


    $(".todoList .delete").mouseenter(function () {
        $(this).attr('class', '');
        $(this).addClass("delete green fas fa-check-circle");
        
    }
    );
    $(".todoList .delete").mouseleave(function () {
    $(this).attr('class', '');
    $(this).addClass("delete red far fa-check-circle");

    }
);

///
}

function deleteTask(){
    $(".taskDelete_button").click(function (e) { 
        e.preventDefault();
        let taskId = $(this).data("task-id");
        delete tasks[taskId-1];
        taskList(); //
    });
}
function addTask(){
    $("#addTask").click(function (e) { 
        e.preventDefault();
        let taskName = $(".addTaskInput").val();
        console.log(taskName);
        let taskIdValue=tasks[tasks.length-1].taskId+1;
        let taskNameValue=tasks[tasks.length-1].taskName=taskName;
        let taskStatusValue="pending";
        let value = {
            taskId:taskIdValue,
            taskName:taskNameValue,
            taskStatus:taskStatusValue
        }
        tasks.push(value);
        console.log(tasks);
        taskList(); //
    });
}

/////////////
taskList(); //
deleteTask();
addTask();
//////////////

        

    $("section").hide();
    $(".landing-screen").show();
});