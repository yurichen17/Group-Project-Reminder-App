import './App.css';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Axios from 'axios'


function App() {

  const register = () =>{
    Axios.post('http://localhost:3001/register')
  }
  return (
    <div class="project">
      <LoginPage register={register}></LoginPage>
    </div>
  );
}

export default App;
