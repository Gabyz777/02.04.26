export default function AlertaPerigoso() {
const dispararMisseis = () => alert("💥 Mísseis lançados!");

return (
<div>
<h2>Painel de Controle</h2>
<button onClick={dispararMisseis}>ATIRAR</button>
</div>
);
}