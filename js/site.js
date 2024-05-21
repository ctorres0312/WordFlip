//Get the String from User Input
//Controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//Logic Function
function reverseString(userString){
    let revString = [];

    //reverse a string user a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    
    return revString;
}

//Display the reversed string to the user
//View Function
function displayString(revstring){

    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}