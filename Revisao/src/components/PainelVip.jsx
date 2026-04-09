export default function PainelVip({ isVip }) {
  return (
    <div>
      <h2>Bem Vindo</h2>
      {isVip && <p>Você tem acesso ao lounge secreto!</p>}

    </div>
  );
}