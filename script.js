// let prev1=document.getElementsByClassName("prev1")
// function nextAndPrev(){
//     prev1.classList.add("")
// }
$(".start-quiz-btn").click(function(){
    $(".section-home").hide();
    $(".when-you-wish-all").show();
  });
  $(".prev2").click(function(){
    $(".when-you-wish-all").hide();
    $(".section-home").show();
  });
  $(".next2").click(function(){
    $(".when-you-wish-all").hide();
    $(".spend-in-bathroom").show();
  });
  $(".prev3").click(function(){
    $(".spend-in-bathroom").hide();
    $(".when-you-wish-all").show();
  });
  $(".next3").click(function(){
    $(".spend-in-bathroom").hide();
    $(".are-you-more").show();
  });
  $(".prev4").click(function(){
    $(".are-you-more").hide();
    $(".spend-in-bathroom").show();
  });
  $(".next4").click(function(){
    $(".are-you-more").hide();
    $(".are-you-more2").show();
  });
  $(".prev5").click(function(){
    $(".are-you-more2").hide();
    $(".are-you-more").show();
  });


