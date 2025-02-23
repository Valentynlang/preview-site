import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Гвоздестояние <span>—</span> <br className="style-mobile"/> путь к освобождению</h1>
        <p className="hero-description">если ты находишься в поисках себя и выхода из тупика - <br className="mobile-only"/> <span className="style-mobile">я здесь, чтобы тебе в этом помочь</span> <p className="display-only">я здесь, чтобы тебе в этом помочь</p></p>
      </div>
    </div>
  );
}