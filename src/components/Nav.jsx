// Bringing in required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    // Navbar UI component renders each of the Link elements in the links prop(erty)
    return (
        <Navbar
            links={[
                <Link key={1} to="/">
                    About Me
                </Link>,
                <Link key={2} to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} to="/contact">
                    Contact Me
                </Link>,
                <Link key={4} to="/resume">
                    Resume
                </Link>,
            ]}
        />
    );
}
