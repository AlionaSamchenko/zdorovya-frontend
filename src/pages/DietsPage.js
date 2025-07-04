import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DietsPage.css';

function DietsPage() {
  const navigate = useNavigate();

  return (
    <div className="diets-page">
      <h2 className="page-title">Дієти</h2>

      <nav className="diet-nav">
        <a href="#about-diet">Що таке дієта?</a>
        <a href="#mediterranean">Середземноморська дієта</a>
        <a href="#volumetric">Волюметрична дієта</a>
        <a href="#keto">Кєто дієта</a>
        <a href="#dukan">Інтегральне голодування</a>
        <a href="#lowcarb">Низьковуглеводна дієта</a>
      </nav>

      <section id="about-diet" className="diet-section">
        <h3>Що таке дієти?</h3>
  <p>
    Дієти — це режим харчування, якого людина дотримується для досягнення певної мети: схуднення, набору ваги або підтримки здоров'я.
    Окрім цього, слід пам'ятати, що для кожної людини дієти є індивідуальними, і перш ніж вибирати для себе дієту, спочатку проконсультуйтеся з лікарем.
  </p>
  <p>
    Встановіть для себе, яку саме мету ви хочете досягти при виборі дієти. Пам'ятайте, що неправильний вибір дієти може призвести до проблем зі здоров'ям, наприклад:
  </p>
  <ul>
    <li>запаморочення, якщо не буде вистачати необхідних складових харчування;</li>
    <li>розлад харчової поведінки;</li>
    <li>можуть виникнути деякі хвороби, такі як: діабет, ожиріння, серцево-судинні хвороби.</li>
  </ul>
      </section>

      <section id="mediterranean" className="diet-section">
<img
    src="/sered.jpg"
    alt="Середземноморська дієта"
    className="diet-image"
  />
        <h3>Середземноморська дієта</h3>
  <p>
    Середземноморська дієта відноситься до однієї з найздоровіших систем харчування у світі. Вона надає змогу підтримувати здоров'я серцево-судинної системи, поліпшує самопочуття та нормалізує вагу людини.
  </p>
  <p>Під час використання цієї дієти, слід пам'ятати про таке відсоткове співвідношення:</p>
  <ul>
    <li>фрукти та овочі, складні вуглеводи - 60 %;</li>
    <li>рослинні жири - 30 %;</li>
    <li>білкові продукти - 10 %.</li>
  </ul>
  <p>До продуктів, котрі людина може споживати під час цієї дієти:</p>
  <ul>
    <li>оливкова олія;</li>
    <li>шпинат, брокколі, помідори, перець, кабачки, рукола, базилік, цибуля;</li>
    <li>апельсин, лимони, виноград, гранат, інжир, полуниця, малина;</li>
    <li>риба та морепродукти;</li>
    <li>мигдаль, волоські горіхи, насіння чіа, льон, кунжут;</li>
    <li>нут, сочевиця, квасоля;</li>
    <li>кисломолочні продукти;</li>
    <li>кіноа, бурий рис, цільнозерновий хліб;</li>
    <li>яйця.</li>
  </ul>
  <p>
    Ця дієта не є обмеженою по часу. Ви можете ввести її у свій спосіб життя, адже вона допомагає підтримувати здоровий спосіб життя людини. По продуктам вона також не є дуже обмеженою, всі поживні речовини можна отримати з більш корисних продуктів.
  </p>
  <p>Заборонені продукти:</p>
  <ul>
    <li>трансжири (вершкове масло, маргарин та подібне);</li>
    <li>фаст-фуд;</li>
    <li>червоне та оброблене м'ясо (ковбаси, сосиски, бекон, баранина і подібне);</li>
    <li>рафіновані вуглеводи (білий хліб, макарони з білого борошна, мучні вироби);</li>
    <li>солодощі та всі продукти з вмістом цукру (цукерки, напої і подібне);</li>
    <li>алкоголь у великій кількості.</li>
  </ul>
      </section>

      <section id="volumetric" className="diet-section">
<img
    src="/vol.jpg"
    alt="Волюметрична дієта"
    className="diet-image"
  />
        <h3>Волюметрична дієта</h3>
  <p>
    Використовуючи цю дієту, ви себе не обмежуєте ні в чому. Основне що потрібно, це слідкувати за калоріями вжитої їжі та їх витраченням.
  </p>
  <p>
    Продукти поділяються на чотири групи залежно від їх енергетичної щільності, що допоможе скласти потрібний вам райіон їжі. Ось які категорія мають продукти:
  </p>
  <ul>
    <li>дуже низька щільність (фрукти, некрохмалисті овочі, суп на основі бульйону, знежирені молочні продукти);</li>
    <li>низька щільність (цільнозернові продукти, нежирні білки, бобові, крохмалисті овочі);</li>
    <li>середня щільність (молочні продукти, рафіновані вуглеводи, жирне м'ясо та риба, заправки до салатів);</li>
    <li>висока щільність (вершкове масло, рослинні олії, цукерки, чипси, шоколад, фаст-фуд і подібне).</li>
  </ul>
  <p>
    Якщо ви будете використовувати цю дієту, то вживання кслорій потрібно обмежити до 1400 в день. Більшу увагу слід приділяти категоріям дуже низькою та низькою щільністю.
    На основі того, що дієта не обмежує людину зовсім не в чому, вона є безпечною для організму. Це надає людині змогу не відчувати голод на протязі дня та підтримувати свій здоровий спосіб життя у нормі, без зривів з дієти та подальших наслідків для здоров'я.
  </p>
      </section>

      <section id="keto" className="diet-section">
<img
    src="/keto.jpg"
    alt="Кето дієта"
    className="diet-image"
  />
       <h3>Кето дієта</h3>
  <p>
    Кето дієта - це дієта, яка включає у себе майже повне виключення вуглеводів із раціону. Ця дієта більше підійте для людини, коли страждає на цукровий діабет. Вона не включає у себе слідкування за калоріями.
  </p>
  <p>До продуктів, котрі можна вживати на кето дієті відносяться:</p>
  <ul>
    <li>Яйця;</li>
    <li>м'ясо та птиця (яловичина, свинина, курка, індичка, качка);</li>
    <li>риба та морепродукти;</li>
    <li>молочні продукти з високим вмістом жиру;</li>
    <li>олія та жири;</li>
    <li>авокадо, ягоди;</li>
    <li>некрохмалисті овочі;</li>
    <li>горіхи та насіння;</li>
    <li>смусі, напої на рослинній основі (мигдальне, кокосове молоко).</li>
  </ul>
  <p>До продуктів, котрі знаходяться під забороною під час кето дієти відносяться:</p>
  <ul>
    <li>вуглеводи (цукор, солодкі напої, мучні продукти);</li>
    <li>фрукти, котрі містять у собі багато цукру (банан, виноград, манго);</li>
    <li>цукор та солодощі;</li>
    <li>зернові продукти;</li>
    <li>бобові культури (соя, нут, боби);</li>
    <li>алкоголь.</li>
  </ul>
  <p>
    Перш ніж вибрати цю дієту, слід звернутися до лікаря за порадою, чи підходить вона вам, чи ні.
  </p>
      </section>

      <section id="dukan" className="diet-section">
<img
    src="/int.jpg"
    alt="Інтегральне голодування"
    className="diet-image"
  />
         <h3>Інтегральне голодування</h3>
  <p>
    Інтегральне голодування — це режим харчування, котрий супроводжується періодами між голодуванням і прийомом їжі.
    Найчастіший період такої дієти — це <strong>16/8</strong>. Тобто 8 годин ви харчуєтесь, а 16 годин у вас пауза у харчуванні.
    Цей спосіб дозволить знизити кількість спожитих калорій людиною.
  </p>

  <p>
    Під час прийому їжі слід робити увагу на більш здоровій їжі. А тобто, вам потрібно відмовитися від солодощів, мучних продуктів і подібних продуктів.
    Увагу хочемо приділити тому, що якщо ви будете і далі вживати шкідливі продукти та багато калорій, то ніякого результату від дієти не буде.
  </p>

  <p>
    Є ще один метод інтегрального голодування — <strong>5/2</strong>. Він полягає у тому, що 5 днів ви харчуєтеся як завжди, але приділяючи увагу здоровим продуктам харчування,
    а 2 дні ви вживаєте до 500–600 калорій.
  </p>
      </section>

      <section id="lowcarb" className="diet-section">
<img
    src="/vygl.jpg"
    alt="Низьковуглеводна дієта"
    className="diet-image"
  />
        <h3>Низьковуглеводна дієта</h3>
  <p>
    Низьковуглеводна дієта надає можливість знизити вагу та покращити своє здоров'я.
  </p>

  <p>До продуктів, які дозволяється їсти на цій дієті, відносяться:</p>
  <ul>
    <li>м'ясо (яловичина, баранина, свинина, курятина);</li>
    <li>риба (лосось, форель тощо);</li>
    <li>яйця;</li>
    <li>овочі, фрукти;</li>
    <li>горіхи та насіння;</li>
    <li>продукти з високим вмістом жиру;</li>
    <li>жири та олії.</li>
  </ul>

  <p>До заборонених продуктів харчування при низьковуглеводній дієті відносяться:</p>
  <ul>
    <li>цукор та продукти з вмістом цукру;</li>
    <li>шліфовані зернові (пшениця, рис, ячмінь, жито тощо);</li>
    <li>трансжири;</li>
    <li>дієтичні продукти та продукти з низьким вмістом жиру;</li>
    <li>ковбаси, сосиски, чипси, фаст-фуд;</li>
    <li>крохмалисті овочі.</li>
  </ul>

  <p>
    Ця дієта відноситься до тих, де йде скорочення вуглеводів у раціоні та робиться акцент більше на білки і здорові жири.
  </p>
      </section>

      <button className="back-button" onClick={() => navigate('/')}>
        На головну
      </button>
    </div>
  );
}

export default DietsPage;


