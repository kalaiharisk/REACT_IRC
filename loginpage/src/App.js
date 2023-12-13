import './App.css';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
