    function chamaPrimeiro(){
        console.log('Chama essa primeiro')
    }

    function chamaDepois(){
        chamaPrimeiro
    }

    chamaDepois();

    function recebePrimeira(primeraFuncao){
        primeraFuncao()
    }

    recebePrimeira(chamaPrimeiro)