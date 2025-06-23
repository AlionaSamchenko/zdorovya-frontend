import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CalculatorPage.css';

function CalculatorPage() {
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [calorieResult, setCalorieResult] = useState(null);
  const [bmiResult, setBmiResult] = useState(null);
  const [bjuResult, setBjuResult] = useState(null);

  const navigate = useNavigate();

  const calculateCaloriesAndBJU = () => {
    if (!age || !height || !weight) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    fetch('https://zdorovya-backend.onrender.com/calculate/calories-bju', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gender, age, height, weight, activity }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          setCalorieResult(data.calorieResult);
          setBjuResult(data.bjuResult);
        }
      })
      .catch(error => {
        console.error('Помилка при розрахунку калорій:', error);
        alert('Не вдалося зв\'язатися з сервером для розрахунку калорій.');
      });
  };

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Введіть зріст та вагу для розрахунку ІМТ.");
      return;
    }

    fetch('https://zdorovya-backend.onrender.com/calculate/bmi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ height, weight }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          setBmiResult(data);
        }
      })
      .catch(error => {
        console.error('Помилка при розрахунку ІМТ:', error);
        alert('Не вдалося зв\'язатися з сервером для розрахунку ІМТ.');
      });
  };

  return (
    <div className="calculator-container-with-images">
      <img src="/water_balan.png" alt="Ліва сторона" className="side-image left-image" />

      <div className="calculator-container">
        <h2 className="calculator-title">Калькулятор калорій</h2>
        <p className="calculator-info">
          Слідкуйте разом з нами за вашою добовою нормою калорій, індексом маси тіла (ІМТ) та необхідним споживанням кількості білків, жирів і вуглеводів (БЖВ) на день. Скористайтеся калькулятором для отримання індивідуальної інформаціїї.
        </p>
        <div className="calculator-form">
          <label>Стать:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="female">Жіноча</option>
            <option value="male">Чоловіча</option>
          </select>

          <label>Вік (років):</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Введіть ваш вік" />

          <label>Зріст (см):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Введіть ваш зріст" />

          <label>Вага (кг):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Введіть вашу вагу" />

          <label>Рівень активності:</label>
          <select value={activity} onChange={(e) => setActivity(parseFloat(e.target.value))}>
            <option value="1.2">Сидячий спосіб життя (1.2)</option>
            <option value="1.375">Легка активність (1.375)</option>
            <option value="1.55">Помірна активність (1.55)</option>
            <option value="1.725">Висока активність (1.725)</option>
            <option value="1.9">Дуже висока активність (1.9)</option>
          </select>

          <button className="calculate-button" onClick={calculateCaloriesAndBJU}>Обчислити калорії та БЖВ</button>
          <button className="calculate-button" onClick={calculateBMI}>Розрахувати ІМТ</button>

          {calorieResult && (
            <div className="result-block">
              <h3>Ваша добова норма калорій:</h3>
              <p>{calorieResult} ккал</p>
            </div>
          )}

          {bjuResult && (
            <div className="result-block">
              <h3>Необхідно вживати на день:</h3>
              <p>Білки: {bjuResult.protein} г</p>
              <p>Жири: {bjuResult.fat} г</p>
              <p>Вуглеводи: {bjuResult.carbs} г</p>
            </div>
          )}

          {bmiResult && (
            <div className="result-block">
              <h3>Ваш ІМТ: {bmiResult.bmi}</h3>
              <p>Категорія: <strong>{bmiResult.category}</strong></p>
              <p>Рекомендована вага: від {bmiResult.minWeight} кг до {bmiResult.maxWeight} кг</p>
            </div>
          )}

          <button className="back-button" onClick={() => navigate('/')}>На головну</button>
        </div>
      </div>

      <img src="/water_balan.png" alt="Права сторона" className="side-image right-image" />
    </div>
  );
}

export default CalculatorPage;
