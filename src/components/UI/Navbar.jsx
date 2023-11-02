export default function Nav({ links }) {
    return (
        <nav>
            <div>
                <h3>Noah Simcoe</h3>
                <div>
                    <ul>
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}