$(document).ready(function() {
  $(".notification .close").click(function() {
    $(this).parent().slideUp()
    console.log("hello")
  })

  $(".upload button").click(function() {
    $(this).parent().fadeOut()
  })
  
  $("#overlay_box .close, #overlay").click(function() {
    $("#overlay_box, #overlay").fadeOut()
  })
  
  
  $("#first_click").click(function() {
    $("#overlay").fadeIn()
    $("#overlay_box").delay(600).fadeIn()
  })

  $("#second_click").click(function() {
    $("#overlay, #overlay_box, section#landing, h2.sub").fadeOut()
    $("section#enter_info").delay(400).fadeIn()
  })
  
  $("#third_click").click(function() {
    $("section#enter_info").fadeOut()
    $("section#profile, .notification, nav").delay(400).fadeIn()
  })
  
  $("#forth_click").click(function() {
    $("section#profile, .notification").fadeOut()
    $("section#featured_info").delay(400).fadeIn()
    $(".featured").show()
  })
  
  $("#fifth_click").click(function() {
    $("section#featured_info").fadeOut()
    $("section#profile").delay(400).fadeIn()
  })

});