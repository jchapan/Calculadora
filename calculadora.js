var contaClick=0
var Total=0
var Numero1=0
var Numero2=0
var Operacion=0
var seguir
var z
var y
var o
var f
var txt

function addNum(x){
        if(Operacion==0){
                 Numero1 = `${Numero1}${x}`
                 console.log(Numero1)
                 z=parseInt(Numero1)
                 txt = document.getElementById('texto');
                txt.innerHTML = z;
        } else if(Operacion>0){
                 Numero2 =`${Numero2}${x}`
                 console.log(Numero2)
                 y=parseInt(Numero2)
                 txt = document.getElementById('texto');
                 txt.innerHTML =`${z}${o}${y}`
           } 
 
        }                          


function suma(){
        Operacion=1
        o="+"
        txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function resta(){
        Operacion=2
        o="-"
        txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function multiplicacion(){
        Operacion=3
        o="x"
        txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function division(){
        Operacion=4
        o="/"
        txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function borrar(){
        contaClick=0
        Total=0
        Numero1=0
        Numero2=0 
        Operacion=0
        txt = document.getElementById('texto');
        txt.innerHTML = Total;
}
function resultado(){
        if(Operacion==1){
                Total = z + y
                f = new Intl.NumberFormat("en-US").format(Total)
                console.log(Total);
                txt = document.getElementById('texto');
                txt.innerHTML = f; 
                }else if(Operacion==2){
                        Total = z - y
                        f = new Intl.NumberFormat("en-US").format(Total)
                        console.log(Total);
                        txt = document.getElementById('texto');
                        txt.innerHTML = f;  
                        }else if(Operacion==3){
                                Total = z * y
                                f = new Intl.NumberFormat("en-US").format(Total)
                                console.log(Total);
                                txt = document.getElementById('texto');
                                txt.innerHTML = f; 
                                }else if(Operacion==4){
                                        Total = z / y
                                        f = new Intl.NumberFormat("en-US").format(Total)
                                        console.log(Total);
                                        txt = document.getElementById('texto');
                                        txt.innerHTML = f; 
                                        }
}

