import { Hello } from 'components';
import { Link } from 'components/link';
import './index.scss';

import ghLogo from 'img/GitHub-Logo-64px.png';
import { Logo } from 'components/logo';

const hello = new Hello('Hello Typescript ❤️');
const logo = new Logo(ghLogo, 'Github');
const link = new Link('https://github.com/mykolao/ts-template', logo.element);
const container = document.querySelector('.container');

container?.appendChild(hello.element);
container?.appendChild(link.element);
