var buttonAdicionarPaciente = document.querySelector('#adicionar-paciente');
buttonAdicionarPaciente.addEventListener('click', function(e){
    event.preventDefault();

    let form_insert = document.querySelector('#form_insert');

    let paciente = obterPacienteForm(form_insert);

    let erroUl = form_insert.querySelector('#erros');

    erroUl.textContent = "";

    erros = listaDeErros(paciente);

    if(erros.length == 0) {                
        paciente.imc = calculaImc(paciente.peso, paciente.altura);
        
        let tempTr = montaTr(paciente);

        let tabela = document.querySelector('#tabela-pacientes');
    
        tabela.appendChild(tempTr);
        
        form_insert.reset();
    }else {
        erros.forEach((erro) => {
            erroLi = document.createElement('li');
            erroLi.textContent = erro;
            erroUl.appendChild(erroLi);
        });
    }
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

function montaTr(paciente) {
    let tempTr = document.createElement('tr');
    tempTr.classList.add('paciente');

    let tempTdNome = montaTd(paciente.nome, "info-nome");
    let tempTdPeso = montaTd(paciente.peso, "info-peso");
    let tempTdAltura = montaTd(paciente.altura, "info-altura");
    let tempTdGordura = montaTd(paciente.gordura, "info-gordura");
    let tempTdImc = montaTd(paciente.imc, "info-imc");   

    tempTr.appendChild(tempTdNome);
    tempTr.appendChild(tempTdPeso);
    tempTr.appendChild(tempTdAltura);
    tempTr.appendChild(tempTdGordura);
    tempTr.appendChild(tempTdImc);

    return tempTr;
}

function montaTd(valor, classe) {
    let tempTd = document.createElement('td');

    tempTd.textContent = valor;

    tempTd.classList.add(classe);

    return tempTd;
}