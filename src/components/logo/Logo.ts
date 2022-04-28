import 'components/logo/logo.scss';

export class Logo {
  private readonly HTMLElement = document.createElement('div');

  constructor(src: string, alt: string) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    this.HTMLElement.className = 'logo';
    this.HTMLElement.appendChild(img);
  }

  get element() {
    return this.HTMLElement;
  }
}
