const todoMundoVe = 'Todo mundo vê esta variavel de escorpo global'

function executaEscorpoGlobal() {
    console.log(todoMundoVe)
}

function executaEscorpoLocal(){
    const visivelEmEscorpoLocal = 'Só quem está dentro de bloco da função vê'
    console.log(visivelEmEscorpoLocal)

}

executaEscorpoGlobal();

executaEscorpoLocal();