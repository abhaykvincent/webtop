//////////////////////
// GLOBAL VARIABLES //
//////////////////////
var app={
    name: "Webtop",
    v:"1.0.0",
    developer:"Abhay"
}
var accounts = [{
    name: "Abhay Vincent",
    type: "admin",
    image: "profile1"
}, {
    name: "Arun",
    type: "user",
    image: "profile2"
}, , {
    name: "Guest",
    type: "guest",
    image: "guest"
}, ];
let login = {
    accountName: "Abhay Vincent",
    isLoggedIn: true
}

//////////////////////
// Account Screen   //
//////////////////////
//showing accounts screen

function accountScreenSetup() {
    $("section").hide();
    $(".accounts-screen").show();
    $(".acctPassword").hide();
    $(".acctDetails").hide();

    // setting accounts name
    $(".accountName").text(accounts[0].name);
    let thisDiv;

    //onclick background blur & make account profile center and password input
    $(".accounts").click(function (e) {
        e.preventDefault();
        thisDiv = this;
        //display back button
        $(".back").css({
            "opacity": "1"
        });
        //hide all accounts
        $(".accounts").not(this).hide();
        //blur background

        //make selected account center to screen
        $(this).css({
            "left": "50vw",
            "transform": "translate(-50%,-50%)"
        });
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
        if (login.isLoggedIn == true) {
            console.log(login.isLoggedIn)
            $("section").hide();
            $(".landing-screen").show();
        }
    });


}
accountScreenSetup();
//////////////////////
// Landing Screen   //
//////////////////////
// left panel name and dropdown options
var leftPanel = [{
        name: "Blog",
        icon: `<i class="fas fa-newspaper"></i>`,
        options: ["Add post", "Edit post"],
        link:["#addPost"],
        optionIcon: [`<i class="fas fa-plus"></i>`, `<i class="far fa-trash-alt"></i>`]
    },
    {
        name: "Apeiro",
        icon: `<i class="fab fa-battle-net"></i>`,
        options: ["Add post", "Add post"],
        link:["#addPost"],
        optionIcon: [`<i class="fas fa-plus"></i>`, `<i class="far fa-trash-alt"></i>`],
    },
    {
        name: "Settings",
        icon: `<i class="fas fa-sliders-h"></i>`,
        options: ["Change Password","Logout"],
        link:["#addPost"],
        optionIcon: [`<i class="fas fa-key"></i>`, `<i class="fas fa-sign-out-alt"></i>`],
    }
];
var calander  = {
    month:"January",
    year:"2020",
    dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    today: 13
}
// top panel name and dropdown options
var topPanel = [{
        name: "Lorem",
        options: ["Lorem", "ipsum", "dolor", "sit", "amet"]
    },
    {
        name: "Lorem",
        options: ["Lorem", "ipsum", "dolor", "dolor", "sit", "amet", "dolor", "sit", "amet"]
    },
    {
        name: "Lorem",
        options: ["Lorem", "ipsum", "dolor", "sit", "amet"]
    },
];
// Task-Manager task details
var tasks = [{
    taskId: 1,
    taskName: "Portfolio Development",
    status: "pending"
}, {
    taskId: 2,
    taskName: "Easy Grocries",
    status: "pending"
}, {
    taskId: 3,
    taskName: "Resume",
    status: "pending"
}, {
    taskId: 4,
    taskName: "Regex Form",
    status: "pending"
}, {
    taskId: 5,
    taskName: "Wordpress",
    status: "pending"
}];
// Blog post Panel setting options and icons
var postSettings = {
    options: [{
        name: "Edit Post",
        icon: `<i class="fas fa-edit"></i>`,
        class: "editPost_button"
    }, {
        name: "Delete Post",
        icon: `<i class="fas fa-trash-alt"></i>`,
        class: "deletePost_button"
    }, {
        name: "Private",
        icon: `<i class="fas fa-user-lock"></i>`,
        class: "privatePost_button"
    }]
}
// Blog Post Storage
var posts = [{
        location: "Oshawa, Canada",
        date: "10 Jan 2020",

        heading: "Lorem ipsum dolor sit amet ",
        subHeading: "consectetur adipisicing elit. Quidem, sit, nam autem quas incidunt",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem quasi magnam possimus doloribus nobis neque non deserunt explicabo. Numquam autem sint quasi corporis quas iste provident iusto dolorem doloribus.",
    },
    {
        location: "Oshawa, Canada",
        date: "11 Jan 2020",

        heading: "Lorem ipsum dolor  ",
        subHeading: "consectetur adipisicing elit. Quidem, sit, nam autem quas incidunt sit amet sit amet sit amet",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem quasi magnam possimus doloribus nobis neque non deserunt explicabo. Numquam autem sint quasi corporis quas iste provident iusto dolorem doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    }
]


