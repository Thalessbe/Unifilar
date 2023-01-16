

let demandaContratada = 30;

let valorDemanda=22.53 ;

let pgDemanda=valorDemanda*demandaContratada;
let cip= 300
//-------------------------------------------//
// TARIFAS ----------------------------------//


let tfpTE =0.59066;
let tfTUSD =1.92210;
let tffpTE =0.36668;
let tffpTUSD =0.10149;
let icms = 0.2;
let fioB=0.15;

function  ipcaAplic(value) { 

    var aux=[];
    for(var i=0;i <=25 ; i++) 
{   

    value=(1.1*value);

    aux[i] = value

 }
   return aux;
            

 
}





let tfpTEyear=ipcaAplic(tfpTE)

let tfTUSDyear=ipcaAplic(tfTUSD)

let tffpTEyear=ipcaAplic(tffpTE)

let tffpTUSDyear=ipcaAplic(tffpTUSD)


let fioByear=[];












let  pTE = (1,61**tfpTE) - (1184.96*tfpTE)

let pTUSD = (736*tfTUSD) - (736*tfTUSD*(1-icms)) - ( 1.47449 * 736 * fioB*0.6) ;

let fpTE = (7384*tffpTE) - (7384*tffpTE);

let fpTUSD = (7384*tffpTUSD) - (7384*tffpTUSD*((1-icms)*0.6));

let conta=fpTUSD + fpTE + pTUSD + pTE + pgDemanda + cip

console.log(conta)


document.getElementById("teste").innerHTML= `Estou testando ${conta}`


