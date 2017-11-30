$(document).ready(function(){
$("#triviaForm").hide(); //hides trviaForm div until called upon

$("#scoreCard").hide(); //hides scoreCard div until called upon

$(".start").click(function (){
    $("#triviaForm").fadeToggle(); //when button is clicked, triviaForm div is shown

    $(".start").hide(); //hide start button

    var counter = 120; //120 seconds
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unAnswered = 9; //9 questions
    var interval = setInterval(function(){

        

       $("#counter").text(counter + "s"); //putting counter on page
        counter--; //making the counter go down
       if (counter == 0){ // if counter runs out
        $("#scoreCard").fadeToggle();   //show scoreCard div
        unAnswered = 9-Number($("input:radio.answer:checked").length); //get all the answers that are checked minus 9
        $("input:radio.answer:checked").each(function(){ //check to  see which one is correct or wrong of the answered questions
           var radioButtonName = $(this).attr("name"); 
           switch(radioButtonName){
               case "question1" :
               if ($(this).val() == "sirIsaacNewtonTrue"){ //if correct answer, increase correct answer
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  //otherwise, inscrese wrong answer
                }
               break;
               case "question2" :
               if ($(this).val() == "100True"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break;
               case "question3" :
               if ($(this).val() == "30True"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break; 
               case "question4" :
               if ($(this).val() == "26True"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break; 
               case "question5" :
               if ($(this).val() == "ancientEgyptiansTrue"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break; 
               case "question6" :
               if ($(this).val() == "MargaretTrue"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break; 
               case "question7" :
               if ($(this).val() == "GustavTrue"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break; 
               case "question8" :
               if ($(this).val() == "bezoarTrue"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break; 
               case "question9" :
               if ($(this).val() == "clowderTrue"){
                   correctAnswer++;
               }
                else{
                  wrongAnswer++;  
                }
               break;   
           }
        });
         $("#correctAnswer").text(correctAnswer); //displays results on scoreCard div
         $("#wrongAnswer").text(wrongAnswer);
         $("#unAnswered").text(unAnswered);   
         $("#triviaForm").fadeToggle();

       }
    }, 1000);
});





});

//.click start button
//hide button
//reveal trivia
//have countdown
//when countdown reaches 0, reveal right answers, wrong answers, and unanswered