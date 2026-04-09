import { useState, useEffect } from 'react';

export default function PuxadorInfinito() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://api.api-exemplo.com/dados')
      .then(res => res.json())
      .then(info => setDados(info));
  }, []); // Trava adicionada com sucesso!

  return (
    <div>
      <h3>Itens carregados: {dados.length}</h3>
    </div>
  );
}