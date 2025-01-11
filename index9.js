function eDiaOuEDeNoite (hora){
    let periodo = '';
    if(hora <=18)
        periodo ='É de dia';
    else
        periodo = 'É de noite';
    return periodo;
}

console.log (eDiaOuEDeNoite());
console.log (eDiaOuEDeNoite(4));
console.log (eDiaOuEDeNoite('dia'));
console.log ('---------------');

function EMaiorDeIdade (idade){
    if (idade <18)
        console.log ('menor de idade')

    else 
        console.log ('è maior de idade')
}
 
EMaiorDeIdade(9)

