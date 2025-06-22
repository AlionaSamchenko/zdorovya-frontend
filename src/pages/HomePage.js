import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">

      {/* 1. Про нас */}
      <section className="home-section about-section">
        <h2>Про нас</h2>
        <p>
          Ми створили цей сайт для того, щоб допомогти людям зрозуміти важливість слідкувати за своїм здоровим способом життя.
          Тут ви зможете знайти корисні поради, навчитися правильно харчуватися, підтримувати водний баланс, 
          зможете підібрати дієту та слідкувати за своєю активністю.
        </p>
      </section>

      {/* 2. Картинки з текстом ПІД картинкою в окремих блоках */}
      <section className="home-section image-cards-section">

        <div className="image-card">
          <img src="/healthy_food.jpg" alt="Здорове харчування" />
          <div className="card-text">
            <h3>Здорове харчування</h3>
            <p>Слідкуйте за харчуванням разом з нами. Навчись вибирати правильні продукти харчування.</p>
          </div>
        </div>

        <div className="image-card">
          <img src="/sport_activity.jpg" alt="Фізична активність" />
          <div className="card-text">
            <h3>Фізична активність</h3>
            <p>Подбайте про свою активність. Активний спосіб життя - це перший крок для досягання цілі.</p>
          </div>
        </div>

        <div className="image-card">
          <img src="/water_balance.jpg" alt="Водний баланс" />
          <div className="card-text">
            <h3>Водний баланс</h3>
            <p>Слідкуйте за кількістю питної води. Ми допоможемо тобі у цьому!</p>
          </div>
        </div>

      </section>

      {/* 3. Заголовок + кнопка */}
      <section className="highlight-section">
        <h2>Зроби перший крок до здорового життя вже сьогодні!</h2>
        <button className="action-button" onClick={() => window.location.href='/calculatorpage'}>
          Почнемо зараз
        </button>
      </section>

    </div>
  );
}

export default HomePage;