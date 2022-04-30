import 'styles/button.scss';

const DEFAULT_KEYLIST: string[] = [];
const DEFAULT_ONCLICK = () => {};
class Button {
  private readonly buttonElement = document.createElement('button');

  private onClick;

  constructor(
    textContent: string,
    keyList = DEFAULT_KEYLIST,
    onClick = DEFAULT_ONCLICK
  ) {
    this.onClick = onClick;
    this.buttonElement.textContent = textContent;
    this.buttonElement.classList.add('button');
    this.addMouseListeners();
    if (keyList.length) this.addKeyboardListeners(keyList);
  }

  private addMouseListeners() {
    this.buttonElement.addEventListener('mousedown', () => {
      this.buttonElement.classList.add('button-active');
      this.onClick();
    });
    this.buttonElement.addEventListener('mouseup', () =>
      this.buttonElement.classList.remove('button-active')
    );
  }

  private addKeyboardListeners(keyList: string[]) {
    window.addEventListener('keydown', ({ key }: KeyboardEvent) => {
      if (keyList.includes(key)) {
        this.buttonElement.classList.add('button-active');
        this.onClick();
      }
    });

    window.addEventListener('keyup', ({ key }: KeyboardEvent) => {
      if (keyList.includes(key)) {
        this.buttonElement.classList.remove('button-active');
      }
    });
  }

  get element() {
    return this.buttonElement;
  }
}
export default Button;
