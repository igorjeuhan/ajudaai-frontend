import './style.css';

const Header = () => {
  return `
    <header class="cabecalho">
      <img class="logo" src="src/images/logo.png" alt="Logo Ajuda aí">
      <h1 class="nome-associacao white">Associação 01</h1> 
      <div class="conteudo-perfil">
        <h2 class="nome-diretor white">Bem-vindo(a) Nome Diretor</h2>
        <img class="img-perfil" src="src/images/perfil.jpg" alt="Imagem de perfil da Associação">
        <img class="img-seta-baixo" src="src/images/icons/arrow-down.svg" alt="Ícone de seta para baixo">
      </div>
    </header>
  `;
};

export default Header;
