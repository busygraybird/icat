import { FC } from 'react';
import CatForm from '../CatForm';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div>
          <Routes>
            <Route />
          </Routes>
          <CatForm />
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
