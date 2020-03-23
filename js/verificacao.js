function verificacao() {
    let trs = document.querySelectorAll('.paciente');

    trs.forEach(function (tr) {

        let paciente = obterPacienteTr(tr);

        if (!validacao_peso(paciente.peso)) {
            paciente.imc = 'Peso inválido';
            tr.classList.add('paciente-invalido')
        } else if (!validacao_altura(paciente.altura)) {
            paciente.imc = 'Altura inválida';
            tr.classList.add('paciente-invalido')
        } else {
            paciente.imc = calculaImc(paciente.peso, paciente.altura);
        }

        salvarPacienteTr(paciente, tr);
        
    });
}

function obterPacienteTr(tr) {
    let paciente = {
        nome: tr.querySelector('.info-nome').textContent,
        peso: tr.querySelector('.info-peso').textContent,
        altura: tr.querySelector('.info-altura').textContent,
        gordura: tr.querySelector('.info-gordura').textContent,
        imc: ''
    }
    return paciente;
}

function salvarPacienteTr(paciente, tr) {
    tr.querySelector('.info-nome').textContent = paciente.nome;
    tr.querySelector('.info-peso').textContent = paciente.peso;
    tr.querySelector('.info-altura').textContent = paciente.altura;
    tr.querySelector('.info-gordura').textContent = paciente.gordura;
    tr.querySelector('.info-imc').textContent = paciente.imc;
}