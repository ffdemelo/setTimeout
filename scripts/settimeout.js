var numero = document.getElementById('numero');
var aletorio = document.getElementById('aleatorio');

function getRandInt(begin, end){
  if (begin === 0) {
      alert("Erro!");
      return;
  }

  return Math.floor(Math.random() * (end - begin + 1)) + begin;
}

/* function mudarNumero(num){
    numero.innerHTML = num;
}

var i = 1;
setTimeout(() => {
    numero.innerHTML = i++;
  
    setTimeout(() => {
        numero.innerHTML = i++;
  
      setTimeout(() => {
        numero.innerHTML = i++;
  
        setTimeout(() => {
            numero.innerHTML = i++;
  
          setTimeout(() => {
            numero.innerHTML = i++;
  
            setTimeout(() => {
                numero.innerHTML = i++;
              setTimeout(() => {
                  numero.innerHTML = i++;
            }, 800)
          }, 800)
        }, 800)
      }, 800)
    }, 800)
  }, 800)
}, 800) */

var counter = 1;
function myTimer() {
  var timer = setTimeout( function() {
    numero.innerHTML = counter++;
    aletorio.innerHTML = getRandInt(1,40);
    if( counter <= 40 ) {
      myTimer();
    }
  }, 1000 );
}
  
myTimer();