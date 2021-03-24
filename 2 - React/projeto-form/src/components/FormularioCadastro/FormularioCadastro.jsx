import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />
            <FormControlLabel label="Promoções" control={<Switch name="promocoes" defaultChecked color="primary" />} />
            <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked color="primary" />} />
            <Button
                variant="contained"
                color="primary"
                type="submit">Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;