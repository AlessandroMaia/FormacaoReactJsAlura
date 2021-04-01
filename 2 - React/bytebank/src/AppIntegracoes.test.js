import api from "./api";
import React from 'react';
import App from './app';
import { fireEvent, render, screen } from '@testing-library/react';
import Conta from "./conta/Conta";

jest.mock('./api');

describe('Requisições para API', () => {
    it('Exibir lista de transações através da API', async () => {
        api.listaTransacoes.mockResolvedValue([{
            "transacao": "saque",
            "valor": "20",
            "data": "26/09/2020",
            "id": 2
        },
        {
            "transacao": "deposito",
            "valor": "100",
            "data": "31/03/2021",
            "id": 3
        }]);

        render(<App />);

        expect(await screen.findByText('saque')).toBeInTheDocument();

        expect(screen.getByTestId('transacoes').children.length).toBe(2);
    })

    it('Chama a função do realizar transação, quando o botão é clicado', () => {
        const funcaoRealizarTransacao = jest.fn();

        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);

        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransacao).toHaveBeenCalled();
    })
})