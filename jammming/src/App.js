import logo from './logo.svg';
import './App.css';
import Search from './containers/Search';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Search/>
        <Playlist />
      </div>
    </div>
  );
}

export default App;
