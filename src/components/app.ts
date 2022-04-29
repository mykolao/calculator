// import Button from 'components/button';
import 'styles/app.scss';

class App {
  private readonly appElement = document.createElement('main');

  // private readonly b1;

  constructor() {
    this.appElement.classList.add('app');
    // this.b1 = new Button('Button');
    const header = document.createElement('h1');
    header.textContent = 'Calculator';
    this.appElement.appendChild(header);
    // this.appElement.appendChild(this.b1.element);
  }

  get element() {
    return this.appElement;
  }
}

export default App;
