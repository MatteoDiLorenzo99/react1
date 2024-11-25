import logo from './logo.svg';
import './App.css';
import ButtonCompont from './components/ButtonComponent'
import ImgComponent from './components/ImgComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <ButtonCompont/>
 {/* Passa src e alt come props */}
 <ImgComponent src="https://via.placeholder.com/150" alt="Example image" />
           </main>
    </div>
  );
}

export default App;
