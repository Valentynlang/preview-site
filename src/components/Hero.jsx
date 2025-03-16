import './Hero.css';

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Гвоздестояние — <br className="mobile-only" /> путь к
                    освобождению
                </h1>
                <p className="hero-description">
                    если ты находишься в поисках себя и выхода из тупика -{' '}
                    <span className="style-mobile">
                        я здесь, чтобы тебе в этом помочь
                    </span>{' '}
                    <p className="display-only">
                        я здесь, чтобы тебе в этом помочь
                    </p>
                </p>

                <a href="#AboutMe">
                    <img src="/arrow.svg" alt="Arrow" className="arrow" />
                </a>
            </div>
        </div>
    );
}
