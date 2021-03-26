import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados)
        }
    });

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} aoVoltar={anterior} />,
        <DadosPessoais aoEnviar={coletarDados} validarCpf={validarCpf} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo Cadastro</Typography>
    ]

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    function anterior() {
        if (etapaAtual === 0)
            return;
        setEtapaAtual(etapaAtual - 1)
    }

    return <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Endereco</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        { formularios[etapaAtual]}
    </>;
}


export default FormularioCadastro;