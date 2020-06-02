var contaClick=0
var Total=0
var Numero1=0
var Numero2=0
var Operacion
var seguir

function addNum(x){
        contaClick +=1;
        if(contaClick==1){
                 Numero1 =x
        } else if(contaClick==2){
                 Numero2 =x
                 contaClick=0
        } 
        if(Operacion==1){
        Total = Numero1 + Numero2
        console.log(Total);
        var txt = document.getElementById('texto');
        txt.innerHTML = Total; 
        }else if(Operacion==2){
                Total = Numero1 - Numero2
                console.log(Total);
                var txt = document.getElementById('texto');
                txt.innerHTML = Total;  
                }else if(Operacion==3){
                        Total = Numero1 * Numero2
                        console.log(Total);
                        var txt = document.getElementById('texto');
                        txt.innerHTML = Total; 
                        }else if(Operacion==4){
                                Total = Numero1 / Numero2
                                console.log(Total);
                                var txt = document.getElementById('texto');
                                txt.innerHTML = Total; 
                                } 
                }                          


function suma(){
        Operacion=1
}
function resta(){
        Operacion=2
}
function multiplicacion(){
        Operacion=3
}
function division(){
        Operacion=4
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

