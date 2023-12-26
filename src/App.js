
import './App.css';
import Chart from './Components/Chart/Chart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Scroll from './Components/Home/Scroll';
import {
  Route,
  Routes
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='App_main col-md-12'>
<Header/>
 <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/scroll" element={<Scroll />} />
          <Route path="/chart" element={<Chart/>} />  
        </Routes>

       
      

      </div>
    </div>
  );
}

export default App;
