import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function FormularioCadastro({ onSubmit }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setnovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }}>
            <TextField
                value={nome}
                onChange={(event) => { setNome(event.target.value) }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                onChange={(event) => { setSobrenome(event.target.value) }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => { setCpf(event.target.value) }}
                onBlur={(event) => setErros({ cpf: { valido: false, texto: "CPF deve ter 11 digitos!" } })}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <FormControlLabel
                label="Promoções"
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
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;