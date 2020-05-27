import './style.css';
import Logo from './logo.png';

const logo = document.createElement("img");
logo.id = "logo";
logo.src = Logo;

const p = document.createElement("p");
p.innerHTML = "nodejs-app";

const content = document.createElement("div");
content.id = "content";
content.appendChild(logo);
content.appendChild(p);
document.body.appendChild(content);
