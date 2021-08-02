import './style.css';

const Table = () => {
  return `
    <section class="tabelas">
    
      <table class="receber" cellspacing="0" cellpadding="0">
        <h2>Doações a receber</h2>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Data de retirada</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rodrigo Soares</td>
          <td>Av. Humberto Malard, 1235, Santos Dumont</td>
          <td>16/06/2021 ás 13:00h</td>
        </tr>
      </tbody>
      </table>

      <table class="receber" cellspacing="0" cellpadding="0">
        <h2>Doações recebidas</h2>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Data de retirada</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rodrigo Soares</td>
          <td>Av. Humberto Malard, 1235, Santos Dumont</td>
          <td>16/06/2021 ás 13:00h</td>
        </tr>
      </tbody>
      </table>
    </section>
  `;
};

export default Table;
