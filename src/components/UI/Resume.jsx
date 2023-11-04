export default function Resume() {
    const resumeUrl = 'https://drive.google.com/file/d/1IkiczOp1vPtsPsvlox40ar6xrPoJHn3n/view';

    return (
        <>
        <div className="resume-box">
            <h2>Download my resume:</h2>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
                Noah Simcoe - Resume (11.4.23)
            </a>
        </div>
        </>
    )
};