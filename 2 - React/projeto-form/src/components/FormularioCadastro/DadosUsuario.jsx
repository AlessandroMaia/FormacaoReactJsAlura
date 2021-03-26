import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosUsuario({ aoEnviar }) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required />
            <Button
                type="submit"
                variant="contained"
                color="primary">Cadastrar</Button>
            <Button
                type="submit"
                variant="contained"
                color="primary">Voltar</Button>
        </form>
    );
}

export default DadosUsuario;