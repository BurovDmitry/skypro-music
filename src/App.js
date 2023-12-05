import { useEffect, useState } from 'react';
import './App.css';
import AudioPlayr from './components/audio-playr/AudioPlayr.jsx';
import NavMenu from './components/nav-menu/NavMenu.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Tracklist from './components/track-list/Tracklist.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, fas } from '@fortawesome/free-solid-svg-icons'

function App() {
  library.add(fas, faBars)
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <div>
              <NavMenu />
            </div>
            <div>
              <Tracklist showSkeleton={showSkeleton} />
            </div>
            <div>
              <Sidebar showSkeleton={showSkeleton}/>
            </div>
          </main>
          <div>
            <AudioPlayr showSkeleton={showSkeleton}/>
          </div>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;


