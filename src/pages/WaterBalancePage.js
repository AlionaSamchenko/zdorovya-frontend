import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaterBalancePage.css';

function WaterBalancePage() {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [waterNeed, setWaterNeed] = useState(null);
  const [drunkWater, setDrunkWater] = useState(0);
  const [waterMessage, setWaterMessage] = useState('');

  const navigate = useNavigate();

  const calculateWaterNeed = () => {
    if (!weight || weight <= 0) {
      alert("Будь ласка, введіть коректну вагу.");
      return;
    }

    fetch('http://localhost:5000/calculate/water-need', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ weight, activity }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else {
        setWaterNeed(data.waterNeed);
        setWaterMessage('');
      }
    })
    .catch(error => {
      console.error('Помилка при розрахунку норми води:', error);
      alert('Не вдалося зв\'язатися з сервером для розрахунку.');
    });
  };

  const addWater = (amount) => {
    fetch('http://localhost:5000/calculate/update-water', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        drunkWater: drunkWater,
        amount: amount,
        waterNeed: waterNeed
      }),
    })
    .then(response => response.json())
    .then(data => {
      setDrunkWater(data.newDrunkWater);
      setWaterMessage(data.waterMessage);
    })
    .catch(error => {
      console.error('Помилка оновлення води:', error);
      alert('Не вдалося оновити дані про воду.');
    });
  };

  return (
    <div className="calculator-container-with-images">
      <img src="/water_balan.png" alt="Ліва сторона" className="side-image left-image" />

      <div className="calculator-container">
        <h2 className="calculator-title">Водний баланс</h2>
        <p className="calculator-info">
          Слідкуйте разом з нами за своїм водним балансом. Пам'ятайте, щоденне споживання води необхідне для підтримки нормальної роботи всіх систем організму. Введіть вашу вагу та виберіть рівень активност і отримаєте результат щодо споживання води.
        </p>
        <div className="calculator-form">
          
          <label>Ваша вага (кг):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Введіть вагу"
          />

          <label>Рівень активності:</label>
          <select value={activity} onChange={(e) => setActivity(parseFloat(e.target.value))}>
            <option value="1.2">Сидячий спосіб життя — 1.2</option>
            <option value="1.375">Легка активність — 1.375</option>
            <option value="1.55">Помірна активність — 1.55</option>
            <option value="1.725">Висока активність — 1.725</option>
            <option value="1.9">Дуже висока активність — 1.9</option>
          </select>

          <button className="calculate-button" onClick={calculateWaterNeed}>Обчислити норму води</button>

          {waterNeed && (
            <div className="result-block">
              <h3>Ваша добова норма води: {waterNeed} л</h3>
            </div>
          )}

          <div className="result-block">
            <h3>Облік випитої води</h3>
            <p>Випито на даний момент: {drunkWater.toFixed(2)} л</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              <button className="calculate-button" onClick={() => addWater(0.25)}>+ 0.25 л</button>
              <button className="calculate-button" onClick={() => addWater(0.5)}>+ 0.5 л</button>
              <button className="calculate-button" onClick={() => addWater(1)}>+ 1 л</button>
            </div>
            {waterMessage && (
              <p style={{ marginTop: '10px' }}>{waterMessage}</p>
            )}
          </div>
          
          <button className="back-button" onClick={() => navigate('/')}>На головну</button>
        </div>
      </div>

      <img src="/water_balan.png" alt="Права сторона" className="side-image right-image" />
    </div>
  );
}

export default WaterBalancePage;

