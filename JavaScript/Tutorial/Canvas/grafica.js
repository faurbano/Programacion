var d = document.getElementById("grafica");
var lienzo = d.getContext("2d");
var lineas = 30;
var i = 0;
var xi,yi,xf,yf;

while (i < lineas)
{
  xi = (10 * i);
  yi = (10 * i);
  xf = (10 * (i + 1));
  yf = (10 * (i + 1));
  dibujarLinea("blue",0,yi,xf,300)
  dibujarLinea("blue",xi,0,300,yf)
  i++;
}

dibujarLinea("grey",1,1,1,300);
dibujarLinea("grey",1,1,299,1);
dibujarLinea("grey",299,1,299,299);
dibujarLinea("grey",299,299,1,299);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
