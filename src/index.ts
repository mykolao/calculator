import App from 'components/App';
import 'styles/index.scss';

const { element: app } = new App();
document.querySelector('body')!.appendChild(app);
