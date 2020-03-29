let pacientes = document.querySelectorAll('.paciente');
pacientes.forEach((paciente) => {
    paciente.addEventListener('dblclick', () => {        
        let objetoPaciente = obterPacienteTr(paciente);

        addPacienteForm(objetoPaciente);
    
        habilitarEdicao();
    });
});

