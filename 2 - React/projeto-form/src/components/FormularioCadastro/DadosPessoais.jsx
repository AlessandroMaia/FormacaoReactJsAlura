import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setnovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }
        }}>
            <TextField
                value={nome}
                onChange={(event) => { setNome(event.target.value) }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                onChange={(event) => { setSobrenome(event.target.value) }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                value={cpf}
                onChange={(event) => { setCpf(event.target.value) }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                name="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <FormControlLabel
                label="Promo????es"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => { setPromocoes(event.target.checked) }}
                        name="promocoes"
                        color="primary" />}
            />
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => { setnovidades(event.target.checked) }}
                        name="novidades"
                        color="primary" />}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit">
                Pr??ximo
            </Button>
        </form>
    )
}

export default DadosPessoais;