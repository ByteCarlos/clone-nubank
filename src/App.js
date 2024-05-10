import Background from './components/Background';
import Login from './components/Login';
import './App.css';
import { useState } from 'react';

function App() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="main-container">
      <Background />
      <Login 
        cpf={cpf} 
        setCpf={setCpf} 
        password={password} 
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
