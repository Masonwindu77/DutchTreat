$(document).ready(function () {
    var theForm = $("#theForm");
    theForm.hide(); // JQuery handles your intention. 

    var button = $("#btnBuy");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-properties li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    })

    var $loginToggle = $("#divLoginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.slideToggle(100); // JQuery has an animation thing. slideToggle, fadeToggle
    })
})
