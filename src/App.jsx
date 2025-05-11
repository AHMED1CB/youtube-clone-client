import { Routes , Route } from 'react-router-dom';
import  HomePage from './components/HomePage';

function App() {

  return (
    <Routes> 
        <Route path='/' element={<HomePage/>} />
    </Routes>
  )
}

export default App;
