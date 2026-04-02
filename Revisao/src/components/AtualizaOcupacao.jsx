import { useState } from 'react';

export default function AtualizaOcupacao() {
    const [form, setForm] = useState({ nome: "Jonas", empresa: "" });

    const alterarEmpresa = () => {
        setForm({ 
            ...form, 
            empresa: "SENAI" 
        });
    };

    return (
        <div>
            <p>Nome: {form.nome}</p>
            <p>Empresa: {form.empresa}</p>
            <button onClick={alterarEmpresa}>Mudar Empresa</button>
        </div>
    );
}