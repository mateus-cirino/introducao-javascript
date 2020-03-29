var buttonDeletarPaciente = document.querySelector('#deletar-paciente');
buttonDeletarPaciente.addEventListener('click', function() {
    event.preventDefault();

    let form = document.querySelector('#form_insert');
    
    let paciente = obterPacienteForm(form);

    deletarPaciente(paciente.codigo);

    reset(form);
});

var buttonSalvarPaciente = document.querySelector('#salvar-paciente');

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
        
        reset(form_insert);
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
        codigo: form.querySelector('#codigo').value,
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

    let tempTdCodigo = montaTd(paciente.codigo, "info-codigo");
    let tempTdNome = montaTd(paciente.nome, "info-nome");
    let tempTdPeso = montaTd(paciente.peso, "info-peso");
    let tempTdAltura = montaTd(paciente.altura, "info-altura");
    let tempTdGordura = montaTd(paciente.gordura, "info-gordura");
    let tempTdImc = montaTd(paciente.imc, "info-imc");   

    tempTr.appendChild(tempTdCodigo);
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

function addPacienteForm (paciente) {
    let form = document.querySelector('#form_insert');
    
    form.querySelector('#codigo').value = paciente.codigo;
    form.querySelector('#nome').value = paciente.nome;
    form.querySelector('#peso').value = paciente.peso;
    form.querySelector('#altura').value = paciente.altura;
    form.querySelector('#gordura').value = paciente.gordura;
}

function habilitarEdicao() {
    let form = document.querySelector('#form_insert');
    
    let btnSalvar = form.querySelector('#salvar-paciente');
    let btnDeletar = form.querySelector('#deletar-paciente');

    let codigoField = form.querySelector('#codigo');
    codigoField.disabled = true;

    btnSalvar.disabled = false;
    btnDeletar.disabled = false;
}

function desabilitaEdicao() {
    let form = document.querySelector('#form_insert');
    
    let btnSalvar = form.querySelector('#salvar-paciente');
    let btnDeletar = form.querySelector('#deletar-paciente');

    let codigoField = form.querySelector('#codigo');
    codigoField.disabled = false;

    btnSalvar.disabled = true;
    btnDeletar.disabled = true;
}

function reset(form) {
    form.reset();
    desabilitaEdicao();
}

function deletarPaciente(codigo) {
    let pacientesTr = Array.from(document.querySelectorAll('.paciente'));
    pacientesTr.forEach((pacienteTr) => {
        if(pacienteTr.querySelector('.info-codigo').textContent == codigo) {
            pacienteTr.remove();
        }

    });
}