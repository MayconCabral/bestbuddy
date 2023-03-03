import Button from '../components/Button';
import dog from '../img/yellow_dog.png';
import michael from '../img/michael.png';

export default function Developer() {
    
    return (
        <main className="developer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FFBB33" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,69.3C840,21,960,11,1080,32C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <div className="developer__title">
                <h2 className="developer__title__name">Maycon Cabral</h2>
                <h1 className="developer__title__front">Front-End</h1>
                <h2 className="developer__title__dev">developer</h2>
            </div>
            <div className="developer__bestbuddy">
                <img src={dog} alt="a pubg dog wearing a yellow jacket" className="developer__bestbuddy__picture" />
            </div>
            <div className="developer__author">
                <div className="developer__author__background"></div>
                <img src={michael} alt="a guy wearing glasses staring to the top-right direction" className="developer__author__picture" />
            </div>
            <nav className="developer__nav">
                <Button class='btn btn-primary' text='contact me !' link='/'/>
                <Button class='btn btn-tertiary' text='home' link='/'/>            
            </nav>
        </main>
    )
};