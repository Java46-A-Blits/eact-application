import React from 'react';
import LifeGameConfig from './config/LifeGameConfig.json'
import Life from './components/Life'

function App() {

  return <div  >
    <Life dimension={LifeGameConfig.dimension} ticInterval={LifeGameConfig.tic}></Life>   
  </div>
}
export default App;

