function load() {
    //check if user has been logged on and display their name on user area and in accounts page
    var user = localStorage.getItem("login")
    if (user !== null) {
        document.getElementById("user").innerHTML = "<a href=\'account.html\' id=\'userlink\'>Welcome,<br>" + user + "</a>";
    }
    //check if they are a paying customer or not and store that data (must encrypt it so they can't fake it)
    //get all their defualt messaging information
}

function user() {
    var user = localStorage.getItem("login")
    return user;
}

function YaBoring() {
    //send request to server to initiate YaBoring
    //use server side security to check if user has already initiated YaBoring once this month, or if they are a paying customer
    
}

function BoringButton() {
    var login = user();
    if (login !== null) {
        YaBoring();
        var count = 30;
        counter();
        function counter() {
            document.getElementById("message").innerHTML = "YaBoring initiated. Distracting you from boredom within the next " + count + " seconds.";
            count = count - 1;
            if (count == -1) {
                clearInterval(calling);
                document.getElementById("message").innerHTML = "Your call should be going through to your phone. If it hasn't, please click <a href=\'contact.html\'>here.</a>";
            }
        }
        var calling = setInterval(counter, 1000);
        //show times with text or loading bar/circle
    } else {
        document.getElementById("message").innerHTML = "You need to create an account to use this program so that we know who to call! You can create an account for free <a href=\'account.html\'>here.</a>"
    }
        //graphics for load and check mark
        //need to incorperate check to see if one free call has been made yet (or if they are a paying customer)
        //need to change count time to the custom time paying customers set
        //need to alert customers they need to create an account first or log in if not logged in
}