function validacao_peso(peso) {
    if (peso >= 1000 || peso <= 0) {
        return false;
    }
    return true;
}

function validacao_altura(altura) {
    if (altura >= 3.0 || altura <= 0) {
        return false;
    }
    return true;
}

function validacao_nome(nome) {    
    if (nome.length <= 0) {
        return false;
    }
    return true;
}

function listaDeErros(paciente) {
    let erros = [];
    if(!validacao_nome(paciente.nome)) {
        erros.push("Nome inválido");
    }
    if(!validacao_peso(paciente.peso)) {
        erros.push("Peso inválido");
    }
    if(!validacao_altura(paciente.altura)) {
        erros.push("Altura inválida");
    }
    return erros;
}