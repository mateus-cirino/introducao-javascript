var trs = document.querySelectorAll('.paciente');
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