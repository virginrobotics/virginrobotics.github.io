 var x = 0;
 var t = 0;
 var y = 0;
 var checkrecord = 15;
 function startTimer() {
       document.getElementById("startbutton").removeAttribute("onClick");
       console.log('removed');
       document.getElementById("startbutton").setAttribute("onClick", "start();");
       console.log('added');
       setTimeout(stop, 5000);

 }
function start() {
     y = x + 1;
     document.getElementById('numvar').innerHTML = y;
     document.getElementById('coolwhip').src = "images/cucumber.jpg";

     return x = y;
     return y;



}

function stop() {
   document.getElementById('startbutton').disabled = true;
   alert("timesupBitcheeees!!!!");

}

function reset() {
  document.getElementById('startbutton').disabled = false;
  document.getElementById('startbutton').removeAttribute("onClick");
  console.log('onclickremoved');
  document.getElementById('startbutton').setAttribute("onClick", "startTimer();");

  document.getElementById('numvar').innerHTML = 0;
  document.getElementById('coolwhip').src = "images/cucumber.jpg";
  console.log("triggered");

  return x = 0;

}
