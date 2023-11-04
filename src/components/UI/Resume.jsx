export default function Resume() {
    const resumeUrl = 'https://drive.google.com/file/d/1IkiczOp1vPtsPsvlox40ar6xrPoJHn3n/view';

    return (
        <>
        <div>
            <p>Download my resume:</p>
            <a href={resumeUrl} target="_blank" download>
                Noah Simcoe - Resume
            </a>
        </div>
        </>
    )
};