// let prev1=document.getElementsByClassName("prev1")
// function nextAndPrev(){
//     prev1.classList.add("")
// }
$(".start-quiz-btn").click(function(){
    $(".section-home").hide();
    $(".when-you-wish-all").show();
  });
  $(".prev1").click(function(){
    $(".when-you-wish-all").hide();
    $(".section-home").show();
  });
