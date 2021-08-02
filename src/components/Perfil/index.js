import './style.css';

const Perfil = () => {
  return `
    <section class="perfil-associacao">
      <div class="perfil-info">
        <img class="img-perfil-info" src="src/images/perfil.jpg">
        <h1 class="nome-associacao-info text-info">Nome da Associação</h1>
        <h2 class="text-associacao-info text-info">Ajudando desde 2019</h2>
        <h3 class="contato-associacao-info text-info">Contato: 00 0 0000-0000</h3>
      </div>
      <div class="perfil-edit">
        <form>
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" value="Associação 01">
          <label for="contato">Contato</label>
          <input type="number" id="contato" name="contato">
          <div class="button-info">
            <button type="submit">Salvar alterações</button>
          </div
        </form>
      </div>
    </section>
  `;
};

export default Perfil;
