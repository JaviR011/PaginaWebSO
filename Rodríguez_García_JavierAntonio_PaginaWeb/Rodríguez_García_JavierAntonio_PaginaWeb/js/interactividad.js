var menu = document.getElementById('menu');
menu.style.textAlign="center";
var paginas="sobremi.html";
var bot1=1;
var im=document.getElementById('imagenopciones');
function desplasar1(){
    bot1--;
    if(bot1==0){
        bot1=4;
    }
    opcion(bot1);
}
function desplasar2(){
    bot1++;
    if(bot1==5){
        bot1=1;
    }
    opcion(bot1);
}
function opcion(num){
    var num = num;

    var opacidad=1;
    switch (num){
case 1:
    desvanecerImagen("img/sobremi.gif");
        paginas="sobremi.html";
break;
case 2:
    desvanecerImagen("img/hobbies.gif");
        paginas="misHobbies.html";


break;
case 3:
    desvanecerImagen("img/mishabilidades.gif");
        paginas="misHabilidades.html";

break;
case 4:
    desvanecerImagen("img/Misestudios.gif");
        paginas="misEstudios.html";
break;

default: 
break;
    }
}
function desvanecerImagen(ruta) {
    var ruta=ruta;
    var opacidad = 1;
    var intervalo = setInterval(function() {
      if (opacidad <= 0) {
        clearInterval(intervalo); 
        im.src=ruta;   
        aparecerimagen();
      }
      im.style.opacity = opacidad;
      im.style.filter = "alpha(opacity=" + (opacidad * 100) + ")"; 
      opacidad -= 0.1; 
    }, 75); 
  }
  function aparecerimagen() {

    var opacidad = 0; 
    var intervalo = setInterval(function() {
      if (opacidad >= 1) {
        clearInterval(intervalo); 
      }
      im.style.opacity = opacidad;
      im.style.filter = "alpha(opacity=" + (opacidad * 100) + ")"; 
      opacidad += 0.1;
    }, 75); 
  }

  function newPage(){
    window.location.href = paginas;
  }
  function inicio(){
    window.location.href="index.html";
  }
