















//ANIMAÇÃO DE NUMEROS

const numeros = document.querySelectorAll('span');

numeros.forEach((numero) => {
  const total = +numero.innerText;
  const incremento = Math.floor(total / 100);
  let start = 0;
  const timer = setInterval(() => {
    start = start + incremento;
    numero.innerText = start;
    if(start > total) {
      numero.innerText = total;
      clearInterval(timer);
    }
  }, 25 * Math.random());
});

//--------------------------------------------------------------