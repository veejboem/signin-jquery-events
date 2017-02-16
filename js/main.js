// # Signin Screen
//
// ## Complete these steps to create a signin prototype:
//
// 1. When the user clicks the `.signin` button, `display` (or fade in) the `.modal` window


$('.signin').click(function() {
  $('.modal').fadeIn('.signin');
});

// 2. When the user clicks the `.close` button, `display` (or fade out) out the `.modal` window

$('.close').click(function() {
  $('.modal').fadeOut('.close');
});

// 3. When the user clicks the `.submit` button, add an `.error` class to both `<input>` elements

$('button.submit').click(function() {
  $('.getstarted input').addClass("error");
})

// 4. When the user puts their cursor in one of the input fields, remove the
// `.error` class from both input elements

$('.getstarted input').focus(function() {
  $(this).removeClass("error");
});
