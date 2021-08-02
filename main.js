import './src/css/reset.css';
import './src/css/settings.css';
import './src/css/colors.css';

import Header from './src/components/Header';
import Menu from './src/components/Menu';
import Projeto from './src/components/Projeto';

const $htmlHeader = Header();
const $htmlMenu = Menu();
const $htmlProjeto = Projeto();

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
  `

    ${$htmlHeader}
    ${$htmlMenu}
    ${$htmlProjeto}

`,
);
