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

// ==============================
// Standard Dialogs
$("#alert").on( 'click', function () {
    reset();
    alertify.alert("Sorry, reservations are only for Chandler, Monica, Phoebe, Joey, Ross, and Rachel.");
    return false;
});
