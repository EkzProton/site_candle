import './Menu.css';

type MenuProps = {
  propOpen: boolean;
  propSetOpen: (value: boolean) => void;
};

export const Menu = ({ propOpen, propSetOpen }: MenuProps) => {
  return (
    <div id="mainMenu" className={'mainMenu ' + (propOpen ? 'active' : '')}>
      <div className="Menu">

        <button className="close" onClick={() => propSetOpen(!propOpen)}>
          Закрыть
        </button>
      </div>
      <div className="fix_bug" onClick={() => propSetOpen(!propOpen)}></div>
    </div>
  );
};