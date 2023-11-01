import './App.css';
import AudioPlayr from './components/audio-playr/AudioPlayr.js';
import NavMenu from './components/nav-menu/NavMenu.js';
import Sidebar from './components/sidebar/Sidebar.js';
import Tracklist from './components/track-list/Tracklist.js';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <div>
              <NavMenu />
            </div>
            <div>
              <Tracklist />
            </div>
            <div>
              <Sidebar />
            </div>
          </main>
          <div>
            <AudioPlayr />
          </div>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;

