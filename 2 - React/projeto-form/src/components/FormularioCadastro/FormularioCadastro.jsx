import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function FormularioCadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <form onSubmit={(event) => { 
            event.preventDefault(); 
            console.log("Nome: ", nome)}}>
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0, 3);
                    }
                    setNome(tmpNome);
                }}
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
                onChange={(event) => { setCpf(event.target.value) }}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" defaultChecked color="primary" />}
            />
            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades" defaultChecked color="primary" />}
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