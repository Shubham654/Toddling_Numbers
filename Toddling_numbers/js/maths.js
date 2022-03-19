var answer;
var score = 0;
// var backgroundImages = [];
var signs = ["+", "/", "-", "x"]

function numberAPI(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function nextQuestion() {


  const sign = signs[Math.floor(Math.random() * signs.length)];
  document.getElementById('sign').innerHTML = sign;

  function randomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (sign == "+") {
    n1_num = 6;
    n2_num = 5;
  } else if (sign == "-") {
    n1_num = 9;
    n2_num = 5;

  } else if (sign == "x") {
    n1_num = 4;
    n2_num = 4;
  } else if (sign == "/") {


    n1_num = 9;
    n2_num = 5;
  } else {

  }



  n1 = Math.floor(Math.random() * n1_num);
  document.getElementById('n1').innerHTML = n1;

  n2 = Math.floor(Math.random() * n2_num);
  document.getElementById('n2').innerHTML = n2;



  if (sign == "+") {
    answer = n1 + n2;
  } else if (sign == "-") {
    if (n2>n1){
      t=n2;
      n2=n1;
      n1=t;
      document.getElementById('n1').innerHTML = n1;

      document.getElementById('n2').innerHTML = n2;
    }
    answer = n1 - n2;

  } else if (sign == "x") {
    answer = n1 * n2;
  } else if (sign == "/") {
    k = randomNumber(1,2)
    if (k == 1) {
      d1 = [0, 2, 4, 6, 8]
      d2 = [0, 1, 2]
      a = d1[randomNumber(1, 4)];
      b = d2[randomNumber(1, 2)];
    } else {
      d1 = [0,3, 6, 9]
      d2 = [0,1, 3]
      a = d1[randomNumber(1, 3)];
      b = d2[randomNumber(1, 2)];
    }

      document.getElementById('n1').innerHTML = a;

      document.getElementById('n2').innerHTML = b;
      answer = a / b;
      console.log(a);
      console.log(b);

  }
}

function checkAnswer() {

  const prediction = predictImage();
  let pred = prediction.toString();
  let api = "http://numbersapi.com/";
  let apiURL = api.concat(pred);
  const api_fact = numberAPI(apiURL);
  console.log(`Api_string: ${api_fact}`);
  console.log(`Answer: ${answer}, prediction: ${prediction}`);

  if (prediction == answer) {
    score.toExponential()
    score++;
    console.log(`Correct! Score: ${score}`);
    score.toString();
    document.getElementById('astronaut_talk').innerText = "Correct! Score: "+score+"\n"+"\n"+api_fact;


    if (score <= 6) {

    } else {
      alert('Well done!');
      score = 0;

    }
  } else {
    if (score != 0) {

    }

    score.toString();
    document.getElementById('astronaut_talk').innerText ="\n\n\n\n"+"Wrong! Score: "+score;

    alert('Oops! Wrong answer. ');
    setTimeout(function() {

    }, 1000);
  }

}
