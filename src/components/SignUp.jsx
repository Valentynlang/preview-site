import './SignUp.css';

export default function SignUp() {
    const listItems = [
        { text: 'напишите какая услуга вас интересует через кнопку ниже' },
        {
            text: 'учитывайте, что я работаю по предоплате (разбор матрицы и обучения - 100% предоплата, практика гвоздестояния - предоплата 35$, остальное на месте)',
        },
        { text: 'предоплата не возвращается, если вы отменяете сеанс' },
        {
            text: 'сеанс может быть перенесен на другую дату, если у вас есть весомые причины и вы предупреждаете меня заранее',
        },
    ];

    return (
        <div className="signup-container">
            <h2 className="section-title">Запись на услугу</h2>
            <div className="signup-content">
                <div className="background-image">
                    <div className="overlay">
                        <ul className="signup-list">
                            {listItems.map((item, index) => (
                                <li className="list-item" key={index}>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                        <a
                            className="signup-button"
                            href="https://t.me/yourcodesoul"
                        >
                            записаться
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
