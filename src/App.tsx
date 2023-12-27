import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { COURSES_PATH, LOGIN_PATH, ROUTES } from './config/routes-config';
import { defaultMethod } from 'react-router-dom/dist/dom';
import Navigator from './components/navigators/Navigator';
import { useImitator } from './util/useImitator';
import { ClientData } from './models/ClientData';
import { useSelector } from 'react-redux';
import { StateType } from './redux/store';
import { RouteType } from './models/RouteType';

const App: React.FC = () => {
 // useImitator();
  const clientData: ClientData = useSelector<StateType, ClientData>(state=>state.clientData);

  const[flNavigate, setFlNavigate] = React.useState<boolean>(true);
  const relevantItems: RouteType[] = React.useMemo<RouteType[]>(() => getRelevantItems(clientData), [clientData]);
  React.useEffect(() => setFlNavigate(false),[]);
  return <BrowserRouter>
  
  {/* if it was not existing we then were staying on the courses page even if refreshing the browser ! */}
    <Navigator items={relevantItems}/>
    {flNavigate && (clientData.email ? <Navigate to={COURSES_PATH}></Navigate> : <Navigate to={LOGIN_PATH}></Navigate>)}
    <Routes>
      {getRoutes(relevantItems)}
    </Routes>

  </BrowserRouter>;
}
export default App;
function getRoutes(relevantItems: RouteType[]): React.ReactNode {
  return relevantItems.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}
function getRelevantItems(clientData: ClientData): RouteType[]{
  //TODO - FOR ADMIN
  return ROUTES.filter(r => (!!clientData.email && r.authenticated) || (!clientData.email && !r.authenticated && !r.administrator) 
  || (clientData.isAdmin && r.administrator))
}