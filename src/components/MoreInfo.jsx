import './MoreInfo.css';

export default function MoreInfo() {
  return (
    <div>
      <h2 className="more-info-title">Доп. информация</h2>
      <div className="more-info-container">
        <div className="more-info-text">     
          <p>
            Отзывы о моей работе вы найдете в актуальных «отзывы» в  {" "}
            <a href='https://www.instagram.com/stories/highlights/18214636570251844/'>инстаграм</a>
          </p>
        </div>
        <div className='icons-container'>
          <a href="https://t.me/yourcodesoul_tgk" target="_blank" rel="noopener noreferrer">
            <img className='icon' src='/public/tg.webp' alt='Telegram icon' />
          </a>
          <a href="https://www.instagram.com/yourcodesoul" target="_blank" rel="noopener noreferrer">
            <img className='icon' src='/public/inst.webp' alt='Instagram icon' />
          </a>
          <a href="https://www.youtube.com/@yourcodesoul" target="_blank" rel="noopener noreferrer">
            <img className='icon' src='/public/youtube.webp' alt='YouTube icon' />
          </a>
        </div>
      </div>
    </div>
  );
}