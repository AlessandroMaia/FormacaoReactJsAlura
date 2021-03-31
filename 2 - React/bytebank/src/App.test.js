import App from './app';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {
        it('Nome é exibido', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })

        it('Saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })

        it('Botão de transação é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })
})

