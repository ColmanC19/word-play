$(document).ready(function(){
  $("form").submit(function(event){


    var sentence = $("input#input").val();
    var word2 = sentence.split(' ');
    console.log(word2[1]);
    console.log(sentence)
    var sentence2 = sentence.split(' ');

    console.log(sentence2)
    event.preventDefault()
  });
});
