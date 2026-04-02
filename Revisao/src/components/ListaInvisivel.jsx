export default function ListaInvisivel() {
    const compras = ["Ovo", "Leite", "Pão"];

    return (
        <ul>
            {compras.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}