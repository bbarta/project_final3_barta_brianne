//alertify

function reset () {
    $("#toggleCSS").attr("href", "../themes/alertify.default.css");
    alertify.set({
        labels : {
            ok     : "OK",
            cancel : "Cancel"
        },
        delay : 5000,
        buttonReverse : false,
        buttonFocus   : "ok"
    });
}


$("#alert").on( 'click', function () {
    reset();
    alertify.alert("Sorry, reservations are only for Chandler, Monica, Phoebe, Joey, Ross, and Rachel. Please feel free to drop-in at anytime and we will seat you as soon as possible. Thank you.");
    return false;
});

//if else statement greeting
// here I am using an if statement to display a morning welcome greeting if the time of day is less than 12:00 hours
if (new Date().getHours() < 12) {
    document.getElementById("demo").innerHTML = "Good morning and welcome! Start your day with a cup of coffee!";
}
// here I am using an if statement to display an afternoon welcome greeting if the time of day is between noon and 5
if (new Date().getHours() > 12 < 5) {
    document.getElementById("demo").innerHTML = "Good afternoon and welcome! Come see us for a bite to eat.";
}

//if the time is not earlier than 12 and not between 12 and 5, it will display a good evening message
else {
        greeting = "Good evening and welcome to Central Perk! Check our events schedule to see what's happening tonight at the coffeehouse.";
    }



// jQuery gift card fade in
// on click of the button, this function is fading in one div at a time based on speed
$(document).ready(function(){
    $("#gunther").click(function(){
        $("#gc10").fadeIn();
        $("#gc25").fadeIn("slow");
        $("#gc50").fadeIn(3000);
        $("#gc100").fadeIn(4000);
    });
});
