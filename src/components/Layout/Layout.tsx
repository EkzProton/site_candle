import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { ButtonMenu, Menu } from '../Menu';
import { useState } from 'react';


export const Layout = (): JSX.Element => {
  const [open, setOPen] = useState(false);

  return (
    <div id="layout">
      <ButtonMenu propOpen={open} propSetOpen={setOPen}/>
      <Menu propOpen={open} propSetOpen={setOPen}/>
      <Outlet/>
      <Footer/>
    </div>
  );
};