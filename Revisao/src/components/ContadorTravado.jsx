import { useState } from 'react';

export default function ContadorTravado() {
const [cliques, setCliques] = useState(0);

return (
<div>
<h2>Cliques: {cliques}</h2>
<button onClick={() => setCliques(cliques + 1)}>Aumentar</button>
</div>
);
}