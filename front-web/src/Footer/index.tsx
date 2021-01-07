import './styles.css';
import { ReactComponent as YouTube } from './youtube.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://youtube.com/c/DevSuperior" target="_new">
          <YouTube />
        </a>

        <a href="https://instagram.com/fredericobalieiro" target="_new">
          <Instagram />
        </a>

        <a href="https://www.linkedin.com/in/frederico-homobono-0002b37">
          <Linkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer;