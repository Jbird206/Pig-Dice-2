
player1 = {
  roll: 0,
  grandTotal: 0
};

player2 = {
  roll: 0,
  grandTotal: 0
};

$(document).ready(function(){
  
  function sumOne(){
    return Math.floor(Math.random()*(7 - 1) + 1)
  };
 

  $("form#playerFormOne").submit(function(event){
    event.preventDefault();
    var roll1 = sumOne();
    

    console.log(roll1)
    $('#player1roll').text(roll1);
    
   if(roll1 != 1){
    player1.roll += roll1;
    $("#showRoundScore").text(player1.roll)
   } else { 
    player1.roll = 0;  
    player1.grandTotal += player1.roll; 
    alert("you rolled a one pass the die");
    $('#placeholder2').text(player1.grandTotal);
    $(".loss2").show();
    $(".loss1").hide();
  }

  });
  
  $("form#playerFormTwo").submit(function(event){ //hold button form
    event.preventDefault();
    

    player1.grandTotal += player1.roll;
    $('#placeholder2').text(player1.grandTotal);
    
    player1.roll = 0  //resests dice
    $(".loss2").show();
    $(".loss1").hide();
    if (player1.grandTotal >= 100){
      alert("You Won!");
          }
    console.log(player1)
  });

  
  //player 2 ////////////////////////////
  // $(document).ready(function(){

 

  $("form#player2FormOne").submit(function(event){
    event.preventDefault();
    var roll2 = sumOne();
    

    console.log(roll2)
    
    $('#player2roll').text(roll2);
    if(roll2 != 1){
      player2.roll += roll2;
      $("#showRoundScore2").text(player2.roll);
     } else { 
       player2.roll = 0;  
      player2.grandTotal += player2.roll;
      alert("you rolled a one pass the die");
      $('#placeholder3').text(player2.grandTotal);
      $(".loss2").hide();
      $(".loss1").show();
    }
   
   
  });
  
  $("form#player2FormTwo").submit(function(event){
    event.preventDefault();
    

    player2.grandTotal += player2.roll;
    $('#placeholder3').text(player2.grandTotal);
    player2.roll = 0
    $(".loss2").hide();
    $(".loss1").show();
    console.log(player2)
    console.log(player1.grandTotal);
    if (player2.grandTotal >= 100){
  alert("You Won!");
      }
  });


});


