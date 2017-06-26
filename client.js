console.log("javascript sourced");


$('document').ready(function () {
  console.log('document ready');
var counter = 0;
$('.wrapper').on('click', "#swap", "#newDiv", function () {
  $(this).parent().removeClass("color").addClass("yellow");
});


$('.wrapper').on('click', "#delete", "#newDiv", function () {
  $(this).parent().empty();
});

$('#genbutton').on('click', function () {
  counter += 1;

  $('.wrapper').append('<div id="newDiv" class="color"><p>'+ counter + '</p></div>');
  var $div = $('.wrapper').children().last();
  $div.append('<button id="swap">Swap</button>');
  $div.append('<button id="delete">Delete</button>');
  console.log('button clicked');





}); //end of genbutton on click function



}); //end of document ready function
