// Soma: Arrow function
const Soma = (num1, num2) => num1 + num2

// Subtrai: Arrow function
const Subitrair = (num1, num2) => num1 - num2

// Multiplica: Arrow function
const Multiplicar = (num1, num2) => num1 * num2

// Divide: Function expression
const Divisão = (num1, num2) => num1/ num2

// MostraResultado: Function expression
const MostraResultado = (num1,num2) => {
    console.log (`Soma entre ${num1} e ${num2}`, Soma(num1,num2))
    console.log (`Divisão entre ${num1} e ${num2}`, Subitrair(num1,num2))
    console.log (`Multiplicação entre ${num1} e ${num2}`, Multiplicar(num1,num2))
    console.log (`Divisão entre ${num1} e ${num2}`, Divisão =(num1,num2))

}

// Exemplo de uso
MostraResultado(10,2);