import '@webcomponents/webcomponentsjs/webcomponents-bundle'; // polyfill
import './assets/styles/main.scss';
import MyApp from './components/my-app';

if (PRODUCTION) {
  require('offline-plugin/runtime').install();
}

customElements.define('my-app', MyApp);
