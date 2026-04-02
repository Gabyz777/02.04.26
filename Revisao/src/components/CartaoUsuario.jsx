
export default function CartaoUsuario({ nomePerfil, idade }) {
    return (
        <div className="cartao">
            <h2>Nome: {nomePerfil} </h2>
            <p>Idade Atual: {idade} anos</p>
        </div>
    );
}
