$(document).ready(function() {
    function colorControl(){
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        var actualMoment = moment();
        var dailyCounter = moment().startOf('day').add(12, "hours");
        actualMoment = actualMoment.startOf("hour");



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
             
            var value = window.localStorage.getItem($(this).attr("id"));
            $(this).children(".description").val(value);

        })
    }
    colorControl();


$(".saveBtn").on("click" , function(){
    var valueStorage = $(this).siblings(".description").val();
    var timeStorage = $(this).parent().attr("id");
    localStorage.setItem(timeStorage, valueStorage);
})
$(".clearBtn").on("click", function(){
    window.localStorage.clear("form-control description");
})

});
