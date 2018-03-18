function Login(){

    var nameText = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var displayString = "";

    //Check the username for something entered and if correct
    if(nameText.length > 0)
    {
        if(nameText != "User123")
        {
            displayString += "Username does not exist.<br/>";
        }
    }
    else
    {
        displayString += "You must enter something for your username.<br/>";
    }
    //Check the password  for something entered and if correct
    if(password.length > 0)
    {
        if(password != "Information")
        {
             displayString += "Password does not exist.<br/>";
        }
    }
    else
    {
        displayString += "You must enter something for your password.<br/>";
    }

    //Display error or go to new page
    if(displayString.length == 0)
    {
        document.location.href = "./information.html";
    }
    else
    {
        document.getElementById("errorMessage").innerHTML = displayString;
    }
}