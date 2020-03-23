function verificacao() {
    let trs = document.querySelectorAll('.paciente');

    trs.forEach(function (tr) {

        let imc = tr.querySelector('.info-imc');
        let peso = tr.querySelector('.info-peso');
        let altura = tr.querySelector('.info-altura');

        if (!validacao_peso(peso.textContent)) {
            imc.textContent = 'Peso inválido';
            tr.classList.add('paciente-invalido')
        } else if (!validacao_altura(altura.textContent)) {
            imc.textContent = 'Altura inválida';
            tr.classList.add('paciente-invalido')
        } else {
            imc.textContent = calculaImc(peso.textContent, altura.textContent);
        }
    });
}