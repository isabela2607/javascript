const cores = ['preto', 'Branco'];
console.log(cores);
console.log(cores[0]);
console.log(cores[1]);
console.log ('Quantidade de elementos =', cores.length);
console.log (cores.indexOf('preto'));
console.log (cores.indexOf('Branco'));
cores.push('vermelho');//Adiciona um item 
console.log (cores.indexOf('Vermelho'));/*Pra mostrar que não existe coloca o -1*/ 
console.log(cores);
console.log(cores.length);
console.log (cores.indexOf('Vermelho'));
cores.push('Azul');
console.log (cores.indexOf('Azul'));
console.log(cores);
cores.shift();//exclui um item, como não decharei elimina o zero
console.log(cores);
cores.unshift('Preto');//adiciona um item em primeiro lugar
console.log(cores);


cores.pop();//elimina o ultimo item
console.log(cores);

function removeCor(nomeDaCor){
    const posicaoDAcor = cores.indexOf(nomeDaCor);
  if(posicaoDAcor >=0 ){
    cores.splice(posicaoDAcor, 1)
  }
    console.log(cores);

}

removeCor('Branco');
removeCor('vermelho');
removeCor('vermelho');