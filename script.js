$(document).ready(function(){

  $("#move").click(function(){
    // change this to fadeToggle for another cool effect
    $("#square").toggle();
  });

  $("#add").click(function(){
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    $("#result").text("Your sum is: " + (num1 + num2));
  });

  $("#multiply").click(function(){
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    $("#result").text("Your product is: " + (num1 * num2));
  });

  $("#newFriend").blur(function(){
    $("#list").append("<li>" + $("#newFriend").val() + "</li>");
    console.log($("#newFriend").val());
  });

});
