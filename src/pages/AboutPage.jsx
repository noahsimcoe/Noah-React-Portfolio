import profilePic from '../assets/profile.jpg';

export default function AboutPage() {
    return (
        <>
        <div className='aboutme-box'>
            <h2>About Me</h2>
            <img src={profilePic} alt="profile of Noah" height='300'></img>
            <p>Hi I’m Noah, and welcome to my portfolio application! I created this to house the projects I’ve created so far during my coding bootcamp. The bootcamp is through the University of Kansas and it’s focused on full stack web development. Feel free to check out some of my projects and follow me along this journey!</p>
        </div>
        </>
    );
}