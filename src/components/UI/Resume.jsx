export default function Resume() {
    const resumeUrl = 'https://drive.google.com/file/d/1IkiczOp1vPtsPsvlox40ar6xrPoJHn3n/view';

    return (
        <>
        <div className="resume-box">
            <h2>Download my resume:</h2>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
                Noah Simcoe - Resume (11.4.23)
            </a>
            <div className="proficiency-box">
                <h3>Front-end Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
            </div>
            <div className="proficiency-box">
                <h3>Back-end Proficiencies</h3>
                <ul>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
            </div>
        </div>
        </>
    )
};