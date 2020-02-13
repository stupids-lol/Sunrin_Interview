$(document).ready(function() {
  $('label[for=choice-1]').click(function() {
    $('#club').text("LAYER7");
    $('body').addClass('choice-1').removeClass('choice-2 choice-3 choice-4 choice-5');
  });
    
  $('label[for=choice-2]').click(function() {
    $('body').addClass('choice-2').removeClass('choice-1 choice-3 choice-4 choice-5');
  });
  
  $('label[for=choice-3]').click(function() {
    $('body').addClass('choice-3').removeClass('choice-1 choice-2 choice-4 choice-5');
  });

  $('label[for=choice-4]').click(function() {
    $('body').addClass('choice-4').removeClass('choice-1 choice-2 choice-3 choice-5');
  });

  $('label[for=choice-5]').click(function() {
    $('body').addClass('choice-5').removeClass('choice-1 choice-2 choice-3 choice-4');
  });
});