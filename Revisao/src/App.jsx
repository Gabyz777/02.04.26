import Separador from "./components/Separador";
import "./App.module.css";
import CartaoUsuario from "./components/CartaoUsuario";
import ContadorTravado from "./components/ContadorTravado";
import ListaInvisivel from "./components/ListaInvisivel";
import PainelAlunos from "./components/PainelAlunos";
import ListagemAntiga from "./components/ListagemAntiga";
import AlertaPerigoso from "./components/AlertaPerigoso";
import BuscaSegura from "./components/BuscaSegura";
import Mural from "./components/Mural";
import PuxadorInfinito from "./components/PuxadorInfinito";
import CaixaVermelha from "./components/CaixaVermelha";
import AtualizaOcupacao from "./components/AtualizaOcupacao";
import Catalogo from "./components/Catalogo";

function App() {
  return (
    <>
      <h1>
        <strong>Exercício 01</strong>
      </h1>
      <CartaoUsuario nomePerfil="Lucas" idade={20} />
      <Separador />
      <h1>
        <strong>Exercício 02</strong>
      </h1>
      <ContadorTravado /> <br />
      <Separador />
      <h1>
        <strong>Exercício 03</strong>
      </h1>
      <ListaInvisivel />
      <Separador />
      <h1>
        <strong>Exercício 04</strong>
      </h1>
      <PainelAlunos />
      <Separador />
      <h1>
        <strong>Exercício 05</strong>
      </h1>
      <ListagemAntiga />
      <Separador />
      <h1>
        <strong>Exercício 06</strong>
      </h1>
      <AlertaPerigoso />
      <Separador />
      <h1>
        <strong>Exercício 07</strong>
      </h1>
      <BuscaSegura />
      <Separador />
      <h1>
        <strong>Exercício 08</strong>
      </h1>
      <Mural />
      <Separador />
      <h1>
        <strong>Exercício 09</strong>
      </h1>
      <PuxadorInfinito />
      <Separador />
      <h1>
        <strong>Exercício 10</strong>
      </h1>
      <CaixaVermelha />
      <Separador />

      <h1>
        <strong>Exercício 11</strong>
      </h1>
      <AtualizaOcupacao />
      <Separador />

      <h1>
        <strong>Exercício 12</strong>
      </h1>
      <Catalogo />
      <Separador />


    </>
  );
}

export default App;
