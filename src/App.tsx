import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { COURSES_PATH, ROUTES } from './config/routes-config';
import { defaultMethod } from 'react-router-dom/dist/dom';
import Navigator from './components/navigators/Navigator';
import { useImitator } from './util/useImitator';

const App: React.FC = () => {
 // useImitator();

  const[flNavigate, setFlNavigate] = React.useState<boolean>(true);
  React.useEffect(() => setFlNavigate(false),[]);
  return <BrowserRouter>
  {flNavigate && <Navigate to={COURSES_PATH}></Navigate> }{/* if it was not existing/*}
  {/* we then were staying on the courses page even if refreshing the browser ! */}
    <Navigator items={ROUTES}/>

    <Routes>
      {getRoutes()}
    </Routes>

  </BrowserRouter>;
}
export default App;
function getRoutes(): React.ReactNode {
  return ROUTES.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}