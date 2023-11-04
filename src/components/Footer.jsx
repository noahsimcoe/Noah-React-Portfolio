import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <a href="https://github.com/noahsimcoe" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={fab.faGithub} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/noah-s-26b8b11b2/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={fab.faLinkedin} /> LinkedIn
                </a>
            </div>
        </>
    );
}
