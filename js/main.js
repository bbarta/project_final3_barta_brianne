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

if (new Date().getHours() < 12) {
    document.getElementById("demo").innerHTML = "Good morning and welcome! Start your day with a cup of coffee!";
}
if (new Date().getHours() > 12 < 5) {
    document.getElementById("demo").innerHTML = "Good afternoon and welcome! Come see us for a bite to eat.";
}
else {
        greeting = "Good evening and welcome to Central Perk! Check our events schedule to see what's happening tonight at the coffeehouse.";
    }
