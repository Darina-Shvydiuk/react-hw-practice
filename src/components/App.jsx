import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { menuConfig } from './Menu';

export const App = () => {
  return (
    <div>
      <Sidebar menu={menuConfig}>Logo</Sidebar>
      <Main></Main>
    </div>
  );
};
