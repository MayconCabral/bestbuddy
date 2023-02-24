import dog_rose from '../img/dog_rose2.png';
import Button from '../components/Button';

export default function Home() {
    return (
        <header className='home'>
            <div className='flex'>
                <div className='home__logo'>
                    <div className='home__logo__background'></div>
                    <img src={dog_rose} alt="A dog holding a rose with his mouth." />
                </div>
                <h1 className='home__header'>
                    <span>Your</span>
                    <span> best</span><span> buddy's</span>
                    <span> pictures</span>
                </h1>
                <nav className='home__nav'>
                    <Button class='btn btn-primary' text='gallery' link='/gallery'/>
                    <Button class='btn btn-tertiary' text='made by' link='/developer'/>
                </nav>
            </div>
        </header>
    )
};
