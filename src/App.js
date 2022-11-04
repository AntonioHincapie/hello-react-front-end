import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/home';
import Greetings from './components/greetings';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greeting" element={<Greetings />} />
    </Routes>
  </Router>
);

export default App;
