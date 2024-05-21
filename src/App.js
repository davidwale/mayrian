import './App.css';
import Home from './pages/Home/Home';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className='App'>
      <Home />
      <Analytics />
    </div>
  );
}

export default App;
