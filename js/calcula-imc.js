function calculaImc(peso, altura) {
    var imc = 0;

    imc = (peso/(altura * altura)).toFixed(2);

    return imc;
}