//header
function headerSetting_dropdown() {
    //header
    $(".settingsWindow").data("active", "false");
    $("header .settings").click(function (e) {
        let isActive = $(".settingsWindow").data('active');
        e.preventDefault();
        if (isActive === "false") {
            console.log("was inactive");
            $(".settingsWindow").data("active", "true");
            $(".settingsWindow").css({
                "transform": "translateY(0%)"
            });
            TweenMax.to(".settingsOptionSub", 0.2, {
                x: 0,
                delay: 0.2
            })
        } else {
            console.log("was active");
            $(".settingsWindow").data("active", "false");
            $(".settingsWindow").css({
                "transform": "translateY(-100%)"
            });
            TweenMax.to(".settingsOptionSub", 0.2, {
                x: 40,
                delay: 0.2
            })
        }
    });

}
//body
function addLeftPanelOptions() {
    let content = "";
    leftPanel.forEach(element => {
        content += `<div class="leftPanelOption">
                        <div class="leftPanelLabel">
                            <h1>${element.icon} ${element.name} <i class="dropdownIcon fas fa-chevron-down"></i></h1>
                        </div>
                        <div class="leftPanelOptions">`
        element.options.forEach((option, i) => {
            content += `<a href="${element.link}" class="leftPanelOption">${element.optionIcon[i]} ${option}</a>`
        });
        content += `</div>
                    </div>`;
    });
    $(".leftPanelOption.settings").after(content);
}
function addTopPanelOptions() {
    let content = "";
    topPanel.forEach(element => {
        content += `<div class="topPanelOption">
        <h3 class="topPanelOption-heading">${element.name} <i class="dropdownIcon fas fa-caret-down"></i></h3>
        <div class="topPanelOption-list">`
        element.options.forEach((option, i) => {
            content += `<p class="topPanelOption-listBTN">${option}</p>`
        });
        content += `</div></div>`;
    });
    $(".panels.top").append(content);
}
function topPanelDropdown() { //Article panel settings drop down

    addTopPanelOptions();


}
function leftpanelDropdownn() {
    $(".leftPanelLabel").data("active", "false");
    $(".leftPanelLabel").click(function (e) {
        let isActive = $(this).data('active');
        e.preventDefault();
        if (isActive === "false") {
            $(this).data("active", "true");
            $(this).addClass("leftPanelLabel_active");
            $("+.leftPanelOptions", this).addClass("showOptions");
            $(".dropdownIcon",this ).addClass("fa-chevron-up");
            $(".dropdownIcon",this ).removeClass("fa-chevron-down");
        } else {
            $(this).data("active", "false");
            $(this).removeClass("leftPanelLabel_active");
            $("+.leftPanelOptions", this).removeClass("showOptions");
            $(".dropdownIcon",this ).removeClass("fa-chevron-up");
            $(".dropdownIcon",this ).addClass("fa-chevron-down");
        }
    });
}
//calander
function calendar(){
    //html structure
    datesContent="";
    $(".calanderApp .main").html(`<i class="fas fa-caret-left monthSwitch-left"></i>${calander.month} ${calander.year}<i class="fas fa-caret-right monthSwitch-right"></i>`);
    calander.dates.forEach((date) => {
        if(date == calander.today){
            datesContent += `<div class="cell today">${date}</div>`
        }
        else{
            datesContent += `<div class="cell">${date}</div>`
        }
    });
    $(".calanderApp .container").append(datesContent);
    $(".appsWindow").hide();
    $(".currentApp").show();
    //functionality
    $(".cell").data("active", true);
    $(".container .cell").click(function (e) { 
        e.preventDefault();
        if($(".cell").data("active")  == false){
            $(".cell").data("active", true);
            $(".info").removeClass("active");
        }
        else{
            $(".cell").data("active", false);
            $(".info").addClass("active");
        }
    });
    $(".expand").click(function (e) { 
        e.preventDefault();
        calendarAdvanced();
    });
}
function calendarAdvanced(){
    console.log("Advanced Calendar");
    $(".currentApp").removeClass("currentApp");
    $("#advancedCalendar").addClass("currentApp");
    $(".appsWindow").hide();
    $(".currentApp").show();
}
//Task-manager
function reminderAppMaxBTN() {
    //To Do app maximize app
    $(".heading .maximize").data("active", "false");
    $(".heading  .maximize").click(function (e) {
        let isActive = $(".heading .maximize").data('active');
        e.preventDefault();
        if (isActive === "false") {
            document.title="Task Manager";
            console.log("was inactive");
            $(".heading .maximize").data("active", "true");
            $("#todoLists").css({
                "width": "50%"
            });
            $(".todoList").css({
                "margin-bottom": "15px",
                "font-size": "120%"
            });
            $(".addTask").css({
                "margin-bottom": "10px",
                "margin-top": "20px"
            });
            $("#todoListDetails").css({
                "width": "calc(50% - 20px)"
            });
            $(".heading .maximize").css({
                "width": "30px"
            });
            $(".toToAPP").css("width", "100%");
            $(".toToAPP").css("padding", "0px 40px 0px 0px");
        } else {
            console.log("was active");
            document.title="Webtop";
            $(".heading .maximize").data("active", "false");
            $("#todoLists").css({
                "width": "100%"
            });
            $("#todoListDetails").css({
                "width": "0px"
            });
            $(".todoList").css({
                "margin-bottom": "10px",
                "margin-top": "0px",
                "font-size": "100%"
            });
            $(".heading .maximize").css({
                "width": "35px"
            });
            $(".toToAPP").css("width", "50%");
            $(".toToAPP").css("padding", "0px 40px");

        }
    });
}
function taskList() {
    let taskContentHTML = "";
    $(".todoListWrap").html(taskContentHTML);
    //creates HTML element for tasks
    tasks.forEach((element,i) => {
        if(element.taskName!="")
        {
        taskContentHTML += `<div class="todoList">
                                    <p class="taskName">${element.taskName}</p>
                                    <i class="taskDelete_button delete far fa-check-circle" data-task-index="${i}" data-task-id="${element.taskId}"></i>
                                </div>`
        }
    });
    $(".todoListWrap").html(taskContentHTML);

    //styling
    $(".todoList .delete").mouseenter(function () {
        $(this).attr('class', '');
        $(this).addClass("taskDelete_button delete green fas fa-check-circle");
    });
    $(".todoList .delete").mouseleave(function () {
        $(this).attr('class', '');
        $(this).addClass("taskDelete_button delete red far fa-check-circle");
    });

    ///
}
function addTask() {
    $("#addTask").click(function (e) { 
        e.stopImmediatePropagation();
        let taskName = $(".addTaskInput").val();
        let taskIdValue = tasks[tasks.length - 1].taskId + 1;
        let taskNameValue = tasks[tasks.length - 1].taskName = taskName;
        let taskStatusValue = "pending";
        let value = {
            taskId: taskIdValue,
            taskName: taskNameValue,
            status: taskStatusValue
        }
        tasks.push(value);
        debugger;
        let arrlength= tasks.length;
        tasks[arrlength-1]={
            taskId: "",
            taskName: "",
            status: ""
        }
        taskList();
        $(".addTaskInput").val("");
        return false;
    });
}
function deleteTask() {
    $(document).on("click", ".taskDelete_button", function() {
        let taskIndex = $(this).data("task-index");
                parseInt(taskIndex);
                            console.log(taskIndex);
                tasks.splice(taskIndex, 1);
                            console.log(tasks);
                taskList();
    });
}
//Blog
function panelFunctionality() {
    $(".panel .settings").data("active", "false");
    $(".panel .settings").click(function (e) {
        let isActive = $(this).data('active');
        e.preventDefault();
        if (isActive === "false") {
            $(this).data("active", "true");
            $("+.panelSettingsWindow", this).addClass("panelSettingsWindow-active");
            $(this).css({
                "width": "20px",
                "transform": "rotate(270deg)"
            });
        } else {
            $(this).data("active", "false");
            $("+.panelSettingsWindow", this).removeClass("panelSettingsWindow-active");
            $(this).css({
                "width": "20px",
                "transform": "rotate(180deg)"
            });

        }
    });

    //Top panel option drop down
    $(".topPanelOption-heading").data("active", "false");
    $(".topPanelOption-heading").mouseenter(function (e) {
        let isActive = $(this).data('active');
        e.preventDefault();
        if (isActive === "false") {
            $(".topPanelOption-heading").data("active", "false");
            $(this).data("active", "true");
            $(".topPanelOption-list").removeClass("topPanelOption-list-active");
            $("+.topPanelOption-list", this).addClass("topPanelOption-list-active");
        } else {
            $(this).data("active", "false");
            $("+.topPanelOption-list", this).removeClass("topPanelOption-list-active");

        }
    });
}
function loadPostSettings() {
    let content = "";
    postSettings.options.forEach(option => {
        content +=
            `
            <p class="${option.class}" >${option.icon}  ${option.name}</p>
            `
    });
    $(".panelSettingsWindow").append(content);
}
function loadPosts() {
    let content = "";
    posts.forEach(post => {
        content +=
            `
                    <article>
                        <div class="panel">
                            <div class="settings"><i class="fas fa-ellipsis-v"></i></div>
                            <div class="panelSettingsWindow"></div>
                        </div>
                        <h1 class="mainHeading">${post.heading}</h1>
                        <h2 class="subHeading">${post.heading}</h2>
                        <p class="description place">${post.location} <i class="fas fa-map-marker-alt"></i></p>
                        <p class="description date">${post.date} <i class="fas fa-calendar-day"></i></p>
                        <p class="content">${post.content}</p>
                    </article>`
    });
    $(".articles").append(content);
    loadPostSettings();
}
function alertWindow(head, content, button, className) {
    $(".alertWindow").addClass(className);
    $(".alertWindow h1").html(head);
    $(".alertWindow p").html(content);
    $(".alertWindow button").html(button);
    $(".alertWindow").css("transform", "scale(1) translate(-50%,-50%)");
}
function alert_deletePost() {
    $(".deletePost_button").click(function (e) {
        e.preventDefault();
        alertWindow("Delete", "Do you want to delete this Post", "Delete", "red");
    });
}
//footer
function addFooter_techs(){
    techs= [
    {name:"html",           icon:`fab fa-html5`},
    {name:"css",            icon:`fab fa-css3-alt`},
    {name:"js",             icon:`fab fa-js-square`},
    {name:"npm",            icon:`fab fa-npm`},
    {name:"git",            icon:`fab fa-github-square`},
    {name:"git-kraken",     icon:`fab fa-gitkraken`},
    {name:"font-awesome",   icon:`fab fa-font-awesome`},
    {name:"apple",          icon:`fab fa-apple`},
    ];
    let content ="& "
    techs.forEach(tech => {
        content+= `<i class="footer-tech-i ${tech.icon}"></i>`
        
    });
    $(".techs").html(content);
}
function addAppVersion(){
    let name= app.name;
    let version = app.v;
    let developer  =  app.developer;
    let content  =  "";

    content  =  `
    <p class="appDetails ver" >${name} ${version}</p>
    <p class="appDetails dev" >Developed by ${developer}</p>`;

    $(".appVersion").html(content);
}
////////////////
// Production
function productionMode(screen) {
    $("section").hide();
    $(screen).show();
}
////////////////
$(document).ready(function () {
    //header
    headerSetting_dropdown();
    //body
    addLeftPanelOptions();
    topPanelDropdown();
    leftpanelDropdownn();
    calendar();
    //Task-manager
    reminderAppMaxBTN();
    taskList(); //
    deleteTask();
    addTask();
    //Blogs
    loadPosts();
    panelFunctionality();
    alert_deletePost();
    //footer
    addFooter_techs();
    addAppVersion();
    
    productionMode(".landing-screen");
});