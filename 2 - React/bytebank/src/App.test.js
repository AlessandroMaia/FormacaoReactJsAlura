import App, { calcularNovoSaldo } from './app';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {
        it('Nome é exibido', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });

        it('Saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });

        it('Botão de transação é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        });
    })

    describe('Quando realizo uma transação', () => {
        it('que é um saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(100);
        });

        it('que é um depósito, o valor vai aumentar', () => {
            const valores = {
                transacao: 'deposito',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(200);
        });
    })
})



