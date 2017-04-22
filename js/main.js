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

//JavaScript Code under navigation
// here I am using an if statement to display a morning welcome greeting if the time of day is earlier than 12pm
if (new Date().getHours() < 12) {
    document.getElementById("demo").innerHTML = "Good morning and welcome! Start your day with a cup of coffee!";
}
// here I am using an if statement to display an afternoon welcome greeting if the time of day is between 12pm and 5pm
else if (new Date().getHours() < 17 ) {
    document.getElementById("demo").innerHTML = "Good afternoon and welcome! Come see us for a bite to eat.";
}

//if the time is not earlier than 12 and not between 12 and 5, it will display a good evening message
else {
        document.getElementById("demo").innerHTML = "Good evening and welcome to Central Perk! Check our events schedule to see what's happening tonight at the coffeehouse.";
    }


//JavaScript Code in Gift Card section
// on click of the button, this function is fading in one div at a time based on speed
$(document).ready(function(){
    $("#gunther").click(function(){
        $("#gc10").fadeIn();
        $("#gc25").fadeIn("slow");
        $("#gc50").fadeIn(3000);
        $("#gc100").fadeIn(4000);
    });
});
