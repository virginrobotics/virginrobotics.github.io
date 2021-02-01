 var x = 0;
 var t = 0;
 var y = 0;
 var checkrecord = 15;

 $(document).ready(function() {
     animateDiv();

 });

 function makeNewPosition($container) {

     // Get viewport dimensions (remove the dimension of the div)
     $container = ($container || $(window))
     var h = $container.height() - 70;
     var w = $container.width() - 85;

     var nh = Math.floor(Math.random() * h);
     var nw = Math.floor(Math.random() * w);

     return [nh, nw];

 }

 function animateDiv() {
     var $target = $('.a');
     var newq = makeNewPosition($target.parent());
     var oldq = $target.offset();
     var speed = calcSpeed([oldq.top, oldq.left], newq);

     $('.a').animate({
         top: newq[0],
         left: newq[1]
     }, speed, function() {
         animateDiv();
     });

 };

 function calcSpeed(prev, next) {

     var g = Math.abs(prev[1] - next[1]);
     var f = Math.abs(prev[0] - next[0]);

     var greatest = g > f ? g : f;

     var speedModifier = 0.4;

     var speed = Math.ceil(greatest / speedModifier);

     return speed;

 }


 function startTimer() {
       //document.getElementById("startbutton").removeAttribute("onClick");
       document.getElementById("coolwhip").removeAttribute("onClick");
       console.log('removed');
       //document.getElementById("startbutton").setAttribute("onClick", "start();");
       document.getElementById("coolwhip").setAttribute("onClick", "start();");
       console.log('added');
       setTimeout(stop, 5000);

 }
function start() {
     y = x + 1;
     document.getElementById('numvar').innerHTML = y;


     return x = y;
     return y;



}

function stop() {
   //document.getElementById('startbutton').disabled = true;
   document.getElementById("coolwhip").removeAttribute("onClick");

   alert("timesupBitcheeees!!!!");

}

function reset() {
  //document.getElementById('startbutton').disabled = false;
  //document.getElementById('startbutton').removeAttribute("onClick");
  console.log('onclickremoved');
//  document.getElementById('startbutton').setAttribute("onClick", "startTimer();");
  document.getElementById("coolwhip").setAttribute("onClick", "startTimer();");

  document.getElementById('numvar').innerHTML = 0;


  return x = 0;

}
