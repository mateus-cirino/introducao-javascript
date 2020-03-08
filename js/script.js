validacao();

function validacao() {
    let trs = document.querySelectorAll('.paciente');
    trs.forEach(function(tr){
        let imc = tr.querySelector('.info-imc');
        let massa = tr.querySelector('.info-peso');
        let altura = tr.querySelector('.info-altura');
        if(massa.textContent >= 1000 || massa.textContent <= 0) {
            imc.textContent = 'Peso inválido';
            tr.classList.add('paciente-invalido')
        }else if(altura.textContent >= 3.0 || altura.textContent <= 0) {
            imc.textContent = 'Altura inválida';
            tr.classList.add('paciente-invalido')
        }else{
            imc.textContent = (massa.textContent/(altura.textContent * altura.textContent)).toFixed(2);
        }
    });
}


var buttonAdicionarPaciente = document.querySelector('#adicionar-paciente');
buttonAdicionarPaciente.addEventListener('click', function(e){
    event.preventDefault();

    let form_insert = document.querySelector('#form_insert');

    let nome = form_insert.querySelector('#nome').value;
    let peso = form_insert.querySelector('#peso').value;
    let altura = form_insert.querySelector('#altura').value;
    let gordura = form_insert.querySelector('#gordura').value;

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

    tempTdNome.textContent = nome;
    tempTdPeso.textContent = peso;
    tempTdAltura.textContent = altura;
    tempTdGordura.textContent = gordura;
    tempTdImc.textContent = (peso/(altura * altura)).toFixed(2);

    tempTr.appendChild(tempTdNome);
    tempTr.appendChild(tempTdPeso);
    tempTr.appendChild(tempTdAltura);
    tempTr.appendChild(tempTdGordura);
    tempTr.appendChild(tempTdImc);
    
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(tempTr);
    
    validacao();
});