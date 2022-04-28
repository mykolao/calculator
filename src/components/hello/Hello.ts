import 'components/hello/hello.scss';

class Hello {
  #element;

  constructor(textContent: string) {
    this.#element = document.createElement('h1');
    this.#element.textContent = textContent;
    this.#element.className = 'hello';
  }

  get element() {
    return this.#element;
  }
}

export default Hello;
