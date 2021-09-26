
import './App.css';

import Header from './Components/Header/Header';
import Youtubers from './Components/Youtubers/Youtubers';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  return (
    <div className="App">
      <Header/>
      <Youtubers className="row"></Youtubers>
    </div>
  );
}

export default App;
