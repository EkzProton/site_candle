import './MainSection.css';

export const MainSection = (): JSX.Element => {
  const handlerClick = () => {
    window.scrollBy({
      top: 1297,
      behavior: 'smooth'
    });
  };

  return (
    <div className="main_section">
      <div className="content">
        <div className="brand">
          <div className="title">
            OUSHA
          </div>
          <div className="description">
            Добро пожаловать в наш интернет-магазин свечей!<br/>
            Мы предлагаем широкий выбор свечей премиум-класса с различными ароматами, размерами и стилями.
            От успокаивающей лаванды до бодрящей мяты наши свечи превратят любую комнату в уютное и привлекательное
            пространство.<br/>
            Купите сейчас и испытайте тепло и атмосферу наших свечей в уют собственного дома.
          </div>
        </div>
        <div className="goods">
          <div className="image">
            <img src="./images/candle.png" alt=""/>
          </div>
          <div className="action">
            <button onClick={() => handlerClick()}>
              <span>Купить</span>
              <span className="arrow down"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};