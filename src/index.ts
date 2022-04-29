import 'styles/index.scss';
import App from 'components/app';

const { element: app } = new App();
document.querySelector('body')!.appendChild(app);
