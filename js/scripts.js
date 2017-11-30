$(document).ready(function() {
  $("form#quiz").submit(function() {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var genre = $("select#genre").val();

    if (age >= 30 && 'male' && 'comedy') {
      $ ('#charlieDay').show();
    }
    else if (age < 30 && 'male' && 'comedy') {
      $ ('#michaelCera').show();
    }
    else if (age >= 30 && 'female' && 'comedy') {
      $ ('#amyPoehler').show();
    }
    else if (age < 30 && 'female' && 'comedy') {
      $ ('#someone').show();
    }
    else if (age >= 30 && 'male' && 'action') {
      $ ('#keanuReeves').show();
    }
    else if (age < 30 && 'male' && 'action') {
      $ ('#someone1').show();
    }
    else if (age >= 30 && 'female' && 'action') {
      $ ('#someone2').show();
    }
    else {
      $ ('#someone3').show();
    }
    event.preventDefault();
  });
});
