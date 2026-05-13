import logo from './logo.svg';
import './App.css';

function App() {
  // Khai bao mot bien co ten la name va gan gia tri "LoanTTB"
  const name = "LoanTTB";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello, {name}!</h2>
      </header>
    </div>
  );
}

export default App;
