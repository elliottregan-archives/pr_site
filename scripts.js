$(document).ready(function() {
  $(".notification .close").click(function() {
    $(this).parent().slideUp()
    console.log("hello")
  })

  $(".upload button").click(function() {
    $(this).parent().fadeOut()
  })
  
  $("#overlay_box .close").click(function() {
    $("#overlay_box, #overlay").fadeOut()
  })
  
  
  $("#first_click").click(function() {
    $("#overlay, #overlay_box").fadeIn()
  })

  $("#second_click").click(function() {
    $("#overlay, #overlay_box, section#landing").fadeOut()
    $("section#enter_info").delay(400).fadeIn()
  })
  
  $("#third_click").click(function() {
    $("section#enter_info").fadeOut()
    $("section#profile, .notification, nav").delay(400).fadeIn()
  })
  
  $("#forth_click").click(function() {
    $("section#profile").fadeOut()
    $("section#profile, .notification").delay(400).fadeIn()
  })

});