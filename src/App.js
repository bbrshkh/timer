
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Timer from './pages/Timer';
import Counter from './pages/Counter';
import Navbar from './component/Navbar';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">

      <Provider store = {store}>
       <Router>
        <Routes>
          <Route path='/' element={<Navbar /> }>
            <Route index element= {<Home />} />
            <Route path='/timer' element={<Timer /> } />
            <Route path='/counter' element={<Counter /> } />
          </Route>
        </Routes>
       </Router>
      </Provider>

      
       
    </div>
  );
}

export default App;
