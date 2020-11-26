$(document).ready(function() {
    function colorControl(){
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        var actualMoment = moment().hours();
        var dailyCounter = moment().startOf('day').add(12, "hours");
        //actualMoment = actualMoment.startOf("hour");



        $(".input-group-list").each(function() {
            var timeBlockhour = parseInt($(this).attr("id"));

            if (timeBlockhour < actualMoment) {
                $(this).addClass("past");

            }
            else if (timeBlockhour === actualMoment) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
             

        })
    }
    colorControl();
$("#6 .description").val(localStorage.getItem("6"));
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

    //var value = window.localStorage.getItem($(this).attr("id"));
    //$(this).children(".description").val(value);

$(".saveBtn").on("click" , function(){
    var valueStorage = $(this).siblings(".description").val();
    var timeStorage = $(this).parent().attr("id");
    localStorage.setItem(timeStorage, valueStorage);
})
$(".clearBtn").on("click", function(){
    localStorage.removeItem("6");
    localStorage.removeItem("7");
    localStorage.removeItem("8");
    localStorage.removeItem("9");
    localStorage.removeItem("10");
    localStorage.removeItem("11");
    localStorage.removeItem("12");
    localStorage.removeItem("13");
    localStorage.removeItem("14");
    localStorage.removeItem("15");
    localStorage.removeItem("16");
    localStorage.removeItem("17");

    location.reload();
    //window.localStorage.clear("form-control description");
})

});
