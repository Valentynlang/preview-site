import './AboutMe.css'; 

export default function AboutMe() {
  const textSections = [
    { text: 'Меня зовут Юля. Я провожу людей в глубокие практики гвоздестояния, а также разбираю матрицы судьбы и обучаю по двум направлениям в режимах онлайн и оффлайн.' },
    { text: 'Ценность моих практик заключается в том, что я работаю на трех уровнях - с телом, разумом и душой. Учитывая комплексный подход - хороший и довольно быстрый результат гарантирован.' },
    { text: 'Кроме самого подхода, мои личностные качества, такие как прямолинейность и умение зрить в корень сильно сокращает дорогу в вашу точку Б.' }
  ];

  return (
    <div className='about-me-section'>
      <h2 className="section-title">Обо мне</h2>
      <div className="about-me-container">
        <div className="left-block">
          <img src="/about-me-img.webp" alt="About Me" className="about-image" />
        </div>
        <div className="right-block">
          {textSections.map((section, index) => (
            <div key={index} className="text-section">
              {section.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 