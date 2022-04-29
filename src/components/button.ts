// import 'styles/button.scss';

class Button {
  private readonly buttonElement = document.createElement('button');

  private activateButton() {
    this.buttonElement.classList.add('button-active');
  }

  private deactivateButton() {
    this.buttonElement.classList.remove('button-active');
  }

  private addMouseListeners() {
    this.buttonElement.addEventListener('mousedown', this.activateButton);
    this.buttonElement.addEventListener('mouseup', this.deactivateButton);
  }

  constructor(textContent: string) {
    // const keyList = ['b', 'B'];
    this.buttonElement.textContent = textContent;
    this.buttonElement.classList.add('button');
    this.addMouseListeners();
    // if (keyList.length) {
    //   this.buttonElement.addEventListener(
    //     'keydown',
    //     ({ key }: KeyboardEvent) => {
    //       console.log(key, 'down');
    //       if (key in keyList) {
    //         this.activateButton();
    //       }
    //     }
    //   );

    //   this.buttonElement.addEventListener('keyup', ({ key }: KeyboardEvent) => {
    //     console.log(key, 'up');
    //     if (key in keyList) {
    //       this.deactivateButton();
    //     }
    //   });
    // }
  }

  get element() {
    return this.buttonElement;
  }
}
export default Button;
