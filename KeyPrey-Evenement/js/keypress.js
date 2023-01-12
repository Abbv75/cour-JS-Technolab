let max = 180;

$("#message").keydown(function (e) {
  $("#lastKey").text("le code asii de la derniere lettre est " + e.which);

  if(e.which==8){
    if(max<180){
      max++;
    }
  }
  else if(max>0){
    max--;
  }
  else if(max==0){
    $("#message").val($("#message").val().substr(0,180));
  }
  
  $('#charactersLeft').text(max+" caractères");


});
