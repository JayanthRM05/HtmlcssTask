document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the Blue element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the Blue element!");
  }, true);

  var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("How Dare You!");
}

function someOtherFunction() {
  alert ("ARE YOU FOR REAL!!! ");
}

var y = document.getElementById("myDiv1");
y.addEventListener("mouseover",onMe)

function onMe(){
    document.getElementById("myP1").innerHTML += "you are in my Teritory!!  <br>";
}
