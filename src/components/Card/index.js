import './style.css';

const Card = () => {
  return `
    <section class="cards">
      <div class="card">
        <h1 class="titulo-card">Doações a Receber</h1>
        <h2 class="subtitulo-card">13</h2>
      </div>
      <div class="card">
        <h1 class="titulo-card">Doações Recebidas</h1>
        <h2 class="subtitulo-card">234</h2>
      </div>
      <div class="card">
        <h1 class="titulo-card">Doadores</h1>
        <h2 class="subtitulo-card">167</h2>
      </div>
      <div class="card">
        <h1 class="titulo-card">Famílias Auxiliadas</h1>
        <h2 class="subtitulo-card">62</h2>
      </div>
    </section>
  `;
};

export default Card;
