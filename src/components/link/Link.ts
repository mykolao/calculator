import 'components/link/link.scss';

type ContentType = Node | string;

export class Link {
  private readonly HTMLElement = document.createElement('a');

  constructor(href: string, content: ContentType) {
    this.HTMLElement.target = '_blank';
    this.HTMLElement.href = href;
    this.HTMLElement.className = 'link';

    if (typeof content === 'string') this.HTMLElement.textContent = content;
    else this.HTMLElement.appendChild(content);
  }

  get element() {
    return this.HTMLElement;
  }
}
