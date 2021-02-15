var valueText =document.querySelector('.valuetext');
var totalText =document.querySelector('.totaltext');
var helpId = document.querySelector('#helpId');

function calculate(){
    var Value1 =Number(document.getElementById("value").value);
    var range = Number(document.getElementById("range").value) ;


     var x= Math.round(Value1+(Value1/100)*range);

   // console.log(Value1)
    valueText.innerHTML = Value1;
    totalText.innerHTML =x;
    helpId.innerHTML = range + '%';
}


