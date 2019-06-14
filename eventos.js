var teclas = {UP:38, DOWN:40, LEFT:37, RIGHT:39};
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("white",x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();  
}




function dibujarTeclado(evento)
{ 
  var colorcito = "white";
  var movimiento = 5;

 switch(evento.keyCode)
 {
     case teclas.UP:
       dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
       y = y - movimiento;
     break;
     case teclas.DOWN:
     dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
     y = y + movimiento;
     break;
     case teclas.LEFT:
     dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
     x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
    x = x + movimiento;
    break;
 }
}



document.getElementById("limpiar").addEventListener("mouseup", limpiarCanva);//boton con evento enlazado
function limpiarCanva(evento)
{
  papel.clearRect(0,0, cuadrito.width, cuadrito.height);
  console.log(evento);

}








var x;                      
var y;                     
document.addEventListener("mousedown", presionarMouse); 
document.addEventListener("mouseup",soltarMouse);       
document.addEventListener("mousemove",dibujarMouse);    

var estado = false;          
console.log(estado);
console.log(MouseEvent.metaKey);     
var colorLinea = "white";   


function dibujarMouse(evento)
{ 
  if (estado == true) {   
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel
    	);
  }
  x = evento.layerX;
  y = evento.layerY;
}


function presionarMouse(evento)
{
  estado = true;          
  x = evento.layerX;
  y = evento.layerY;
}


function soltarMouse(evento)
{
  estado = false;         
  x = evento.layerX;
  y = evento.layerY;
}