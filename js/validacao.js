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