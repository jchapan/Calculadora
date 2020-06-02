var contaClick=0
var Total=0
var Numero1=0
var Numero2=0
var Operacion=0
var seguir
var z
var y
var o

function addNum(x){
        if(Operacion==0){
                 Numero1 = `${Numero1}${x}`
                 console.log(Numero1)
                 z=parseInt(Numero1)
                 var txt = document.getElementById('texto');
                txt.innerHTML = z;
        } else if(Operacion>0){
                 Numero2 =`${Numero2}${x}`
                 console.log(Numero2)
                 y=parseInt(Numero2)
                 var txt = document.getElementById('texto');
                 txt.innerHTML =`${z}${o}${y}`
           } 
 
        }                          


function suma(){
        Operacion=1
        o="+"
        var txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function resta(){
        Operacion=2
        o="-"
        var txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function multiplicacion(){
        Operacion=3
        o="x"
        var txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function division(){
        Operacion=4
        o="/"
        var txt = document.getElementById('texto');
        txt.innerHTML =`${z}${o}`
}
function borrar(){
        contaClick=0
        Total=0
        Numero1=0
        Numero2=0 
        Operacion=0
        var txt = document.getElementById('texto');
        txt.innerHTML = Total;
}
function resultado(){
        if(Operacion==1){
                Total = z + y
                console.log(Total);
                var txt = document.getElementById('texto');
                txt.innerHTML = Total; 
                }else if(Operacion==2){
                        Total = z - y
                        console.log(Total);
                        var txt = document.getElementById('texto');
                        txt.innerHTML = Total;  
                        }else if(Operacion==3){
                                Total = z * y
                                console.log(Total);
                                var txt = document.getElementById('texto');
                                txt.innerHTML = Total; 
                                }else if(Operacion==4){
                                        Total = z / y
                                        console.log(Total);
                                        var txt = document.getElementById('texto');
                                        txt.innerHTML = Total; 
                                        }
}

