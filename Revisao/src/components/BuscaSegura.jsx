import { useState } from 'react';

export default function BuscaSegura() {
const [termo, setTermo] = useState("");

return (
<div>
<input
type="text"
// Complete os dois fios:
value={ termo }
onChange={(evento) => setTermo(evento.target.value)}
/>
</div>
);
}