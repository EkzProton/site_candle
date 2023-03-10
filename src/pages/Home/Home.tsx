import './Home.css';

import { CatalogSection, MainSection } from './Sections';

export const Home = (): JSX.Element => {
  return (
    <div id="home">
      <div className="container">
        <MainSection/>
        <CatalogSection/>
      </div>
    </div>
  );
};