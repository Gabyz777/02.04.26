import { useState } from 'react';

export default function DepositoDuplo() {
const [dinheiro, setDinheiro] = useState(0);

const transferir = () => {

setDinheiro(valorAntigo => valorAntigo + 200);
};
return (
    <div>
        <h2>Saldo: {dinheiro}</h2>
        <button onClick={transferir}>Transferir 200</button>
    </div>
)
}