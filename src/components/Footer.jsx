import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer()
    {
      return(
          <footer className="footer">
              <a className="btn-social" href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
              <a className="btn-social" href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
              <a className="btn-social" href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
              <a className="btn-social" href="#"><FontAwesomeIcon icon={faSquareGithub} /></a>
          </footer>
      )
    }

