export default function Catalogo({ produtos = [] }) {
  return (
    <ul>
      {produtos.map((item) => (
        <li key={item.id}>
          {item.nome}
        </li>
      ))}
    </ul>
  );
}