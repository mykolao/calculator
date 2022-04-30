import 'styles/app.scss';
import Button from 'components/Button';

class App {
  private readonly appElement = document.createElement('main');

  constructor() {
    this.appElement.classList.add('app');
    this.createControls();
  }

  private createControls() {
    const buttons = [
      new Button('d', ['Backspace'], () => console.log('d')),
      new Button('r', ['r'], () => console.log('r')),
      new Button('p', ['p'], () => console.log('p')),
      new Button('/', ['/'], () => console.log('/')),
      new Button('7', ['7'], () => console.log('7')),
      new Button('8', ['8'], () => console.log('8')),
      new Button('9', ['9'], () => console.log('9')),
      new Button('*', ['*'], () => console.log('*')),
      new Button('4', ['4'], () => console.log('4')),
      new Button('5', ['5'], () => console.log('5')),
      new Button('6', ['6'], () => console.log('6')),
      new Button('-', ['-'], () => console.log('-')),
      new Button('1', ['1'], () => console.log('1')),
      new Button('2', ['2'], () => console.log('2')),
      new Button('3', ['3'], () => console.log('3')),
      new Button('+', ['+'], () => console.log('+')),
      new Button('s', ['s'], () => console.log('s')),
      new Button('0', ['0'], () => console.log('0')),
      new Button('.', ['.'], () => console.log('.')),
      new Button('=', ['=', 'Enter'], () => console.log('=')),
    ];

    const btnGroup = document.createElement('section');
    btnGroup.classList.add('btn-group');

    buttons.forEach(({ element }) => {
      btnGroup.appendChild(element);
    });

    this.appElement.appendChild(btnGroup);
  }

  get element() {
    return this.appElement;
  }
}

export default App;
