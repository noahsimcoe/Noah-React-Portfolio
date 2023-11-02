// Bringing in required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {

    const location = useLocation();

    return (
        <Navbar
            links={[
                <Link key={1} to="/" className={location.pathname === '/' ? 'active' : ''}>
                    About Me
                </Link>,
                <Link key={2} to="portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
                    Portfolio
                </Link>,
                <Link key={3} to="contact" className={location.pathname === '/contact' ? 'active' : ''}>
                    Contact Me
                </Link>,
                <Link key={4} to="resume" className={location.pathname === '/resume' ? 'active' : ''}>
                    Resume
                </Link>,
            ]}
        />
    );
}
