var trs = document.querySelectorAll('.paciente');
trs.forEach(function(tr){
    let imc = tr.querySelector('.info-imc');
    let massa = tr.querySelector('.info-peso');
    let altura = tr.querySelector('.info-peso');
    imc.textContent = (massa.textContent/(altura.textContent * altura.textContent)).toFixed(2);
});