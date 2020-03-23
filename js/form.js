var buttonAdicionarPaciente = document.querySelector('#adicionar-paciente');
buttonAdicionarPaciente.addEventListener('click', function(e){
    event.preventDefault();

    let form_insert = document.querySelector('#form_insert');

    let paciente = obterPacienteForm(form_insert);

    let tempTr = document.createElement('tr');
    tempTr.classList.add('paciente');

    let tempTdNome = document.createElement('td');
    let tempTdPeso = document.createElement('td');
    let tempTdAltura = document.createElement('td');
    let tempTdGordura = document.createElement('td');
    let tempTdImc = document.createElement('td');

    tempTdNome.classList.add('info-nome');
    tempTdPeso.classList.add('info-peso');
    tempTdAltura.classList.add('info-altura');
    tempTdGordura.classList.add('info-gordura');
    tempTdImc.classList.add('info-imc');

    tempTdNome.textContent = paciente.nome;
    tempTdPeso.textContent = paciente.peso;
    tempTdAltura.textContent = paciente.altura;
    tempTdGordura.textContent = paciente.gordura;    

    tempTr.appendChild(tempTdNome);
    tempTr.appendChild(tempTdPeso);
    tempTr.appendChild(tempTdAltura);
    tempTr.appendChild(tempTdGordura);
    tempTr.appendChild(tempTdImc);
    
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(tempTr);
    
    verificacao();
});

function obterPacienteForm(form) {
    let paciente = {
        nome: form.querySelector('#nome').value,
        peso: form.querySelector('#peso').value,
        altura: form.querySelector('#altura').value,
        gordura: form.querySelector('#gordura').value,
        imc: ''
    }
    return paciente;
}