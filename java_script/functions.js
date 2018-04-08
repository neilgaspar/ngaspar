/*
    File: function.js
    Author: Neil Gaspar
    Date Last Modified: April 8, 2018
    Description: Various javascript functions for the website
*/

function header()
{
    document.write("<header>");
    //Image By Zscout370 at English Wikipedia [Public domain], via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Maple_Leaf.svg
    document.write("<a href = './index.html'><img src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Maple_Leaf.svg' alt='Maple Leaf' style='height:94px; width:94px;' /></a>Neil Gaspar's Sports World");
    document.write("</header>");
}

function nav_bar()
{
  document.write("<nav><a href='./index.html'>Home</a> | <a href='./snowboarding.html'>Snowboarding</a> | <a href='./formula1.html'>Formula 1</a> | <a href='./hockey.html'>Hockey</a> </nav>");
}

function footer()
{
  Counter()
  document.write("<footer>");
  document.write("Neil Gaspar. April 8, 2018&copy; You have visited this website "+ localStorage.count +" time(s).<br/>");
  document.write("<a href='https://www.facebook.com'>Facebook.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.twitter.com'>Twitter.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.instagram.com'>Instagram.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.linkedin.com'>LinkedIn.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.youtube.com'>YouTube.com</a>");
  document.write("</footer><br/>");
}

function Counter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.count) {
            localStorage.count = Number(localStorage.count)+1;
        } else {
            localStorage.count = 1;
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

function check()
{
    var missing = "";

    //Check for each piece of equipment
    if(document.getElementById("helmet").checked == false)
    {
        missing += "You are missing a Helmet you must have one to play hockey.<br/>";
    }

    if(document.getElementById("neck_guard").checked == false)
    {
        missing += "You are missing a Neck Guard you must have one to play hockey.<br/>";
    }

    if(document.getElementById("shoulder_pads").checked == false)
    {
        missing += "You are missing a Shoulder Pads, you should wear shoulder pads even if they are not required for your league.<br/>";
    }

    if(document.getElementById("elbow_pads").checked == false)
    {
        missing += "You are missing a Elbow Pads.<br/>";
    }

    if(document.getElementById("gloves").checked == false)
    {
        missing += "You are missing a Gloves.<br/>";
    }

    if(document.getElementById("stick").checked == false)
    {
        missing += "You are missing a stick which is needed to play hockey.<br/>";
    }

    if(document.getElementById("pants").checked == false)
    {
        missing += "You are missing a Hockey Pants, you need to wear some for hockey.<br/>";
    }

    if(document.getElementById("jock").checked == false)
    {
        missing += "You are missing a jock, you need to wear one for hockey.<br/>";
    }

    if(document.getElementById("shin_pads").checked == false)
    {
        missing += "You are missing a Shin Pads, you need to wear some for hockey. You dont want to take a puck or stick on the shins.<br/>";
    }

    if(document.getElementById("skates").checked == false)
    {
        missing += "You are missing a Skates, you need to wear some for hockey.<br/>";
    }

    //If everything is good they get this message.
    if(missing.length == 0)
    {
        missing += "You are not missing any equipment. Have Fun Playing!";
    }

    //Display the message of what they are missing or if they have everything
    document.getElementById("missing").innerHTML = missing;
}

function reset()
{
    document.getElementById("helmet").checked = false;
    document.getElementById("neck_guard").checked = false;
    document.getElementById("shoulder_pads").checked = false;
    document.getElementById("elbow_pads").checked = false;
    document.getElementById("gloves").checked = false;
    document.getElementById("stick").checked = false;
    document.getElementById("pants").checked = false;
    document.getElementById("jock").checked = false;
    document.getElementById("shin_pads").checked = false;
    document.getElementById("skates").checked = false;

}