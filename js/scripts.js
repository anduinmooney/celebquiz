$(document).ready(function() {
  $("form#quiz").submit(function() {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var genre = $("select#genre").val();

    if (age >= 30 && gender==='male' && genre==='comedy') {
      $ ('#charlieDay').show();
      $ ('#michaelCera').hide();
      $ ('#amyPoehler').hide();
      $ ('#someone').hide();
      $ ('#keanuReeves').hide();
      $ ('#someone1').hide();
      $ ('#someone2').hide();
      $ ('#someone3').hide();
    }
    else if (age < 30 && gender==='male' && genre==='comedy') {
      $ ('#michaelCera').show();
      $ ('#amyPoehler').hide();
      $ ('#someone').hide();
      $ ('#keanuReeves').hide();
      $ ('#someone1').hide();
      $ ('#someone2').hide();
      $ ('#someone3').hide();
      $ ('#charlieDay').hide();
    }
    else if (age >= 30 && gender==='female' && genre==="comedy") {
      $ ('#amyPoehler').show();
      $ ('#someone').hide();
      $ ('#keanuReeves').hide();
      $ ('#someone1').hide();
      $ ('#someone2').hide();
      $ ('#someone3').hide();
      $ ('#charlieDay').hide();
      $ ('#michaelCera').hide();
    }
    else if (age < 30 && gender==='female' && genre==='comedy') {
      $ ('#someone').show();
      $ ('#keanuReeves').hide();
      $ ('#someone1').hide();
      $ ('#someone2').hide();
      $ ('#someone3').hide();
      $ ('#charlieDay').hide();
      $ ('#michaelCera').hide();
      $ ('#amyPoehler').hide();
    }
    else if (age >= 30 && gender==='male' && genre==='action') {
      $ ('#keanuReeves').show();
      $ ('#someone1').hide();
      $ ('#someone2').hide();
      $ ('#someone3').hide();
      $ ('#charlieDay').hide();
      $ ('#michaelCera').hide();
      $ ('#amyPoehler').hide();
      $ ('#someone').hide();
    }
    else if (age < 30 && gender==='male' && genre==='action') {
      $ ('#someone1').show();
      $ ('#someone2').hide();
      $ ('#someone3').hide();
      $ ('#charlieDay').hide();
      $ ('#michaelCera').hide();
      $ ('#amyPoehler').hide();
      $ ('#someone').hide();
      $ ('#keanuReeves').hide();
    }
    else if (age >= 30 && gender==='female' && genre==='action') {
      $ ('#someone2').show();
      $ ('#someone3').hide();
      $ ('#charlieDay').hide();
      $ ('#michaelCera').hide();
      $ ('#amyPoehler').hide();
      $ ('#someone').hide();
      $ ('#keanuReeves').hide();
      $ ('#someone1').hide();
    }
    else if (age < 30 && gender==='female' && genre==='action'){
      $ ('#someone3').show();
      $ ('#charlieDay').hide();
      $ ('#michaelCera').hide();
      $ ('#amyPoehler').hide();
      $ ('#someone').hide();
      $ ('#keanuReeves').hide();
      $ ('#someone1').hide();
      $ ('#someone2').hide();
    } else {
      alert('Please enter your age.');
    }
    event.preventDefault();
  });
});
