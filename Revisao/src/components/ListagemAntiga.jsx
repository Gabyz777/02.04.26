export default function ListagemAntiga() {
  const itens = ["Espada", "Escudo", "Poção"];

  return (
    <ul>
      {itens.map((item) => (
        <li key={item}> {item} </li>
      ))}
    </ul>
  );
}
