import './index.pcss';
import MyApp from './components/my-app';

if (PRODUCTION) {
  require('offline-plugin/runtime').install();
}

customElements.define('my-app', MyApp);
