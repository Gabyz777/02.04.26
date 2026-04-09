import { useState } from "react";

export default function Mural() {
  const [tweets, setTweets] = useState(["Estudando muito!"]);
  const [novoTweet, setNovoTweet] = useState("React é show");

  const enviarTweet = () => {
    setTweets([...tweets, novoTweet]);
    setNovoTweet("Eae, blz? Vai postar de novo? Muda o texto aí!");
  };

  return (
    <div>
      <ul>
        {tweets.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
      <button onClick={enviarTweet}>Postar</button>
    </div>
  );
}
