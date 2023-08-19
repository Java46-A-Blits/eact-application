import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { COURSES_PATH, ROUTES } from './config/routes-config';
import { defaultMethod } from 'react-router-dom/dist/dom';
import Navigator from './navigators/Navigator';
import { useImitator } from './util/useImitator';

const App: React.FC = () => {
  useImitator();

  const[flNavigate, setFlNavigate] = React.useState<boolean>(true);
  React.useEffect(() => setFlNavigate(false),[]);
  return <BrowserRouter>
  <Navigator items={ROUTES}/>
  {flNavigate && <Navigate to={COURSES_PATH}></Navigate> }{/* if it was not exist /*}
  {/* we were staying on the same page despite refreshing the browser ! */}
    <Routes>
      {getRoutes()}
    </Routes>

  </BrowserRouter>;
}
export default App;
function getRoutes(): React.ReactNode {
  return ROUTES.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}